## Big Data Analytics Architecture Patterns & Best Practices

Types of big data analytics:

- Batch/Interactive
- Stream Processing 
- Machine Learning

Delivery of big data services

- Virtualized: EC2 manage the Kafka
- Managed Services: EMR, RDS, Can configure scale up & scale down policy.
- Serverless/Clusterless/Containerized: Lambda, Athena, Glue. You just write the query and dont care about anything else.

Big Data Challenges

### Architecural Principles

- Build Decoupled DataData
  - Meaning we can change how we collect the data without impacting any other process.
  -  -> Store -> Process -> Store -> Analyze -> Answers
  - Use the right tools for job
    - Data structure, latency, throughput

#### Data Processing Pipeline

- Collect -> Store -> Process/Analyze -> Consume
- Depends on the condition
- Sometimes need to convert raw text to query optimized dataset.

Temperature of Data

Collection



