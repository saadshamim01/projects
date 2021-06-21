## Amazon EMR

- Managed cluster platform which simplifies biug data frameworks like Apache Hadoop & Apache Spark on AWS to process & analyze data.
- Process for analytical purpose & business intelligence using: **EMR + Hive + Pig**.
- Used for transforming and moving large amount of data.
- **EMR Notebook** 
  - provides managed environment like Jupyter to prepare, visualise, collabrate & perform interactive analysis using EMR.
- Automatically adjust capacity.
- Can use S3, HDFS & DynamoDB for storage.
  - Compute *Hadoop MapReduce* or Spark or Presto 
  - GUI: Hue & Zeppelin

#### Components

- Cluster: Collection of EC2 instances.
  - **Transient cluster:** that auto-terminates after steps complete.
  - **Long-running cluster:** that continues to run until you terminate it deliberately.
- Node: Each EC2 instance is a node.
- Node Type: Node role in cluster.
  - **Master Node** 
    - Manages cluster by distributing data and tasks among other nodes.
    - Tracks health and status of tasks of nodes
    - Single node cluster with one master possible, automatic failover not supported.
  - **Core Node**
    - Runs tasks & store data in HDFS.
    - Fault tolerant for worker ndoe.
  - **Task Node**
    - Only runs tasks. Optional

### EMR Architecture

#### Storage

- **HDFS**
  -  Distributed, scalabale file system for Hadoop.
  - Data distributed across instances, Fault tolerant: prevent data loss.
  - Ephedermal Storage
  - Useful for aching intermediate results using MapReduce or for workloads that have significant random I/O.
- **EMR File System (EMRFS)**
  - Extends Hadoop to directly access data in S3.
- **Local File System**
  - Each node has preconfigured instance storage.

### Managing Clusters

- Data stays only in one region.
- Master connected only when cluster is running, if cluster is terminated -> Master node terminated.
- **By default, the *ElasticMapReduce-master* security group does not permit inbound SSH access.**
- EMRFS allows S3 access, consistent view and data encryption.
- Tags can be added to cluster.
- Multiple master node ensure high availability, if YARN or citical component fails.

### High Availability

- Automatically fails over to a standby master node if primary master node fails or if critical processes such as Resource Manager or Name Node crash.
- Failed Master node replaced by new master.

#### Monitoring

- CloudTrail integration: log information.
- Monitoring cluster component by master node (SSH).
- Log file stored in S3, even after cluster termination.
- Provides debugging tool.
- CloudWatch integration to track performance.

#### Security

- IAM integration to manage permission. IAM Policy attached to IAM user or group.
- Default EMR role and EC2 role.
- Security group used to control inbound/outbound traffic to EC2 instance. Security group shared by Master & Worker node.
- SS3-server side & client side encryption using EMRFS to protect data in S3.
- Supports launching cluster in VPC.
- Kerberos: Network Authentication Protocol.

#### Pricing

- Per second , 1 minute minimum.

- EMR price, EC2 price and EBS price (if attached)

  















- 