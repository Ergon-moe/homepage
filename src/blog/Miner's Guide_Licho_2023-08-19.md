**Ergon** is very different from a regular cryptocurrency.

It **rewards for hashes**. The current block reward is proportional to the current difficulty. Difficulty is roughly the number of hashes to solve a block. Once you do on average this number of hashes you get the reward. **Coins for hashes.** When you turn on your miner you can be certain that on average you will receive an amount of coins proportional to your hashing power and time you mine. Mining pools also share that proportionally to the contribution so it doesn't change anything, except the pool fee. In this article we will dive into the specifics, but first let us list the basic informations:

| Characteristic    | Value       |
|-------------------|-------------|
| Algo              | sha256d     |
| Target Block Time | 10min       |
| DAA               | Every block |
| RPC               | bitcoind    |
| virtual machine   | UTXO        |

### An example

If you head to [Ergon Pool](https://pool.ergon.network), you'll find a calculator that shows what's the ratio of hashes to coins. An example from today is as follows:

* * *

We are at the height of: 133346

Difficulty is: 66608361.14138157

Number of hashes to find a block: 286085098054556196

The block reward is: 11633.0 fix

1Ths would be earning **3513fix** a day finding 0.30 blocks

3513fix is 0.03513mXRG which is 0.00003513XRG

* * *

As a reminder, a **fix** is Ergon's equivalent of satoshi unit, eight decimal of a full XRG.

The most important metric is _how much 1Ths earns a day_ - **this doesn't change with difficulty**, it only changes over time with Moore's Law correction. It is reduced slowly to compensate for hardware efficiency improvements, it takes 2.3y for it to halve.

To calculate how many coins you will get for a day of mining with certain hashrate, simply multiply this number by your hashrate. For example:

`0.00003513 XRG/Ths x 1Phs = 0.00003513 XRG/Ths x 1000Ths = 0.03513 XRG` And that's true **regardless of the current difficulty**. Having that number, it's enough to multiply it by the price and subtract your costs. What's left is your profit.

## Gaming DAA is impossible.

Because of the proportional reward system, Ergons difficulty adjustment is uncoupled from the supply emision. Faster blocks increase the reward by exactly the same amount as a difficulty increase. Indeed **0.1 every 1 minute is the same as 1 every 10 minutes**. Difficulty adjustment only serves the purpose of **user experience** and lowering the **orphan rate**. In the long run it also regulates Moore's law correction but that's a different timescale.

Many miners heve tested if the same techniques that work on other POW coins work on Ergon and finally figured out they don't. In the process they've lost money, not getting the edge they expected and caused bad UX for everyone. **Proportional reward can't be gamed**. Gaming the DAA originates precisely from the fact that the reward isn't proportional and DAA indeed regulates the supply schedule.
