In my previous writing, I often argue that the unit of Ergon represents work. That the miners are rewarded proportionally to the work they do. This work seems to be so essential, it raises the question: What do they actually do that other people need? How is that a contribution to society?

There is a common **misconception** that **Proof Of Work (POW) is wasteful**. It appears in public comments, in press and on TV. It only shows that it's not clear what are the miners actually burning their electricity for. It seems pointless, the common explanation is that they are solving some hard mathematical puzzles, playing a lottery.

### Hashing
Let us start from the beginning. There is a mathematical operation, a so-called **one way function**. It is like a set of dice, that when thrown at a specific angle and speed will draw a certain result. It is just mathematics, so throwing the dice at the same angle and speed twice will yield the same result. What is important: knowing the result, you can't find out what were the initial conditions, you can't learn the angle and speed. Now if you put a username as the angle (a→1, b→2, c→3) and a password as the speed of the dice and throw them, the resulting dice numbers are the **hash** of user data. By the way, this is indeed how they securely store credentials in web services. They don't throw dice though, there are cryptographic functions that do it. When you log in, they will just hash what you've sent and compare the results, never revealing the password.

For example:
`user: abba (=1221)`

`password: 123`

`throwing angle: 12,21°`

`throwing speed: 1.23m/s`

hash: &#9861;, &#9859;, &#9857;, &#9859;.

### Ok, so what do the miners do, actually?

A hash is a **mathematically objective truth**. Miners are manufacturing the mathematically objective truth, and they **carry over the truth onto the record of history** by putting the history and the timestamp as parameters of the one way function and hash it.

### How much of the truth is needed?

This kind of truth is easy to counterfeit, change the history record and hash it. How do we tell which record is real? Therefore, we need a stronger truth.


You can request the truth to be special, like you'd wish a dice throw that would yield one die to draw a "&#x2680;". This is special a special result, it requires modifying the parameters a bit, maybe adding some numbers after the coma, so we don't ruin the message.

For example:
`user: abba (=1221)`

`password: 123`

`throwing angle: 12,211234123°`

`throwing speed: 1.2333457456742m/s`

hash: &#9856;, &#9859;, &#9857;, &#9859;.

This is a special hash, It's harder to find one like this, it requires much more throwing attempts with different tails. We can say this **truth is stronger**. Harder to counterfeit. It's hardly a lottery. The search is a bit random, that's why they are called miners, they are searching the available space, but mining is not just gambling on a lottery. They are searching for an objective, mathematical truth, strong enough to confirm the history.

If at least half of the all miners' work is dedicated to confirming the reality, the honest ones ought to produce a stronger cumulative truth than the fakers. This is the essence of Proof Of Work. The work that miners are doing is not wasted, they are manufacturing the truth to carry it over on the history record.

### How do you measure the strength of the truth

We measure the strength of the truth by the average number of attempts required to find it. If you wish two of the dices to draw a "&#x2680;", it will be of higher difficulty than drawing one. Naturally, if one does some number of attempts per second, twice as high difficulty will result as twice as high solving time. The strength required by the network is adjusted for the healthy communication - so that the blocks of the records were roughly evenly space with enough time in between them for everyone to communicate.

### Simplified payment verification

Because one can judge the strength of the truth independently, and can cryptographically prove that his transaction is the part of the history without knowing the entirety of it, Simplified Payment Verification (SPV) is possible. Essentially, one only needs the header of a block and a small chunk of data to be confident their transaction was confirmed. Faking the SPV is exactly as difficult as faking the entire history. It is possible because of how objective the mathematical truth manufactured by the miners is.

### Other consensus algorithms

**Proof of Stake (POS)**, usually presented as an alternative to POW, is not concerned with the objective mathematical truth. It is a mechanism for **deciding who's got the right to confirm** the chunk of history this time. **It's a very different question.**  

And indeed the **results are different**, for instance to join a POS consensus you need to first be enrolled to the system by the present already - by having the transaction sending you enough coins confirmed by them, so you can put the coins at stake (if you cheat you lose the stake). **The freedom to join the consensus** is closely tied to the cryptocurrency **supply distribution** - a new participant has to buy the coins from *someone* to be allowed to join.

Light SPV wallets are **not possible**, to have any certainty about the consensus you need to **verify all the transfers**. You have to know who is allowed to confirm reality. In most cases, the light wallets simply [trust a third party](https://nimbus.guide/trusted-node-sync.html).

I don't want to evaluate the pros and cons or assess any attack vectors here, just acknowledging that there is a **qualitative difference** between the consensus algorithms. They answer a different question, solve a different problem.


### Summary
The miners are not wasting electricity. They are manufacturing something of value - the objective truth. This truth carries over its weight onto the record of history. It's powered by electricity, which in principle can be renewable, electrification of transport happens for this reason. Additionally, at this point, it is completely unstoppable. There is no headquarters. It's like digging sand. It can be made illegal, but you get a shovel, and you dig sand in your backyard. Similarly doing proofs of work, although in most cases you'd need more like a small excavator.


