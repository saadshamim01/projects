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

