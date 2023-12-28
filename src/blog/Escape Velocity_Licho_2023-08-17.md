*Update (2023-11-21):* The article contained an error in the calculation of particular escape velocities. It has been corrected and expanded to show where the numbers came from.

The common theme of the cryptocurrency space is **the hard supply cap**. Cryprocurrencies and tokens often have a fixed number of units to ever come to existence. By the simple reasoning, if there is a fixed number of units then it must be scarce, therefore valuable, right? Is 21 million units of Bitcoin a lot? People often say things like **"There are 8 billion people in the world, so it's not enough for everyone to have 1 Bitcoin"** silently assuming the big win scenario - everyone will want it. In the space of thousands of cryptocurrencies that we have today, any of them still follows this logic and proclaims itself the future "winner". In fact,  cryptocurrencies rely on this logic with their survival, implementing diminishing reward that will eventually disappear.


## How much is much?
This question doesn't make sense without a context. Value is an equilibrium between two factors - both supply and demand. We compare the amount to the size of the market for it. 100 apartamnt buildings is a very different number in a small town than it is in a metropoly.

## The invisible hand of the market
Normally, outside the synthetic realm of digital assets, in a free market economy, it is very organic and obvious. If there's too little of something, the price grows. It informs the people about the demand. Manufacturers hop in and produce more, in turn balancing out the demand with the supply. If they misjudge the demand, they can't sell it above their cost, they lose money. If that losing happens a lot, they scale down. The total supply of any good is always following the demand. That's the famous invisible hand of the market.

Cryptocurrencies are different. They follow a plan. A central plan. One that was imagined and implemented by the creator at the very beginning. The crypto communities hold it as sacred, and it's not to be tampered with (with some exception when a central planner orders a thirding). Thus, the cryptocurrency market has its invisible hand cut off.

## Ergon proportional reward

Ergon features **proportional reward**. Proportional reward removes The Plan in favor of the naturally occurring invisible hand of the market. At any point in time, miners **can** produce more coins, they just need to mine harder. They use the price as the source of the information about demand. If they can earn money - they produce coins. If they can't, they stop. The proportional reward is additionally scaled for the Moore's law (or [Koomey's law](https://en.wikipedia.org/wiki/Koomey%27s_law) if you prefer) - the gradual improvement of the computations making it easier to mine over time, so that the miners still have to mine harder to get more coins, not just install the new equipment. 

Naturally it removes the notion of **hard cap**, but it also doesn't mean the supply is infinite. It is very much restricted by the resources and economic conditions. We need some new terminology to talk about how restricted it is.

## Escape Velocity

To actually depict how restricted it is, we need to revert to the notions familiar to the person coming from cryptocurrency background, also easily understandable to a no-coiner. Escape velocity is the speed an object has to get to go into an orbit or beyond it. Similarly, we will use this for a sort of supply cap.

If the technological progress would suddenly stop and Ergon would forever have the hashrate it has at the halt point, the Moore's law correction would make it just a regular cryptocurrency with a hard cap. Now, using this ultimate hashrate as a parameter, we can get a picture of how restrictive the supply it. The formula is `current supply +factor x hashrate`.

Let's see some numbers (as of 2023-11-21). `Current supply` is about 33ⵟ and the `factor` is around 0.0384  $`\frac{ⵟ}{Thps}`$. To see the derivation details, check out the [next paragraph](#derivation).

|hashrate|supply cap|
|--------|----------|
|100Ths  |37ⵟ      |
|1Phs    |71ⵟ     |
|4Ehs    |153.5 kⵟ  |
|400Ehs  |15.3 Mⵟ   |

Which means that if the entire hashrate in existence right now for whatever reason switched to mine Ergon, and no hashrate was ever added or removed, the supply cap would still be around 15 million Ergons.

I hope that illustrates how scarce Ergon really is.


<h3 id='derivation'>Derivation </h3>

This is a bonus paragraph for the people who'd want to see where it comes from.
We sum up all of the diminishing rewards.

The reward rate $`R = e^{-\ln2 \frac{t-t_0}{\tau}}\times 365 r \times H`$, where $`r`$ is the daily reward (you can take the current one from [Ergon Network Pool](https://pool.ergon.network), it's the last number), $`\tau = 2.3y`$ is the halving time and $`H`$ is hashrate. 365 appears because $`r`$ is in the unit of $`\frac{ⵟ}{Thps\times\text{day}}`$ while the halving time is in years.

To sum the rewards together, we integrate the equation from now to infinity.

```math
T=\int_{t_0}^{\infty}e^{-\ln2 \frac{t-t_0}{\tau}}\times  365 r  \times H dt
```
Where $`T`$ is `total`, 

The result of the integration to infinity is:

`total` = `current supply` + (`halving time`/ln2) * 365 * `daily reward` * `hashrate`

We will call the factor in front of `hashrate` the `factor`.

`halving time` = 2.3y,

`daily reward` (as of 2023-11-21)= 0.00003168$`\frac{ⵟ}{Thps\times\text{day}}`$,

`ln2` = 0.693,

The `factor` is equal to 0.0384 $`\frac{ⵟ}{Thps}`$.

