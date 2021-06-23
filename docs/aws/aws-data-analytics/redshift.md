## Amazon Redshift

- Fully managed, petabyte scale data warehouse service.
- Extends redshift queries to data lake.
- OLAP type of DB.
- Support only Single-AZ deployments.

#### Features

- Columnar storage, data compression & zone map reduce I/O for queries.
- Massive Parllel Processing.
- Machine learning to deliver high throughput.
- Uses **cachings** for repeated queries.
- Automatically & continiously stores data in S3. 
- Asynchronously replicate your snapshots to S3 in another region for disaster recovery.

#### Components

- Cluster: Collection of node: Leader node & compute node.
- Scaling by adding/removing nodes.
- Assigns 30 mins maintenance window at random from an 8-hour block of time per region occuring random day of week. During maintenance -> Not oeprational. (Read only.)
- Supports EC2-VPC & EC2-Classic to launch clusters:
  - EC2-VPC: Create cluster subnet group if launching within VPC, allows provisioning subnets on VPC.

#### Redshift Nodes

- **Leader**
  -  Receieves requests from client, parses requests and develop query execution plans.
  -  Parllel computiation by compute nodes -> aggregating intermediate results -> Results returned to client.

- **Compute**

  - Execute query plans.
  - Send intermediate results to leader node.

- **Node Type**

  - Dense Storage (DS): For large data workload; use hard disk drive (HDD) storage.
  - Dense Compute (DC): Optimized for performance intensive worloads; use SSD storage.

- **Parameter Groups**

  - Group of parameters applied to database in cluster.
  - Default parameter group has preset values for each parameter, **Cannot be modified**.

- **Database Querying Options**

  - Connect to cluster and run query on AWS console with **Query Editor**.
  - Connect to cluster using SQL client tool using **ODBC & JDBC connections**.

- **Enhanced VPC Routing**

  - Using VPC features to manage data flow between cluster & other resources.

  - Use VPC logs to monitor COPY & UNLOAD traffic.

  - **COPY**

    - It break downs the file into smaller parts for parllel processing.

    - ```
      copy catdemo
      from 's3://awssampledbuswest2/tickit/category_pipe.txt'
      iam_role 'arn:aws:iam::<aws-account-id>:role/<role-name>'
      region 'us-west-2';
      ```

  - **UNLOAD**

    - ```
      unload ('select * from venue where venueid in 
      (select venueid from venue order by venueid desc limit 10)') 
      to 's3://mybucket/venue_pipe_' iam_role 'arn:aws:iam::0123456789012:role/MyRedshiftRole';
    ```

- **Redshift Spectrum**

  - Run query on exabyte of data in S3 without loading or transforming.
  - Support **Enhanced VPC Routing.**
  - If data stored in columnar format -> scans only required columns.
  - Compressing data using compression algorithms, less data scaned.

- **Cluster Snapshot**

  - Two types of snapshot: Automated & manual.
    - **Automated:** **Enabled by default when created, deleted after retention period (1 Day), it can be modified. Cannot delete automated snapshot manually.**
    - **Manual:** Retain indefinitely, even after deleting cluster. Manual snap can be shared with other AWS account by authorizing access to SC.
    - Redshift allows data to automatically copy (Auto/Manual) SC. Automated SC retention can be specified. **Default retention period for copied SC is 7 days**. Only 1 destination can be specified.
  - Snapshot stored in S3 using SSL. Incremental snapshot every 8 hours or 5GB per node of data change.
  - Provide free storage of SC = capacity of cluster until deletion. After exceeding limit additional storage charge at normal rate.

  

  #### Monitoring

  - Use the *database audit logging* feature to track information about authentication attempts, connections, disconnections, changes to database user definitions, and queries run in the database. The logs are stored in S3 buckets.

  - Tracks & retains for several weeks. Provides metrics & data to track health & performance of cluster and databases.

  - CloudWatch metrics to monitor the physical aspects of the cluster, such as CPU utilization, latency, and throughput.

  - Monitoring database activity and performance: **Query/Load performance**

  - CloudWatch (optional service) alarm to monitor average percentage of disk space across all nodes in cluster,  **referred to as the *default disk space* alarm.**

    

  #### Security

  - Account which created can only access.
  - Use IAM to create account & manage permissions.
  - For EC2-Classic Platform **must** use Redshift security group.
  - Encryption can be used for additional security, immutable property of cluster.
  - SC created of encrypted cluster is also encrypted.

  

  #### Pricing

  - Pay per/sec based on type & number of nodes.
  - Pay for bytes scanned by Redshift Spectrum.
  - Reserved instances: 1 or 3 years to save money.

  