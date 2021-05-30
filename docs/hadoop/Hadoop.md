## Hadoop

- Distributed Systems: Multiple machines run together to solve data problem

- Challenges: Limited bandwidth, progamming complexity, difficult to synchronise --> solved by Hadoop.

- Hadoop is a framework that allows distributed processing of large datasets across cluster of computer.

**Hadoop Key charecterstics: Economical, Reliable, Scalable, Flexible.**

Runs calculation where required, no need for central location. Traditional methods can only support semi structed and stuctured data.

### 1. Hadoop Environment

Initially it consisted of 3 core: resource, management and storage.

- Hadoop HDFS - Hadoop Distributed File System (HDFS) is the storage unit of Hadoop.

- Hadoop MapReduce - Hadoop MapReduce is the processing unit of Hadoop.

- Hadoop YARN - Hadoop YARN is a resource management unit of Hadoop.

![](/Users/saadshamim/Documents/github-repos/saadshamim01/WebDevelopment/Hadoop/images/hadoop_ecosystem.png)

#### 1.1 Components

- **HDFS**: It is storage layer. While storing data is first distributed and then processed. Streaming allowed, Permission and authentication allowed. Command line.
- Hbase: Non relational database, used for random, real time, read or write access to big data, support high volume throughput.
- **Sqoop**: Tool to transfer data between Hadoop and RD server, used to import & export data. Can ingest data from MySQL, Oracle to HDFS & vice-versa.

- **Flume**: Distributed service, collects event data, non relational data & transfers to HDFS. Suitable for multi systems.
- **Spark**: After data is transfered to HDFS, it is processed using Spark, its a cluster computing network which provides 100s in-memory performance compared to two-staged MapReduce using Hadoop. Processes data in HDFS. Supports machine learning, BI, streaming & batch processing.
- Spark components:
**Spark Core, Spark SQL, Spark streaming, Mlib, Graphx**
- **MapReduce**: Another framework to process data, original Hadoop processing engine, maps and reduces, map reduce apps HIve and Pig are built on MapReduce, fault tolerant, spark better.
- **Pig**: Converts scripts to Map & Reduce, Ad-hoc queries like Filter & Join which are difficult to perform in MapReduce. Analyse data using Impala. Low latency.
- **Impala**: support dialect of SQL, can perform analysis using HIVE. Can perform Data processing and Extract Transform Load known as ETL operations.
- **Hive**: Executes queries using Mapreduce, for structured data, after analysis acccess allowed.
- **Cloudera Search**: Searching data in cloud, real time access product. Provides simple full text interface search. Stand alone product. Flexible, scalable and robust storage, elimates the need to move large datasets across infrastructures.
- **Hadoop jobs**: such as MapReduce, Pig, Hive, and Sqoop have workflows.
- **Oozie**: Workflow or coordination system to manage Hadoop jobs.


- **Hadoop User Experience (HUE)**: Open source web interface for Hadoop. Users can: upload/browse data, query a table in HIVE and Impala. Run Hadoop jobs etc.

#### 1.2 Stages of Big Data processing

**Ingest -> Processing -> Analyze -> Access**

- Ingest: 1st stage, data transfer from RDBMS to HDFS whereas Flume transfers event data.

- Processing: Data stored in HDFS and processed in Spark and MapReduce.

- Analyze: Data analyzed by Pig, Hive and Impala.

- Access: Hue and Cloudera search is used, analyzed data can be accessed by users.


### Other technologies:

- Apache Hive: Orginial SQL Hadoop solution, similar syntax as mySQL. Includes Java APO and JDBC dirver.
Slow and Read only.

- Stringer: Improvement of hadoop distribution by Hortonworks. It has has transactional behaviour (insert, update, and delete), also SQL Analytics.

- Apache Drill: Low latency query on multiple types of data source types. Highly scalable. Fast query.

- Spark SQL: Real time, in memory parllelizedf processing of Hadoop data. Built on top of it.



