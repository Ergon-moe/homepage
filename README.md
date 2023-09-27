# Ergon.moe
This is the Ergon website source code. 
It is made using the [staticjinja](https://staticjinja.readthedocs.io/en/latest/) library. Compile it  with the `build.py` script from the templates in the `src/`. The blog is compiled from the markdown files in `src/blog/`.

### Mirroring

To host an instance of the website, [set up nginx](https://www.nginx.com/blog/setting-up-nginx/), copy the `build/` directory to your server and point nginx to it. For easy updates, edit the `deploy.sh` script to have your username and server url.
