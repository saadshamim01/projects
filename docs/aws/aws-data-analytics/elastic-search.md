### Amazon Elastic Search (Amazon ES)

- Search, analyze & visualize in real time.
- Manages for you: manages the capacity, scaling, patching, and administration of your Elasticsearch clusters
- Offers open-source Elasticsearch APIs, managed Kibana, and integrations with Logstash.
- Combination called ELK Stack.

#### Concept

- Uses blue green deployment when updating.
- Usually updates after 2 weeks.
- Sql, full-text search and scoring capabilities; allows joining, grouping and where clauses.

#### Storage

- Local on-instance storage (up to 3PB) or AWS EBS to store elastisearch indeces.
- Durability: 
  - Snapshot of each domain retain for 14 days
  - **Automated Snapshots:** In S3 (for free), cannot be used to migrate to new domain
  - **Manual Snapshots:** In S3 (incur charges), can be used

#### Data Ingestion

- Ingest structured & unstructured data through **Logstash**
- **Logstash**, an open-source data pipeline that helps you process logs and other event data.
- Ingest throught other services: AWS Kinesis Firehose, AWS IoT, or Amazon CloudWatch Logs. Data can also be loaded using Lambda handlers.
- Faster and better insights using **Kibana**.
- **Kibana** is automatically deployed with your Amazon Elasticsearch Service domain.
- Exposes Elasticsearch logs through CloudWatch logs: error logs, search slow logs, index slow logs
- Indexing: faster retrieval

