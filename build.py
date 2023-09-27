#! /bin/python
import os
import re
from pathlib import Path
from datetime import date, datetime

from io import StringIO
import markdown
from staticjinja import Site
from email import utils

def unmark_element(element, stream=None):
    if stream is None:
        stream = StringIO()
    if element.text:
        stream.write(element.text)
    for sub in element:
        unmark_element(sub, stream)
    if element.tail:
        stream.write(element.tail)
    return stream.getvalue()

markdown.Markdown.output_formats["plain"] = unmark_element
markdowner = markdown.Markdown(output_format="html5", extensions=['tables', 'footnotes'])
plainer = markdown.Markdown(output_format="plain", extensions=['tables', 'footnotes'])
plainer.stripTopLevelTags = False

def md_context(template):
    markdowner.reset()
    name, author, d = template.name.split('/')[1][:-3].split('_')
    markdown_content = Path(template.filename).read_text()
    return {
        "post_content_html": markdowner.convert(markdown_content),
        "title": name,
        "author": author,
        "date": d,
    }

def render_md(site, template, **kwargs):
    # i.e. posts/post1.md -> build/posts/post1.html
    out = site.outpath / Path(template.name).with_suffix(".html")

    # Compile and stream the result
    os.makedirs(out.parent, exist_ok=True)
    site.get_template("_article.html").stream(**kwargs).dump(str(out), encoding="utf-8")

def get_posts():
    arts = []
    for file in os.listdir('./src/blog'):
        markdowner.reset()
        if not bool(re.search(r'.*\.md', file)):
            continue
        with open(os.path.join(os.getcwd(),'src', 'blog',file)) as f:
            intro = ' '.join(f.read().split(' ')[:15])+'...'
        name, author, d = file[:-3].split('_')
        teaser = markdowner.convert(intro)
        if '<a' in teaser:
            teaser = re.sub(r'<a href=".*">(.*)</a>', r'\1', teaser )
        arts.append({'title':name,'date':d, 'author': author, 'teaser':teaser})
        markdowner.reset()
    arts.sort(key=lambda article: date.fromisoformat(article['date']), reverse=True)
    return {'articles':arts}

def get_posts_rss():
    arts = []
    for file in os.listdir('./src/blog'):
        markdowner.reset()
        if not bool(re.search(r'.*\.md', file)):
            continue
        with open(os.path.join(os.getcwd(),'src', 'blog',file)) as f:
            intro = ' '.join(f.read().split(' ')[:15])+'...'
        print(intro)
        name, author, d = file[:-3].split('_')
        teaser = plainer.convert(intro).replace('\'', '&apos;')
        arts.append({
            'title':name,
            'title_url': name.replace(' ', '%20'),
            'date':d,
            'author': author,
            'teaser':teaser,
            'pubdate': utils.formatdate(float(date.fromisoformat(d).strftime('%s')))
        })
        markdowner.reset()
    arts.sort(key=lambda article: date.fromisoformat(article['date']), reverse=True)
    return {'articles':arts}

if __name__ == "__main__":
    site = Site.make_site(
        searchpath='src/',
        outpath='build/',
        staticpaths=['css/','images/','js'],
        contexts=[
            (r'.*\.md', md_context),
            ('blog/index.html',get_posts),
            ('blog/rss.xml',get_posts_rss)
        ],
        rules=[(r'.*\.md', render_md)]
    )
    # enable automatic reloading
    site.render()
