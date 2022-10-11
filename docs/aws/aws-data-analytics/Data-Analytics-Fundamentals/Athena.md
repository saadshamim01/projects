#### Athena

- Ineractive query, data stays on S3. Works on Presto, Serverless.

- Cannot query across region, Glue crawler can. Solution: Configure Glue Catalog to query S3 data across regions.

- Security: IAM, ACLS, S3 Bucket Policy, • AmazonAthenaFullAccess /
  AWSQuicksightAthenaAccess.

- Encryption: 

  - Server-side encryption with S3-managed key (SSE-S3)
  -  Server-side encryption with KMS key (SSE-KMS)
  -  Client-side encryption with KMS key (CSE-KMS)

- Cross account access: s3 bucket policy

- Transport Layer Security (TLS) encyrpts between Athena & S3.

- Anti Pattern:

  - Highly formatted report: QuickSight
  - ETL: Glue

- Columnar (ORC, Parquet), Size > Number

- Add Partition: use MSCK REPAIR TABLE command.

  

  

  If you have data in sources other than Amazon S3, you can use Athena Federated Query to query the data in place or build pipelines that extract data from multiple data sources and store them in Amazon S3. With Athena Federated Query, you can run SQL queries across data stored in relational, non-relational, object, and custom data sources.

  Athena uses data source connectors that run on AWS Lambda to run federated queries. A data source connector is a piece of code that can translate between your target data source and Athena. You can think of a connector as an extension of Athena's query engine. Prebuilt Athena data source connectors exist

  

  Federated queries require permission

  

  Athena permission for cataloging data (datacatalog) then choose data type

  

  arn:aws:athena:<region>:<user-account>:datacatalog/<datacatalog-name>

  

  This creates a policy , attach policy to user

  

  Jdbc To use the JDBC driver for multiple data catalogs with Athena (for example, when using an [external Hive metastore](https://docs.aws.amazon.com/athena/latest/ug/connect-to-data-source-hive.html) or [federated queries](https://docs.aws.amazon.com/athena/latest/ug/connect-to-a-data-source.html)), include MetadataRetrievalMethod=ProxyAPI in your JDBC connection string