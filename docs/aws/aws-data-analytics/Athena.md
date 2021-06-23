## Amazon Athena

Allows users to query data from Amazon S3, without the need for clusters or data warehouses.

- It is serverles, can access data from Amazon S3.
- No need to set up ETL (Transform and Load the data)
- Pay for data scanned, further reduce cost by coverting data into columnar format.
- Built on Presto, can run in parllel & can run various format CSV, TSV etc.
- Run standard SQL & complex joins
- Highly available and scalable.

#### Partitioning

- Restricts the amount of data need to be scaned, reduce cost & performance.
- Athena uses **Hive** for partition.
- Partition data using any key.

#### Queries

- Query on geospatial data & on different kinds of logs in dataset.
- Retains query for 45 days.
- Doesnt support **User defined functions**.
- Athena supports querying data in Amazon S3 Requester Pays buckets.

#### Steps

- Create S3 bucket & object : REQUIRED
- Create metadata database: OPTIONAL, doesnt store the data only stores metadata.
- Create schema: REQUIRED
- Fine tune the Serializer/ Deserializer (Serde): OPTIONAL
- Run query : Its query not DML (Database Manipulation Language)
- Access history: Results are cached for faster retrieval.

#### Security

- Control access using IAM policies, access control lists, S3 bucket policies.
- If file in target S3 is encrypted, queries can be performed on ecrypted data.

#### Pricing

- Amount of data scanned.
- Cost saving using paritioning or converting to columnare format ~ requires less data scanning.


