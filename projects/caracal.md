# Caracal - Data Migration

Caracal is a distributed database software developed as a research project under Professor Ashvin Goel, developed by his graduate students. Notably it's a deterministic database, which means that they have a predetermined ordering of transactions (atomic sets of actions) and are very scalable.

The performance of these types of databases is very dependent on the quality of the partitioning of data. This means that the ability to dynamically repartition the database in anticipation of future workloads can improve performance of the database. In English, if we are able to predict when certain chunks of data are going to be used, we can move them to other nodes in the system to distribute load.

For my capstone project (final year design project) me and a group of 3 others worked on implementing this 'migration' in Caracal. There was more work but my work focused on migration. Attached below is a diagram explaining the general idea. Of course in the real system a migration takes severel 'epochs'.

![Data Migration Diagram](res/img/datamigrationfull.png)

In essence we had to implement the data transfer from node to node, as well as the control code to handle when to start migrating, and when it's safe to transfer control over. 

The control part turned out to be the most difficult. I guess it's useful to mention that Caracal operates on epochs. Transactions are batched into epochs, and inbetween these epochs dependencies are discovered and steps are performed in a heavily pipelined process. Due to the nature of this it's not possible to reroute transactions inbetween epochs. Thus it's necessary to make sure that the ownership of data after it has been replicated happens on these epoch boundaries.

I had to create a system of agreement for when this ownership would be transferred between a source and destination node, which would try to predict when a migration would finish. If it thought a migration would finish, the sender would send the receiver a commitment message. Then both the sender and receiver would guarentee that a migration would finish, and if it didn't they would stall. The protocol is shown below.

![Migration Protocol Diagram](res/img/migcoord.png)

I also implemented a policy system to determine when and what chunks to migrate. There is literature on what the appropriate strategy is, with a relevant paper posted below. What's important is that in Caracal migration is implemented to support movement of large chunks of data (>50MB), so great care needs to be taken in deciding what to migrate. I never managed to get far into that stage of the project, something for some future project to look into.

## Relevant Papers
[Caracal: Contention Management with Deterministic Concurrency Control](https://www.eecg.utoronto.ca/~ashvin/publications/caracal.pdf)
[Don’t Look Back, Look into the Future: Prescient Data Partitioning and Migration for Deterministic Database Systems](http://www.cs.nthu.edu.tw/~shwu/pubs/shwu-sigmod-21.pdf)
