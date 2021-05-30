## Module 5 Introduction

- Creating database for tracking record.

## Instance stores and Amazon Elastic Block Store (Amazon EBS)

- EC2 components give access to CPU, memory, network and **storage** .

- Running application requires access to block level storage, only updated blocks are changed.

Example: Databases, Enterprise software, file systems.

- Depending on EC2 instance type launch, it might provide instance store instances, volume attached physically to EC2 instance.

- If instance terminated, data loss. **Solution** Amazon Elastic Block Store (Amazon EBS)

- It can be used EC2 instance to persist the data. All the data on the attached EVS volume remains available.

- To store the data in EBS, incremental backups of EBS volumes can be created using Amazon EBS snapshots.

#### Amazon EBS Snapshots

- It is an incremental backup. Subsequent backups only add or delete the data which has been changed.


### Amazon S3 Storage

- Object data consists of data, metadata and key(unique identifier.

**Modifying a file in block storage, only changed files are updated. When object storage is modified, entire object updated.**

### 1. Amazon Simple Storage Service (Amazon S3)

- Provides object level storage, stored in bucket. Max size for object 5tb.

- **Cost: frequency of retrieval & availabity of data**

- 11 lines of durability: 99.999999999% proba of being intact for 1 year.

- Data stored in 3 facilities.

- Used for storing static website hosting.

**Static Website**: Collection of websites. Done by uploading all files and checking hosting option.

### 2. Amazon S3 Standard-Infrequent Access (S3 Standard-IA)

- Cheaper storage price compared to S3 but higher retrieval cost.

- Used for less frequently accessed data but requires quick access.

- Ex: Data recovery, backup.

### 3. Amazon S3 Glacier

- Used for retaining data for years for some purpose (ex: audit) but rapid retrieval is not requires. (archieves)

- Glacier Vault Lock policy used to store data and lock your vault.

- **Controls: Write Once/Read many(WORM)**

- Once locked policy cant be changed.

- 3 options for retieval: minutes, hours, directly upload.

- Amazon S3 Lifecycle Management: Moves data automatically between tiers.

- Ex Storing S3 object for 90 days then moving it S3 IA, after 120 days move to glacier.


## Comapring Amazon EBS and Amazon S3

#### Amazon s3

- Web enabled, regionally distributed, offer cost savings

- S3 Object storage is stored as complete discrete objects which can be consumed. Everytime changed in object, reupload the file. Ex occasional or complete change.


- (EBS) Block storage breaks files down into small parts, allows small modifications. Ex: edit in 100gb video.


### Amazon Relational Database Service (Amazon RDS)

- In a relational database, data stored is related to one another.

- It uses structure query language (SQL) to store and query

- Automates database setiup, backups, can be integrated with lambda to query from database from a serverless application.

- Amazon RDS engines:

Amazon Aurora
PostgreSQL
MySQL
MariaDB
Oracle Database
Microsoft SQL Server


#### Amazon Aurora

- Itis an enterprise-class relational database.

- It is compatible with MySQL and PostgreSQL relational databases. It is up to five times faster than standard MySQL databases and up to three times faster than standard PostgreSQL databases.

- Reduce cost, preferable if your workloads require high availability.

- Creates 6 copies across 3 availability zones and backs up in S3.


#### Amazon DynamoDb

- It is a non relational database, referred as NoSQL database.

- Store data as key value pairs instead of rows. Not every tables needs to have same attributes.

- Fast, it delivers single-digit millisecond performance at any scale.

- It is serverless, which means that you do not have to provision, patch, or manage servers. No need to install, maintain, or operate software.

- Scalable, it automatically scales to adjust for changes in capacity while maintaining consistent performance.

- High performance while scaling.


#### Amazon Redshift

- Its a data  warehousing service that uses big data for analytics.

- It allows to collect data from different sources to understand relationships and trends across your data.


#### AWS Database Migration Service (AWS DMS)

- Enables to  migrate relational databases, nonrelational databases, and other types of data stores.

- Reducing downtime , using AWS DMS, you could migrate your data to a target database, such as an Amazon Aurora database.

- Development and test database migrations: Enabling developers to test applications against production data without affecting production users

Database Consolidation: Combining several databases into a single database

- Continous Replication: Sending ongoing copies of your data to other target sources instead of doing a one-time migration

#### Additional Database Services

- Amazon DocumentDB: Amazon DocumentDB is a document database service that supports MongoDB workloads. (MongoDB is a document database program.)

- Amazon Neptune: It is a graph database service. It allows you to build and run applications that work with highly connected datasets, such as recommendation engines, fraud detection, and knowledge graphs.

- Amazon Quantum Ledger Database (Amazon QLDB): It is a ledger database service. It is used to review complete history of all the changes that have been made to application data.

- Amazon Managed Blockchain is a service that you can use to create and manage blockchain networks with open-source frameworks. Blockchain is a distributed ledger system that lets multiple parties run transactions and share data without a central authority.

- Amazon ElastiCache is a service that adds caching layers on top of your databases to help improve the read times of common requests. It supports two types of data stores: Redis and Memcached.

- Amazon DynamoDB Accelerator (DAX) is an in-memory cache for DynamoDB. It helps improve response times from single-digit milliseconds to microseconds.














