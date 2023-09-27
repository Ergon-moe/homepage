**What is money?** This is the most fundamental question when we set out to build a p2p electronic cash system. Since that's the goal of Ergon, that's **our fundamental question**. What is that thing that we want to construct? We get it intuitively, since we use it every day. We are familiar with the properties of money - store of value, means of exchange, unit of account, but I would argue that those are secondary.

## Liquidity
There is this term called **liquidity**. It's used in many contexts, like *Is that company liquid?*, or *Oh no, there is no liquidity on the market*, *This asset is liquid*. Those are examples of the use of the same word, but we will focus on the **asset liquidity** and the **market liquidity**.

Common definition says that an asset is liquid when you can easily, cheaply and quickly convert it to cash [^liq1]. It can't be applied to cash itself, because that would be circular. Cash however, is defined as **the most liquid asset on the market**. The definition of liquidity involves cash, so we have to patch it. Let us define cash as

`An asset that is the easiest, cheapest and fastest to exchange for anything,`

Now that's a definition. Liquidity captures the ease of trading, and cash is this special asset that is the most liquid of them all. Then, when you trade a particular asset for cash, you're free to exchange it for anything else you want.

P2p cash has to maximize liquidity. That's the answer to the most fundamental question of the undertaking of creating p2p cash.

## Certainty as the source of liquidity

On the markets, liquidity manifests with deep and broad order books, low spreads, big volumes and low volatility. Market liquidity is multidimensional - it can be viewed as a set of the following characteristics [^liq]:

* **Immediacy** - time it takes to sell an asset,
* **Tightness** - cost of transaction,
* **Depth** - abundance of orders on different price levels,
* **Breadth** - how much a large trade will affect the price,
* **Resilience**  - how fast an equilibrium is found after a shock.

Market liquidity is a complex phenomenon. Many scholars studied it. One observation is that an increase in the **expected volatility reduces the liquidity** [^vol]. Another paper states that a market maker's desire to supply liquidity is typically a function of an asset's **fundamental volatility** [^vol2].

It is also quite clear that the major cost for the liquidity providers is price discovery. Remember the notion of **impermanent loss**, familiar from automated market makers - any price change causes a portfolio value loss compared to not being involved in any operation at all, because a liquidity provider is either missing out on appreciation or taking shots from the price drop.

It all adds up to a picture, where stability and certainty leads towards better liquidity and volatility, uncertainty leads against it. That's the main reason why Bitcoin can't become money. It is **fundamentally volatile**, because the supply is blind to the market conditions. Cryptocurrencies are exceptionally volatile. More than anything in the world, and this is not an accident. Bitcoiners often say that this is great because it attracts people, but this is also the reason why it can never become the most liquid asset in the economy - money.

Others make arguments that in a hyper-bitcoinized economy the volatility would stop, but we do see fiat currencies collapsing in fully hyper-fiat economies. There is no reason why wouldn't there be volatility in all-bitcoin world. Besides, a chicken-and-egg problem is still a show-stopper.

What else is adoption, if not an immediate market for all sorts of goods and services on every street corner? Every 7/11 or 24h convenience store is a liquidity provider for the *stuff*/money market.

## Ergon Stability

Ergon replaces the arbitrary emission schedule with a market mechanism, making it similar to any regular good in the world. It is still like a metal that can be teleported anywhere in the world, to paraphrase Satoshi Nakamoto, that can be used as a means of exchange. It is still secured cryptographically and by incentives, it's unstoppable and permissionless, but it is also elastic in supply and reacts to the market conditions. It fundamentally **has** a fair price to be discovered by the market. According to the mathematical model, it should be oscillating around the equilibrium price, but this effect should vanish as the liquidity grows, by the absence of dynamic arbitrage principle [^dyn].

The features inherited from Bitcoin and certainty as well as stability make it the perfect asset for the market makers (which involves merchants), and that ensures me that it will eventually achieve the status of the most liquid asset in the world. The global p2p electronic cash.

[^liq1]: Liquidity and execution costs in equity markets, J. Hasbrouch, R. A. Schrartz.
[^liq]:Measuring Liquidity in Financial Markets, A. Sarr, T. Lybek.
[^vol]:Market Liquidity and Trading Activity, T. Chordia, R. Roll, A. Subrahmanyam.
[^vol2]:Time Variation in Liquidity: The Role of Market-Maker Inventories and Revenues, C Comerton-Forde, et al.
[^dyn]:No-Dynamic-Arbitrage and Market Impact, J. Gatheral, 


