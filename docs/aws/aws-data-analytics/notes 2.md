If your EC2 instance is in a different AWS account, create an IAM role to provide access to the Kinesis Data Streams service, and specify that role when you configure the agent (see [assumeRoleARN](https://docs.aws.amazon.com/streams/latest/dev/writing-with-agents.html#assumeRoleARN) and [assumeRoleExternalId](https://docs.aws.amazon.com/streams/latest/dev/writing-with-agents.html#assumeRoleExternalId)). 

Requests made with many different partition keys to streams with many different shards are generally faster than requests with a small number of partition keys to a small number of shards. The number of partition keys should be much larger than the number of shards to reduce latency and maximize throughput.

if delivery to the backup S3 bucket fails, Kinesis Data Firehose keeps retrying until the retention period ends. For `DirectPut` delivery streams, Kinesis Data Firehose retains the records for 24 hours. For a delivery stream whose data source is a Kinesis data stream, you can change the retention period as described in [Changing the Data Retention Period](https://docs.aws.amazon.com/streams/latest/dev/kinesis-extended-retention.html).

Also, if you use the `PutRecordBatch` API, make sure your code checks the value of [FailedPutCount](https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecordBatch.html#Firehose-PutRecordBatch-response-FailedPutCount) in the response even when the API call succeed

- Check the Kinesis Data Firehose `IncomingBytes` and `IncomingRecords` metrics to make sure that data is sent to your Kinesis Data Firehose delivery stream successfully. For more information, see [Monitoring Kinesis Data Firehose Using CloudWatch Metrics](https://docs.aws.amazon.com/firehose/latest/dev/monitoring-with-cloudwatch-metrics.html).
- If data transformation with Lambda is enabled, check the Kinesis Data Firehose `ExecuteProcessingSuccess` metric to make sure that Kinesis Data Firehose has tried to invoke your Lambda function. For more information, see [Monitoring Kinesis Data Firehose Using CloudWatch Metrics](https://docs.aws.amazon.com/firehose/latest/dev/monitoring-with-cloudwatch-metrics.html).
- Check the Kinesis Data Firehose `DeliveryToS3.Success` metric to make sure that Kinesis Data Firehose has tried putting data to your Amazon S3 bucket. For more information, see [Monitoring Kinesis Data Firehose Using CloudWatch Metrics](https://docs.aws.amazon.com/firehose/latest/dev/monitoring-with-cloudwatch-metrics.html).
- Enable error logging if it is not already enabled, and check error logs for delivery failure. For more information, see [Monitoring Kinesis Data Firehose Using CloudWatch Logs](https://docs.aws.amazon.com/firehose/latest/dev/monitoring-with-cloudwatch-logs.html).

https://docs.aws.amazon.com/firehose/latest/dev/troubleshooting.html



BATCH : COLDER DATA

If we have hot data coming in at high frequency and we want to process that in real time, a streaming solution is typically the best option.

The Amazon Redshift user needs to have Redshift INSERT privilege for copying data from your Amazon S3 bucket to your Redshift cluster.

For Amazon Redshift destination, Amazon Kinesis Data Firehose delivers data to your Amazon S3 bucket first and then issues Redshift COPY command to load data from your S3 bucket to your Redshift cluster.

You can change the configuration of your delivery stream at any time after it’s created. You can do so by using the [Firehose Console](https://console.aws.amazon.com/firehose/) or the [UpdateDestination](http://docs.aws.amazon.com/firehose/latest/APIReference/API_UpdateDestination.html) operation.

 For changes of VPC, subnets and security groups, you need to re-create the Firehose delivery stream.

No, your Firehose delivery stream and destination Amazon Elasticsearch Service domain need to be in the same account.

No, your Firehose delivery stream and destination Amazon Elasticsearch Service domain need to be in the same region.

Data Analytics: The four most common use cases are streaming extract-transform-load (ETL), continuous metric generation, responsive real-time analytics, and interactive querying of data streams.

 **Database Migration Service:** C4, R4 and R5 instances are designed to deliver the highest level of processor performance and achieve significantly higher packet per second (PPS) performance, lower network jitter, and lower network latency. You should use C4 or R4/R5 instances if you are migrating large databases and are looking to minimize the migration time.

All data transfer into AWS Database Migration Service is free, and data transferred between AWS Database Migration Service and databases in Amazon RDS and Amazon EC2 Instances in the same Availability Zone also is free. Standard AWS data transfer rates apply when you migrate your source database to a target database in a different Availability Zone, Region, or outside of AWS.

 Specifically, you can monitor **CDCLatencySource** and **CDCLatencyTarget** to identify replication latency in the ongoing replication phase (CDC). The **CDCLatencySource** metric is the latency between the source and the replication instance. The **CDCLatencyTarget** metric is the latency between replication instance and target. For more information, see [Replication Task Metrics](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Monitoring.html#CHAP_Monitoring.Metrics.Task).

DynamoDB & SQS FIFO exactly once.

 [Amazon MQ](https://aws.amazon.com/amazon-mq/). It supports industry-standard APIs and protocols so you can switch from any standards-based message broker to Amazon MQ without rewriting the messaging code in your applications. If you are building brand new applications in the cloud, we recommend you consider Amazon SQS and Amazon SNS.

The cost of Amazon SQS is calculated per request, plus data transfer charges for data transferred out of Amazon SQS (unless data is transferred to Amazon EC2 instances or to AWS Lambda functions within the same region)

The Amazon SQS Free Tier provides you with 1 million requests per month at no charge.

Amazon SQS long polling is a way to retrieve messages from your Amazon SQS queues. While the regular short polling returns immediately, even if the message queue being polled is empty, long polling doesn’t return a response until a message arrives in the message queue, or the long poll times out.

In almost all cases, Amazon SQS long polling is preferable to short polling.  However, if your application expects an immediate response from a ReceiveMessage call, you might not be able to take advantage of long polling without some modifications to your application.

Kafka provides three main functions to its users:

- Publish and subscribe to streams of records
- Effectively store streams of records in the order in which records were generated
- Process streams of records in real time

[RabbitMQ](https://www.rabbitmq.com/) is an open source message broker that uses a messaging queue approach. Queues are spread across a cluster of nodes and optionally replicated, with each message only being delivered to a single consumer.



Operational data stores (often referred to as *OLTP* data stores) consist mostly of transactional data and are built for quick updates. These storage systems are designed for high volume, low latency access, and are often regular, repeatable workloads. 

Analytic data stores consist of two different types of data stores: OLAP and Decision Support Systems (DSS). OLAP systems provide a more responsive framework for real-time feedback and ad-hoc queries. DSS systems, such as data lakes and data warehouses, are useful for long-running query aggregations and projections, where latency is less important. 

DynamoDB has two capacity modes that come with specific billing options for processing reads and writes on your tables: on-demand and provisioned.

With *on-demand capacity* mode, you don’t need to specify how much read and write throughput you expect your application to perform, because DynamoDB instantly accommodates your workloads as they ramp up or down. 

With *provisioned capability* mode, you specify the number of reads (RCUs) and writes (WCUs) per second that you expect your application to require.

DynamoDB global tables allow you to specify multiple AWS Regions where you want a table to be available. DynamoDB performs all tasks necessary to create identical tables in these regions and propagate ongoing data changes to all of them.

o help ensure eventual consistency, DynamoDB global tables use a last-writer-wins reconciliation between concurrent updates, in which DynamoDB makes a best effort to determine the last writer.

If a single AWS Region becomes isolated or degraded, your application can redirect to a different Region and perform reads and writes against a different replica table. You can apply custom business logic to determine when to redirect requests to other regions. 

- Hot data is typically cached or stored in NoSQL databases. 
- Warm data leans towards SQL data stores.
- Amazon S3 has a wide spectrum that spans hot, warm, and cold datasets. 
- Amazon S3 Glacier is typically used for cold data sets.





#### S3

**Managing Lifecyle**

s3 stadard -- s3 intelligent tiering -- s3 IA -- s3 Iz --  s3 Glacier

- configure lifecycle management for an Amazon S3 object or group of objects
  - ***Transition actions*** define when objects transition to another storage class.
  -  For example, you might choose to transition objects to Amazon S3 Standard-IA storage class 30 days after you created them, or archive objects to the Amazon S3 Glacier storage class one year after creating them. 
  - ***Expiration actions*** define when objects expire. Amazon S3 deletes expired objects on your behalf.
- s3 use case:
  - Periodic logs- 1w or 1m then delete
  - change in data access frequency ; frequent ....not frequent ....audit .... delete
  - archieval data - raw data genbom

**Replication**

- Replication enables automatic, asynchronous copying of objects across Amazon S3 buckets
- By default, replication only supports copying new Amazon S3 objects after it is enabled.
- he object owner must grant the bucket owner `READ` and `READ_ACP` permissions with the object access control list (ACL). For more information, see [Access control list (ACL) overview](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html).
- CRR: Do CRR when
  - **Meet compliance requirements** compliance requirements might dictate that you store data at even greater distances. 
  - **Minimize latency** — If your customers are in two geographic locations, 
  - **Increase operational efficiency** — If you have compute clusters in two different AWS Regions that analyze the same set of objects, you might choose to maintain object copies in those Regions.
- SRR
  - **Aggregate logs into a single bucket** — If you store logs in multiple buckets or across multiple accounts, you can easily replicate logs into a single, in-Region bucket. This allows for simpler processing of logs in a single location.
  - **Configure live replication between production and test accounts** — If you or your customers have production and test accounts that use the same data, you can replicate objects between those multiple accounts, while maintaining object metadata.
  - **Abide by data sovereignty laws** — You might be required to store multiple copies of your data in separate AWS accounts within a certain Region. Same-Region replication can help you automatically replicate

**Database Backup options**

- **Dynamo DB**
  -  create full backups of your tables for long-term retention and archival for regulatory compliance needs
  - The on-demand backup and restore process scales without degrading the performance or availability of your applications, ou complete backups in seconds regardless of table size.
  - Doesnt effect latency or availability.
- **RDS**
- Creating this DB snapshot on a Single-AZ DB instance results in a brief I/O suspension that can last from a few seconds to a few minutes, depending on the size and class of your DB instance
- MariaDB, MySQL, Oracle, and PostgreSQL, I/O activity is not suspended on your primary during backup for Multi-AZ deployments, because the backup is taken from the standby. 
- Indefinite back retention period.



- - - 

#### Log Files

- Amazon EMR and Hadoop both produce log files that report status on the cluster. By default, these are written to the master node in the /mnt/var/log/ directory.

- **Apps logs**

  - Amazon EMR writes step, bootstrap action, and instance state logs. By default, **By default**,Amazon EMR clusters launched using the console automatically archive log files to Amazon S3.
  - location you specified, in the /`cluster-id`/ folder, where `cluster-id` is the cluster ID.
  - Apache Hadoop writes logs to report the processing of jobs, tasks, and task attempts. 
  - Hadoop also records logs of its daemons.

  When Amazon EMR is configured to archive log files to Amazon S3, it stores the files in the S3 location you specified, in the /`cluster-id`/ folder, where `cluster-id` is the cluster ID.

**Step Function**

- It is a serverless function orchestrator that makes it easy to sequence AWS Lambda functions and multiple AWS services into business-critical applications. 
- Through its visual interface, you can create and run a series of checkpointed and event-driven workflows that maintain the application state. 
- The output of one step acts as an input to the next. Each step in your application executes in order, as defined by your business logic.
- **Problem** As your distributed applications become more complex, the complexity of managing them also grows. 
- **Solution** With its built-in operational controls, Step Functions manages sequencing, error handling, retry logic, and state, removing a significant operational burden from your team.
- **Apache Oozie**
  - Apache Oozie is a widely used workflow scheduler system for Hadoop-based jobs. However, its limited UI capabilities, lack of integration with other services, and heavy XML dependency might not be suitable for some users.
- **Apache Airflow** 
  - On the other hand, Apache Airflow comes with a lot of neat features, along with powerful UI and monitoring capabilities and integration with several AWS and third-party services.
  -  However, with Airflow, you do need to provision and manage the Airflow server.
  - The Cron utility is a powerful job scheduler. 
  - But it doesn’t give you much visibility into the job details, and creating a workflow using Cron jobs can be challenging.
- **Step Function used for EMR**
  - **Create** or **terminate** an EMR **cluster**, including the possibility to change the cluster termination protection. In this way, you can reuse an existing EMR cluster for your workflow, or create one on-demand during execution of a workflow.
  - **Add** or **cancel** an EMR **step** for your cluster. Each EMR step is a unit of work that contains instructions to manipulate data for processing by software installed on the cluster, including tools such as Apache [Spark](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-spark.html), [Hive](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-hive.html), or [Presto](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-presto.html).
  - **Modify** the **size** of an EMR **cluster** instance [fleet](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-fleet.html) or [group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-uniform-instance-group.html), allowing you to manage scaling programmatically depending on the requirements of each step of your workflow. For example, you may increase the size of an instance group before adding a compute-intensive step, and reduce the size just after it has completed.
- you can use [synchronous integrations](https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-sync) to move to the next step of your workflow only when the corresponding activity has completed on the EMR cluster.
- **Redshift + Glue + Step Function**
  - AWS Glue Python Shell is a Python runtime environment for running small to medium-sized ETL tasks, such as submitting SQL queries and waiting for a response.
  -  Both AWS Glue Python Shell and Step Functions are serverless, allowing you to automatically run and scale them in response to events you define, rather than requiring you to provision, scale, and manage servers.

#### Athena

- Athena helps you analyze unstructured, semi-structured, and structured data stored in Amazon S3
- interactive query service that makes it easy to analyze data in S3 using standard SQL. 
- Athena is serverless, so there is no infrastructure to setup or manage
- pay only for the queries you run. 
- To get started, simply point to your data in S3, define the schema, and start querying using standard SQL,  using standard SQL to run ad-hoc queries and get results in seconds.
- Athena integrates with the AWS Glue Data Catalog, which offers a persistent metadata store for your data in Amazon S3.

#### Elastic Search

- Up to 3 PB of attached storage
- Cost-effective [UltraWarm](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/ultrawarm.html) storage for read-only data
- [Cold storage](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/cold-storage.html) for infrequently accessed data
- Audit logs
- Kibana multi-tenancy
- To get started using Amazon ES, you create a *domain*. An Amazon ES domain is synonymous with an Elasticsearch cluster. Domains are clusters with the settings, instance types, instance counts, and storage resources that you specify. Each instance acts as one Elasticsearch node.
-  It also automatically detects and replaces failed Elasticsearch nodes, reducing the overhead associated with self-managed infrastructures.
- https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/what-is-amazon-elasticsearch-service.html
- https://aws.amazon.com/elasticsearch-service/faqs/
- https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/aes-bp.html

#### Athena

- No charges for Data Definition Language (DDL) statements like CREATE/ALTER/DROP TABLE, statements for managing partitions, or failed queries. Cancelled queries are charged based on the amount of data scanned.

- ### **Federated query pricing**: charged for the number of bytes scanned by Amazon Athena aggregated across all data sources, rounded up to the nearest megabyte, with a 10MB minimum per query.

Quicksight 

- Make sure the data doesnt have non ASCII values, or bullet points.
- Loading data in SPICE makes your data static. Not recommended for real time visualization.
- Quicksight can query data from Presto (EMR).
- Extension Supported
  - CSV and TSV – Comma-delimited and tab-delimited text files
  - ELF and CLF – Extended and common log format files
  - JSON – Flat or semistructured data files
  - XLSX – Microsoft Excel files
  - QuickSight supports UTF-8 file encoding, but not UTF-8 (with BOM).
  - Files in Amazon S3 that have been compressed with zip, or gzip as is.
  - JSON (semi structured or flat)





Athena cannot run Spark Application

EMR notebook can run queries only in EMR cluster not standalone.

When running EMR application, Presto can be used to run queries not metastore wont be persistant, for persistant metastire use Glue.



Fo highly available EMR, select 3 master node, u dont have any other option.

Hue is web based interface for Hadoop.

Mahout is machine learning for Hadoop

In EMR, using STEP, concurrency is from 2 to 256.



In EMR, when running a step function, you dont need to stop the cluster to add a new step, you can use **add-steps method**.

In EMR, when using Pig, on failure u could take following actions Continue, Cancel and wait & Terminate Cluster.

You can use KCL to take data from Kenisis Data Stream which takes data from gaming and used it for analytics. Kenissi Scaling Utility (amazon-kenises-scaling-utils) to automate scaling based on use.

PutRecord.Btyes shows number of bytes put into the stream, not show hot partition.

PutRecord.Latency shows time taken to put record to the stream over a period of time.

SubscribeToShard.RateExceeded: is a metrics to show when a new subscription attempy fails because u already ahve an active subscirption by the same customer.

SubscribeToShardEvent.Success metric shows when a shard subscription is completed successful.

Incoming Byte metric show rate at which ur shard is ingesting dta. it can alert when a hot shard.

IncomingRecord shows the rate at thwihc ur shard is ingesting data, It can show hot shard.

Kenissi data analytics is written in Java and Scale, Flink app can leverage fault tolerance and checkpoinging, parllel execution of tasks.

Livy is used to connect via A REST interface with an EMR cluster running Spakr.

Indempotent processing to remove duplicates

Glue is 10x than Fargate, since Fargate runs on containers these library are already stored.

Athena will require more work for visualization than QuickSight and money

Kenises Firehose & Kenisis Analytics cannot write directly to DynamoDB.



 Amazon Kinesis Data Firehose provides the following four CloudWatch metrics that you can use to track the four AWS KMS exceptions:

- `KMSKeyAccessDenied`
- `KMSKeyDisabled`
- `KMSKeyInvalidState`
- `KMSKeyNotFound`

Firehose doesn't support asymmetric CMKs



IoT device sensor data -> Kinesis Data Firehose -> Kinesis Data Analytics -> Kinesis Data Firehose -> Redshift -> QuickSight

This data collection system architecture is best suited to real-time consumption of data. Batch sensor data is better processed with a Glue ETL job versus a Kinesis Data Analytics application.

IoT device sensor data -> Kinesis Data Streams -> Kinesis Data Analytics -> S3 Data Lake -> QuickSight

Kinesis Data Analytics cannot write directly to S3; it only writes to a Kinesis data stream, a Kinesis Data Firehose delivery stream, or a Lambda function.

Kinesis Firehose does not have the capability to write directly to Aurora.

A Spark job running in Glue is batch-oriented. You can only schedule ETL jobs at 5 minute intervals or greater. This option will be far slower than using a long-running EMR cluster.

**Livy** is a REST API support open interface for interacting with Spark Cluster, or a REST API that gives remote access to Apache Spark cluster and helps in job submission to the Spark Cluster. In more common words, **Livy** provides access for remote users to their Spark Cluster.

Storage Gateway is used to move data from your data center to S3. You would not use Storage Gateway to ingest real-time streaming data. Also, using the INSERT Redshift command will be much slower than using the Redshift COPY command.

Snowball@Edge is used to move bulk data from your data center to S3. You would not use Snowball@Edge to ingest real-time streaming data. Also, you use the UPDATE Redshift command to update values in table columns, not to move new data into your Redshift cluster.

Kinesis Data Firehose is the correct choice to ingest your sports data into your S3 data lake. Also, the Redshift COPY command is the most performant way to load your data into your Redshift cluster.

using the default settings for your PutRecords KPL calls. The threshold limit default is 50% higher than the shard limit. So if you set the threshold to 50% you haven’t really changed anything. 

 Lowering the rate limiting threshold is an approach you could use to reduce retry spamming. Still, the recommended approach is to expand your Kinesis Data Stream capacity while also implementing a suitable partition key strategy.

Glue crawlers connect to RDS using a JDBC connection, not a native interface.

Glue crawlers need all TCP ports open on the security group where the data source resides, your RDS instance in this scenario. To protect your database security group from outside access via a TCP port, you also configure a self-referencing inbound rule for all TCP ports.

Using Kinesis Data Firehose to stream your IoT data received from AWS IoT, transforming the data using Lambda, and copying the data into Redshift is the most efficient option.

to COPY the data from Firehose to Redshift, an intermediary S3 bucket is needed.

The KPL app has to write to a Kinesis Data Streams shard, which is not present in the proposed architecture.

**Storage**

Q The company wants to manage their financial counterparty risk through using their trading/operational data to perform risk analysis and build risk management dashboards.

For This type of data collection infrastructure is best used for streaming transactional data from existing relational data stores. You create a task within the Database Migration Service that collects ongoing changes within your various operational data stores, an approach called ongoing replication or change data capture (CDC). These changes are streamed to an S3 bucket where a Glue job is used to transform the data and move it to your S3 data lake. QuickSight helps to build dashboards and visualize the data.

With the KPL PutRecords operation, the record is automatically put back into the KPL buffer and retried, if a put fails.

S3 is used for structured and unstructured data. Querying S3 using Athena or Redshift Spectrum allows for relatively quick queries, but not fast enough for an operational application like your ski resort mobile application requirements.

data lifecycle and usage patterns uses IoT Core to ingest the sensor data. Also, **IoT Core is used to run rules-based filtering and transformation set of functions**. IoT Core then streams the sensor data to S3, where you house your data lake. You then use Athena to run your ad-hoc queries on your sensor data, taking advantage of Athena’s serverless query service so that you only pay for the service when you use it.

Since you are looking to use the CityDistrict and CrimeDate to retrieve your dashboard data, the combination of CityDistrict and CrimeDate won’t always be unique. A global secondary index is the best choice for this use case since the combination of primary key attributes does not require unique values.

- **Option A is incorrect**. With the KEY distribution strategy, the Redshift leader node distributes the rows relative to the values in one column. This strategy is good for situations where you need to do joins across tables. But since your initial table sizes are small and will grow over time, you can use better performing and more cost-effective strategies.
- **Option B is incorrect**. With the EVEN distribution strategy, the Redshift leader node distributes the rows of your tables across the compute node slices using a round-robin approach. This is not the best strategy if your tables need to participate in joins. On the other hand, this may be a good strategy for your tables once your tables increase in size as your new business grows. But since your initial table sizes are small, you can use better performing and more cost-effective strategies.
- **Option C is incorrect**. With the ALL distribution strategy, the Redshift leader node distributes the entire table to every compute node. Thus multiplying the storage required by the number of compute nodes you have configured in your Redshift cluster. This strategy is a good choice for tables that are not updated often and that are not updated with large changesets. This may be a good choice when you first create your tables. But since you expect rapid growth in your tables, this choice would not give you the optimum performance and cost over the life of your Redshift cluster.
- **Option D is correct**. The AUTO distribution strategy Redshift assigns the best distribution strategy based on the table size. It then changes the distribution strategy as the changing table activity and size demands. So Redshift may initially assign an ALL distribution strategy to your table since it is small, then change the distribution strategy to EVEN as your table grows in size. When Redshift changes the distribution strategy, the change happens very quickly (a few seconds) in the background.

Glue

- To crawl S3,DynamoDB Glue doesnt need JDBC connection, it uses native interface.

- Glue needs JDBC connection to crawl Redshift and other RDS, if the JDBC connection doesnt have appropriate permission to access the data store it will fail

S3 + Redshift

-  Redshift is a good choice for your partner interaction data because it requires sub-second response times. S3 Standard is a good choice for your partner metadata because it offers good response times (minutes) at a much lower cost than Redshift. S3 Glacier is a good choice for your former partner data (hours) because the Glacier tier of S3 is the most inexpensive option for storing data like this that has very infrequent access and response times of an hour can be tolerated.

Kenises + S3

The Amazon Kinesis Agent is the most efficient way to collect data from application log files and send the data to a Kinesis Data Firehose stream. To transform the log data, Kinesis uses a Lambda function. Once the Lambda function has transformed the data, the Lambda function returns the transformed data record to Kinesis Data Firehose which writes the transformed record to your S3 destination. Kinesis Data Firehose can also be configured to write the original source data record to another S3 bucket.



EMR Operations

- ```
  
  ]
  A.
  INSERT OVERWRITE TABLE hdfs_customers_csv
  SELECT * FROM ddb_customers
  
  ]
  B.
  INSERT OVERWRITE DIRECTORY 'hdfs:///user/hadoop/hive-customers'
  SELECT * FROM ddb_customers;
  
  ]
  C.
  C)	CREATE EXTERNAL TABLE hdfs_customers_csv(customer_id, …)
  LOCATION ‘hdfs://user/hadoop/hive-customers’;
  INSERT OVERWRITE TABLE hdfs_customers_csv
  SELECT * FROM ddb_customers
   
  
  ]
  D.
  CREATE EXTERNAL TABLE hdfs_customers_csv(customer_id, …)
  ROW FORMAT DELIMITED
  FIELDS TERMINATED BY ‘,’
  LOCATION ‘hdfs://user/hadoop/hive-customers’;
  INSERT OVERWRITE TABLE hdfs_customers_csv
  SELECT * FROM ddb_customers
  
  
  ```

  

- **Option A is incorrect**. This set of commands will direct Hive to copy your ddb_customers data from your DynamoDB customers table to your HDFS hdfs_customers_csv file but with the default delimiter. Also, the correct syntax for the INSERT command is INSERT OVERWRITE DIRECTORY if you are using the default settings.

- **Option B is incorrect**. Using the default settings, this option will create your ddb_customers data from your DynamoDB customers table to your HDFS hdfs_customers_csv file but with the default delimiter, not the comma delimiter needed for a CSV file.

- **Option C is incorrect**. This option is missing the ROW FORMAT DELIMITED and FIELDS TERMINATED BY ‘,’ statements needed to create a CSV formatted file on HDFS.

- **Option D is correct**. This option uses the correct syntax and row delimited statements to create a CSV formatted file on your HDFS properly.

You have built a Kinesis Data Stream to collect the IoT data. Which of the following options will meet your requirements in the most cost-optimized, durable, and performant manner?

opt 1: Construct a Kinesis Data Firehose that receives the IoT record data from the Kinesis Data Stream. The Kinesis Data Firehose buffers and converts the data to partitioned ORC files and writes them to your data lake.

opt2: Write a Lambda function to accept batches of IoT records from the Kinesis Data Stream. The Lambda function converts the data records to CSV and then writes the CSV data to your data lake.

- **Option B is correct**. Kinesis Data Firehose is durable in that it uses multiple availability zones. Kinesis Data Firehose also facilitates the easy conversion of your data to partitioned ORC files for storage in your data lake. The partitioned ORC files make for highly-optimized SQL queries, which gives you the best performance when retrieving data from your data lake.
- **Option C is incorrect**. The AWS Lambda infrastructure is not optimized for buffering data. Lambda has runtime duration limitations (15 minutes). Also, the CSV format will not be as performant as partitioned ORC files when retrieving your data from your data lake.

Q. Restaurant information must scale efficiently for cost and performance to handle increased request volume when demand increases rapidly. In addition, your storage architecture must operate at low latency, provide fast throughput, and be highly durable.

]Use API Gateway to serve your REST API requests. Lambda to implement your REST APIs. Use DynamoDB, an operational storage solution, to house your customer and restaurant data store.

API Gateway serves your REST APIs. Lambda implements your REST functionality. DynamoDB stores your restaurant and customer data. DynamoDB scales horizontally, provides consistent single-digit millisecond latency and is replicated across three availability zones. These characteristics meet all of your requirements.

Redshift

You are using a compound sort key; queries against tables with compound sort keys don't perform well when the query depends on secondary sort columns.

- **Option A is incorrect**. Performance improves for queries against tables with interleaved sort keys when the query depends on secondary sort columns. However, it doesn’t slow down.
- **Option B is incorrect**. Global secondary indexes are used in DynamoDB, not Redshift.
- **Option C is correct**. You are using a compound sort key (the default setting). Queries against tables with compound sort keys don't perform well when the query depends on secondary sort columns.
- **Option D is incorrect**. Vacuum reindexing is used to restore the sort order in your tables. Thus, it would not cause slow performance. Instead, it is used to improve performance.



GLUE Data sources require `s3:ListBucket` and `s3:GetObject` permissions. Data targets require `s3:ListBucket`, `s3:PutObject`, and `s3:DeleteObject` permissions.



Kinesis Firehose invokes your Lambda function in synchronous mode, not asynchronous mode.

Athena to query S3 directly.

Athena doesnt support query from S3 glacier

Firehose writes the data to S3. SageMaker sources its model with the raw data in S3. This is the most efficient option that also meets your requirements.

Use the PutRecord API call to write your records to your Kinesis stream in the same order. When you write your records to the same shard, the PutRecord API call will guarantee data record ordering.



GLue

- **Option B is incorrect**. The G.1X task worker type is recommended for memory-intensive jobs, but not for jobs that run ML Transforms.
- **Option C is correct**. The G.2X task worker type is recommended for memory-intensive jobs and for jobs that run ML Transforms.

S3

if you move an object out of Intelligent-Tiering after 10 days, you will still be charged for 30 days of storage.



Redshift

Tables will almost always benefit from a sort key. Cardinality is a relative measure of how many distinct values exist within the column. Low relative cardinality leads to wasted compute capacity from lack of parallelization. So, in this case, a high cardinality would help boost performance. In this case, a DISTKEY column exists. So an EVEN distribution should be removed from consideration.

Run the CREATE EXTERNAL SCHEMA SPECTRUM and CREATE EXTERNAL TABLE commands in Amazon Redshift to make the data store in Amazon S3 accessible. Build the BI report directly in Amazon Redshift.

exp: You can efficiently query and retrieve structured and semi-structured data from files in Amazon S3 without having to load the data into Amazon Redshift tables using Amazon Redshift Spectrum. These commands would set up the Spectrum queries to minimize the amount of load on your existing Redshift cluster. You can connect QuickSight directly with data stored in Redshift.



- **Option A** is incorrect. CUSTOMER_ID is made up of unique integers. Since the lengths can be very long, compression would reduce by one byte. It is a good idea to keep this column compressed.
- **Options B** is correct. CUSTOMER_NAME can have large, repeatable characters. So any compression would probably be ineffective. This column can be left as raw.
- **Option C** is incorrect. ADDRESS is a large domain and can have repeated words like ‘North’, ‘Street’, and so forth. Compression with text255 is a good choice.
- **Option D** is incorrect. ZIPCODE only has a limited number of values. So it would be effective with bytedict.
- **Options E** is correct. STATE has only two characters. So it will not be worth the overhead of compressing the column.

By enabling SQA, you reduce WLM queues that are dedicated to running short queries. SQA uses an algorithm to analyze each eligible query and separates the query from the WLM queues. 

LakeFromation + Redshift

 This is the best solution because AWS Lake Formation is the solution for creating a central data store to grant access to databases, tables, and columns to data stored in Amazon S3. You can use Amazon Redshift Spectrum to run queries in Amazon S3.



Less than 10 tb - dc2

More than 10tb ra3

DynamoDB

q Creating custom DynamoDB instead to store the metadata.

You can configure custom settings for consistent view by providing configuration properties for emrfs-site properties. For example, you can choose a different default DynamoDB throughput by supplying a value for the fs.s3.consistent.metadata.tableName property.

- https://docs.aws.amazon.com/emr/latest/ManagementGuide/emrfs-configure-consistent-view.html

s3 

unload command doesnt support SSE-c

unload uses parllel processing, specify parllel off if 1 file, recommended not.

unload automatically encrypts the file file using SSE-S3



ES

You use the Amazon Elasticsearch Service (ES) to monitor application performance and find ways to optimize application performance. Over time the application suffers from latency, and you realize you often see a ClusterBlockException error.

Scale your Amazon ES domain to use larger instance types or more EBS-based storage.

- orrect. In this case, the NVMMemoryPressure is too high.
- **Option C** is incorrect. This is not the case. You would need to increase the cluster size or scale out the cluster.



- **Options B** is correct. UltraWarm is a cost-effective way to storage read-only data on Amazon ES. UltraWarm uses Amazon S3 to improve performance, and there is no work needed on the user end. 
- **Option C** is incorrect. Although Amazon S3 Lifecycle policies are a way to reduce storage costs in Amazon S3, this is not something that can integrate with Amazon ES. You would need to apply the UltraWarm option within Amazon ES.



***********



Kinesis data firehose -> ORC files -> S3 -> Athena

Kinesis data firehose -> Lambda -> Elasticsearch Cluster -> Kibana

Kinesis data firehose -> RDS -> QuickSight

Kinesis Data Streams -> parquet files -> S3 -> Redshift Spectrum

- **Option A is incorrect**. This option does not give you the ability to analyze your football data in real-time because you are transforming the data into ORC format, storing it on S3, and then attempting to query it across multiple ORC files.
- **Option B is correct**. You can leverage a Lambda function together with Kinesis Data Firehose to transform your streaming football data prior to storage on the Elasticsearch cluster storage volumes. You can then use Elasticsearch together with Kibana to perform real-time analytics on your streaming football data. 
- **Option C is incorrect**. Kinesis Data Firehose doesn’t have the capability to write its streaming data to RDS. It can write streaming data to S3, Redshift, Elasticsearch, and Splunk.
- **Option D is incorrect**. This option does not give you the ability to analyze your football data in near real-time because you are transforming the data into Parquet format, storing it on S3, and then attempting to query it across multiple parquet files.