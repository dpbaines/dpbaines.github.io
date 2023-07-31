# Caracal - Data Migration

Caracal is a distributed database software developed as a research project under Professor Ashvin Goel. It's a deterministic database, which means that transactions (atomic sets of actions) are executed in a predetermined order, which is seen consistently across nodes. Deterministic databases have been shown to scale better than non-deterministic databases especially with higher contention.

In "Don't Look Back" (attached below) Lin et al. looked at the impact of dynamically migrating sections of the database between nodes. They state that the performance of a determinisitic database is very dependent on how optimally data organized between nodes, and that this "optimal" distribution changes depending on the workload. This means that the ability to dynamically repartition the database in anticipation of future workloads can improve overall system performance. If we are able to predict when certain chunks of data are going to be used, rearranging data dynamically among nodes to better distribute load should improve performance.

For my capstone project (final year design project) me and a group of 3 others worked on implementing this functionality - called migration - in Caracal, on top of improving the benchmarking tooling of the project. Attached below is a diagram explaining the general idea. Of course in the real system a migration takes severel 'epochs'.

![Data Migration Diagram](res/img/datamigrationfull.png)

We had to implement the data transfer from node to node, as well as the control code to handle when to start migrating, and when it's safe to transfer control over. 

The control part turned out to be the most difficult. It's useful to mention that Caracal operates on epochs. Transactions are batched into epochs, and inbetween these epochs dependencies are discovered and steps are performed in a heavily pipelined process. Due to the nature of this it's not possible to reroute transactions inbetween epochs. Thus we need to make sure that while we replicate data on a new node in epochs, the formal transfer of "ownership" of data between nodes has to happen on epoch boundaries.

I had to create a system of agreement for when this ownership would be transferred between a source and destination node, which would try to predict when a migration would finish. If Caracal thinks a migration will finish, the sender will send the receiver a commitment message. Then both the sender and receiver will guarentee that a migration will finish, and if it didn't they will stall. The protocol is shown below.

![Migration Protocol Diagram](res/img/migcoord.png)

I also implemented a policy system to determine when and what chunks to migrate. There is literature on what the appropriate strategy is in "Don't Look Back". What's important is that in Caracal migration is implemented to support movement of large chunks of data (>50MB), so great care needs to be taken in deciding what to migrate. I never managed to get far into that stage of the project, something for some future project to look into.

## Relevant Papers
[Caracal: Contention Management with Deterministic Concurrency Control](https://www.eecg.utoronto.ca/~ashvin/publications/caracal.pdf)
[Don’t Look Back, Look into the Future: Prescient Data Partitioning and Migration for Deterministic Database Systems](http://www.cs.nthu.edu.tw/~shwu/pubs/shwu-sigmod-21.pdf)
