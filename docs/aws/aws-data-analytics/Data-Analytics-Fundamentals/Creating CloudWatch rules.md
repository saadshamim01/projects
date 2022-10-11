**WHIZSITE15**



ioT:Redshift is better for structured data.

 [AWS Landing Zone](https://aws.amazon.com/solutions/implementations/aws-landing-zone/) offering, which provides a core logging account for storing all logs for auditing.

DataSync is used on premise not on EC2.

AWS DataSync allows you to copy large datasets with billions of files, without having to build custom solutions with open source tools, or license and manage expensive commercial network acceleration software.  On premise

 At the scale and speed of an Amazon Redshift data warehouse, the COPY command is many times faster and more efficient than INSERT commands.

Using copy to copy from S3 to redshift & DyanamoDB

CloudWatch lacks real time capability & doesnt perform any kind of transformation.

In the Hadoop ecosystem, [DistCp](https://hadoop.apache.org/docs/current/hadoop-distcp/DistCp.html) is often used to move data. DistCp provides a distributed copy capability built on top of a MapReduce framework. [S3DistCp](http://docs.aws.amazon.com/emr/latest/ReleaseGuide/UsingEMR_s3distcp.html) is an extension to DistCp that is optimized to work with S3 and that adds several useful features. (Incremental copy, encryption, copy, aggregating, moving many at once, --multipartUploadChunkSize, Submit a S3DistCp step to an EMR cluster)

- “**none**” – Save files uncompressed. If the files are compressed, then S3DistCp decompresses them.
- “**keep**” – Don’t change the compression of the files but copy them as-is.

Glue cannot handle streaming data.

Change Data Capture for DynamoDB Streams, 24 hour retention, encryption allowed.

Apache Kafka/Amazon MSK allows you to process streaming data.

SQS FIFO: exactly once, No data loss, duplicates, correct order, Dynamo db same

Apache Kafka ~ Amazon MSN

SQS FIFO: Atleast ones, tries to preserve order

Redshift RA3 best for over 10Tb, <10tb db2, ds2 legacy

A data warehouse is a database optimized to analyze relational data coming from transactional systems and line of business applications. The data structure, and schema are defined in advance to optimize for fast SQL queries, where the results are typically used for operational reporting and analysis. Data is cleaned, enriched, and transformed so it can act as the “single source of truth” that users can trust.

A data lake is different, because it stores relational data from line of business applications, and non-relational data from mobile apps, IoT devices, and social media. The structure of the data or schema is not defined when data is captured. This means you can store all of your data without careful design or the need to know what questions you might need answers for in the future. Different types of analytics on your data like SQL queries, big data analytics, full text search, real-time analytics, and machine learning can be used to uncover insights.

Data movement, security, catalog, ML, analytics

hdfs faster than emfrs

redshift to s3 unload command

apache oozie popular hadoop system, apache airflow has integration butit requires sevrer.

Step Function better than Lambda, in lambda u have to write ur own functionality.

Use cloud trails when API logs, SNS filtering is better than Lambda filtering, cloud trails default region, IAM or temperaary or other service. SNS: to get message u need to subcribe, trails r stored in S3,

When you integrate Amazon EMR with AWS Lake Formation, you enable SAML-based authentication using corporate credentials for EMR Notebooks and Apache Zeppelin, and can enforce fine-grained, column-level access control to data lakes based on policies you define in AWS Lake Formation.



To clean semi structured data: Use glue with DynamicFrame extension. Lambda is used to convert json to python, rewuires custom code for semi...

A `DataFrame` is similar to a table and supports functional-style (map/reduce/filter/etc.) operations and SQL operations (select, project, aggregate). Litmitations in ETL, requires 2 pass, one for schema another for data 

-> SOlution: A `DynamicFrame` is similar to a `DataFrame`, except that each record is self-describing, so no schema is required initially. Instead, AWS Glue computes a schema on-the-fly when required, and explicitly encodes schema inconsistencies using a choice (or union) type. 

Spark job running glue is bbatch oriented, ETL jobs can be configured only in 5min or more interval.

Lambda triggering and launching EMR cluster is SLOW FOR REAL TIME.

AWS Glue DataBrew to visually clean up and normalize data without writing code

AWS Glue Elastic Views to combine and continuously replicate data across multiple data stores in near-real time.

Livy enables interaction over a REST interface with an EMR cluster running Spark. You can use the REST interface or an RPC client library to submit Spark jobs or snippets of Spark code, retrieve results synchronously or asynchronously, and manage Spark Context.

Tree map: representing dimension of object. Darker higher, lighter lower.

heat maps to show a measure for the intersection of two dimensions, with color-coding to easily differentiate where values fall in the range. Heat maps can also be used to show the count of values for the intersection of the two dimensions.

Use geospatial charts to show differences in data values across a geographical map. 

Use scatter plots to visualize two or three measures for a dimension.

Each bubble on the scatter plot represents one item in the dimension. The X and Y axes represent two different measures that apply to the dimension. 

Elastic ingests data from Kenisis Firehose & logstash

UltraWarm is a fully-managed, low-cost, warm storage tier for Amazon Elasticsearch Service. It is compatible with Elasticsearch and Kibana, enabling you to analyze data using the same tools that Amazon Elasticsearch Service provides today. UltraWarm seamlessly integrates with Amazon Elasticsearch Service’s existing features such as integrated alerting, SQL querying, and more

Hot - Fast access, ultrawarm less frequent access, ULTRAWARM STORES DATA ON S3

Cold storage enables you to cost effectively expand the data you want to analyze on Amazon Elasticsearch Service and gain valuable insights on data that previously may have been deleted or archived.

Cold storage is built for scale. While the storage limits for hot and warm data remain at 3PB, you can store any amount of data in cold storage.

**Usecase**

- **Amazon Redshift** 
  - provides the fastest query performance for enterprise reporting and business intelligence workloads, particularly those involving extremely complex SQL with multiple joins and sub-queries. 
- **Amazon EMR** 
  - makes it simple and cost effective to run highly distributed processing frameworks such as Hadoop, Spark, and Presto when compared to on-premises deployments. Amazon EMR is flexible - you can run custom applications and code, and define specific compute, memory, storage, and application parameters to optimize your analytic requirements. 
  -  You should use Amazon EMR if you use **custom code** to process and analyze extremely large datasets with the latest big data processing frameworks such as Spark, Hadoop, Presto, or Hbase. Amazon EMR gives you full control over the configuration of your clusters and the software installed on them.
- **Amazon Athena** 
  - provides the easiest way to run ad-hoc queries for data in S3 without the need to setup or manage any servers.
  - Federated query in Athena allows you to run SQL queries across variety of relational, non-relational, and custom data sources. You get a unified way to run SQL queries across various data stores.
  - Amazon Athena uses Apache Hive DDL to define tables, using JDBC & ODBC. Amazon Athena uses Hive only for DDL (Data Definition Language) and for creation/modification and deletion of tables and/or partitions. 
  - AWS Glue Data Catalog with Athena, you can also use Glue crawlers to automatically infer schemas and partitions. etect the availability of new data as well as changes to existing data, including table definition change
  - Snappy, Zlib, LZO, and GZIP formats.
  - Amazon Athena now supports user-defined functions (UDFs) to enable you to write custom scalar functions and invoke them in SQL queries. **custom processing such as compressing and decompressing data, redacting sensitive data, or applying customized decryptio**
  - User Defined Functions (UDF) in Amazon Athena allow you to create custom functions to process records or groups of records. A UDF accepts parameters, performs work, and then returns a result.

- **Kinesis Firehose**
  - It can also batch, compress, transform, and encrypt your data streams before loading, minimizing the amount of storage used and increasing security.

Amazon S3 CSE only ensures that EMRFS data exchanged with Amazon S3 is encrypted; not all data on cluster instance volumes is encrypted. Furthermore, because Hue does not use EMRFS, objects that the Hue S3 File Browser writes to Amazon S3 are not encrypted.

Amazon EMR clusters also encrypt data *in transit*, which means the cluster encrypts data before sending it through the network. (Support only symmetric)

AWS Shield Advance: Protects from advanced DDOS attacks, doesnt encrypt data, Distributed Denial of Service (DDoS) protection service that safeguards applications running on AWS.AWS Shield provides always-on detection and automatic inline mitigations that minimize application downtime and latency,  There are two tiers of AWS Shield - Standard and Advanced.

WAF: Common security rule, prevent common web attacks, such as SQL injection or cross-site scripting

GuardDuty: Monitors the network traffic, and uses ML 

KMS protect in transit & at rest , but costly compared to PI Token

**AWS Secrets Manager** 

- is a secrets management service that helps you protect access to your applications, services, and IT resources. This service enables you to easily rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle.
- Using Secrets Manager, you can secure and manage secrets used to access resources in the AWS Cloud, on third-party services, and on-premises.Security administrators responsible for meeting regulatory and compliance requirements can use Secrets Manager to monitor secrets and rotate secrets without a risk of impacting applications.
- AWS Secrets Manager enables you to configure database credential rotation on a schedule. This enables you to follow security best practices and rotate your database credentials safely. When Secrets Manager initiates a rotation, it uses the super database credentials provided by you to create a clone user with the same privileges, but with a different password. 
- Monitor and audit easily. 

AWS Systems Manager provides a centralized store to manage your configuration data, whether plain-text data such as database strings or secrets such as passwords. This allows you to separate your secrets and configuration data from your code.

**Cloud Adoption Framework**

1. [AWS Identity and Access Management](https://aws.amazon.com/iam/) (IAM): Define, enforce, and audit user permissions across AWS services, actions, and resources.
2. **Detective control:** Improve your security posture, reduce the risk profile of your environment, and gain the visibility you need to spot issues before they impact your business.
3. **Infrastructure security:** Reduce the surface area of the infrastructure you manage and increase the privacy and control of your overall infrastructure on AWS.
4. **Data protection:** Implement appropriate safeguards that help protect data in transit and at rest by using natively integrated encrypted services.
5. **Incident response:** Define and execute a response to security incidents.as a guide for security planning.

Best practice for DynamoDB Security

- AWS Shield

- Netwrokf ISolation: VPC

- Security Group & network ACL

- Identity and Access Management

- Encryption and tokenization

- Detective controls

- ### Creating CloudWatch rules

**State Function**

- Graphical, used with lambda, built in controls, creating workflow, build ML model, use Glue ETL, create long running, automated workflow withoout human intervention.
- Standard step function: one workflow & run for one year, audit. 2000 executions, 4000 state transition
- Express step: 5 mins, high-event-rate such as streaming data processing & iOT data. 100000 exe, unlimited transition rare
- Use Case
  - Running group of lambda function.
  - Branching: Choice of users of workflow.
  - Retry & catch: Username
- Integration
  - SNS fanout with lambda to send messages.

**Athena**

- Perform complex queries, without moving the data from S3. Runs on Presto.
- Uses Hive to create, drop & alter table & partitions.

**AWS Lake Formation**

- Register existing data or load new data using blueprints. Data stored in S3:
- Secure data using single set of permission.
- No additional cost, just underlying cost.

- Crawl the ingested data from Kinesis crawl it
- Use machine learning to learn how to clean the data.
- Lake formation centrally defines the controls. 
- Data Catalog in Lake Formation can be used to crawl to find the data and share it.

**Steps**

- Step 1: Ingest And Register
- Step 2: Security* Control
- Step 3: Collabrate and Use
- Step 4 Monitor and Audit

**Kinesis**

- **Time Crititical Decesion:** Millisecond, sec, minutes
  - Real time: Preventive/Predictive
  - Seconds Actionable
  - Minutes: Reactive
- **Traditional (Batch Processing)**
  - Hours, Days: Batch

Credit card swiped immediate message, but message at the end of 1 month.

**Done by Streaming**

- Ingesting data as generated
- Processing the data
- Real time analytics/ML, alerts, actions

**Uses**

- Log analytics
- iOT analytics
- Data analytics
- Industrial Automation
- Smart Home

**Amazon Kinesis Video Stream:** Ingests binary encoded time series data. (Video, audio, Lidar, radar).

Stream is just a buffer, data sits there 24 hrs, max 7days. Cant delete before expiry.

**Firehose or DataStream:** Kinesis data stream requires writing custom to get data from stream.

Firehose takes the data through agent or sdk writing directly to stream, **but it has a managed consumer to take data from stream and put in ES, Splunk, Redshift, S3.**

Firehose allows data transformation using lambda.

Firehose is better for storing the data in s3 or to send the data in elastic search without transformation. -> Firehose prefered.

 Kinesis Analytics: Running SQL queries top seeling product in 30 mins window. Streamed order data stream and used kinesis data analytics. ran aggregation -> Dashboard , do promotion for further increase.

Consumers: Lambda, EMR, etc.

- GetRecords(): 5 transaction per sec per shard (Can be changed), 2mb per shard, 200 ms

  - if exceed -> exception -> customer needs to retry
  - More consumers 400kbs & 1 sec
  - Use when <3, not latency sensitive, minimize cost

- Enhanced Fan-out

  - Customers dont  pull, they **SubscribeToShard()** remains open for 5 mins. 
  - Uses HTTP/2
  - Data pushed to consumer, without askin.
  - 70 ms
  - Customer has to **RegisterStreamConsumer()** to get 2mb
  - use when multiple consumer, low latency.

- Objectives

  - Decouple data producer from consumers
    - Scale system independently, act as buffer -> if application unavailable for some time.
  - Assist with data stream amanagement
    - Scale data stream, on-board governance, retention period management.
  - Foster real time data exchange
    - stream metadata, data schema management, cost modeling.

- 5 consideration to scale AWS Kinesis Data Streams (before fan out)

  - Producer Limits: 1Mb/sec per shard

- 

  





