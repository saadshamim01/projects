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

#### Kibana & Logstash

- Popular open source visualization tool.
- **The URL is *elasticsearch-domain-endpoint*/_plugin/kibana/.**
- ES (kibana) use Amazon Cognito for username & password protectipn.
- Logstash output plugin: standard ES plugin & *logstash-output-amazon-es* plugin,  which signs and exports Logstash events to Amazon ES.

#### Security

- Amazon ES is HIPAA eligible and compliant with PCI DSS, NOC and ISO standards.
- Secure connection using VPC, configuring network access using VPC security groups or IP-based access policies.
- Authenticate using Cognito.
- Policies to access control:
  - Resource-Based Policy
  - Identity-Based Policy
  - IP-Based Policy
- Placing ES within VPC esnure secure connection with other services withing VPC without internet gateway, NAT device, or VPN connection.

#### High Availability

- Deploy in multiple AZs (3), if replication enabled, -> shard replication across region.
- Fault tolerant, failed instances will be replaced.
- For Multi-AZs, create replica for each index, otherwise distributed copies will not be available.
- If 2 availability zone configured, ES automatically configures dedicated master nodes across 3 availability zone. Prevent downtime.
- ES screenshots frequency increased from daily to hourly, retained for 14 without extra charge.

#### Limitations

