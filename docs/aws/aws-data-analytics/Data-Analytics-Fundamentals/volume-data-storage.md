## **Volume – Data Storage**

When more data than process and analyze -> **Volume Problem**

- Structured: Rows & columns, has constrains
- Semi Structured: XML, JSON, SQL: Moves in game, social cache, key-value pair.
- Unstructured: No structure, needs tagging and catalogin to be even analyzed. Messaged, email, photos, social media content, videos, (metadata)

Only 10% data processed is structured. Other 10% is semi structured rest is unstrcutured. Difficult for business to analyze.

Data needs to be stored to be processed, results needs to be stored aswell.

#### S3 

- Stores object within buckets, durable, scalable, performance.
- **Object**: An object is composed of a file and any metadata that describes that file.
- **Bucket**: are logical container for objects.
- **Object Key**: is unique identifier for object in bucket.
- Bucket url contains: Bucket + key + version
- htttp://doc.s3.amazonaws.com/2006-03-01/AmazonS3.html
  - Bucket: doc
  - Object Key: 2006-03-01/AmazonS3.html
  - Prefix: 2006-03-01
  - Object: AmazonS3.html

- **4 ways S3 can improve your data analytics solutions:**
  - Decoupling storage from processing: Seperate buckets for raw, processed and final.
  - Parlllelization, running processes in parllel: Parllel processing can be done without negatively effecting other processes.
  - Centralized Location: Centralized location for storing the data, saves moving the data cost.
  - API: for programetical access.

#### Data Lakes

A data lake is a **centralized repository** that allows you to store **structured**, **semistructured**, and **unstructured** data at any scale.

- Data Lakes organises the data inside bucket by categorising the data inside bucket.
- Structure & Unstructured can be stored.
- Data silos: Scattered data across server making it difficult to analyze.
- Using Data lake can break **data silos** and bring the data into a centralized location/ repository.
- Single source of truth: Has the data been altered -> Its trustworthy.

Benefits of Data Lake

- Prevents unathourized access.
- Cost effective data storage solution.
- Security & compliance.
- Several tools for data collection & ingestions tools. (AWS Kinesis & Snowball)
- Categorize & manage data. (**Use AWS Glue to understand the data within the data lake, prepare it and load it reliably into data stores. Once AWS Glue catalogs your data, it is immediately searchable, can be queried, and is available for ETL processing.**)
- Meaningful Insights. (Apache Spark, Apache Hadoop, data warehousing, real time analytics and visualization.)

Data preparation 60% time (Cleaning and organizaing data)

Collecting data 19% time.

#### AWS Lake Formation

- Allows the user to set up data lake in days. It is a centralized curated and secured repository **for all data in both original & when prepared for analysis.**
- AWS Lake Formation makes it easy to ingest, clean, catalog, transform, and secure your data and make it available for analysis and machine learning.
- Set up transformation jobs: move data to an Amazon S3 data lake, remove duplicates and match records, catalog data for access by analytic tools, configure data access and security policies, and audit and control access from AWS analytic and machine learning services.
- Lake Formation automatically configures underlying AWS services to ensure compliance with your defined policies. If you have set up transformation jobs spanning AWS services, Lake Formation configures the flows, centralizes their orchestration, and lets you monitor the execution of your jobs.

### Structured Data Storage

Performed through databases -> type of database -> Data Warehouse (Most common analytical solution)

- It is a centralised repository of structured data from many data sources.
- **Before loading in data warehouse: It is Transformed, Aggregated and Prepared**
- Data inside warehouse is used for reporting and analysis.
- 













