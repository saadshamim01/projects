#### EMR

- **Realtime search:** use Elasticsearch together with Kibana to perform real-time analytics on your streaming football data. 
- **Apache Spark applications on EMR simplest, most cost-effective operation:** Create EMR notebooks within your EMR cluster and use Jupyter notebooks to run your Spark applications.
- Individual frameworks like Hive, Pig and Cascading have built in components that help with serialization and deserialization, making it easy for developers to query data from many formats without having to implement custom code

- Since MapReduce is a batch processing framework, to analyze a Kinesis stream using EMR, the continuous stream is divided in to batches. Each batch is called an **Iteration**. Each Iteration is assigned a number, starting with 0. Each Iteration’s boundaries are defined by a start sequence number and end sequence number. Iterations are then processed sequentially by EMR.

- hese are also billed per-second, with a one-minute minimum. 

-  including On-Demand (shown below), 1 year & 3 year Reserved Instances, [Capacity Savings Plans](https://aws.amazon.com/savingsplans/), and [Spot instances](https://aws.amazon.com/ec2/pricing/spot-instances/spot-and-emr/). Spot Instances are spare Amazon EC2 capacity available at up to a 90% discount compared to On-Demand prices.

- **EMR Studio** is an integrated development environment (IDE) that makes it easy for data scientists and data engineers to develop, visualize, and debug data engineering and data science applications written in R, Python, Scala, and PySpark. E

- **Low Per-Second Pricing**: Amazon EMR pricing is per-second with a one-minute minimum, and starts at $.015 per instance hour for a small instance ($131.40 per year). See the pricing section for more deta

- [Apache Hudi](https://hudi.incubator.apache.org/) is an open-source data management framework used to simplify incremental data processing and data pipeline development. Apache Hudi enables you to manage data at the record-level in Amazon S3 to simplify Change Data Capture (CDC) and streaming data ingestion, and provides a framework to handle data privacy use cases requiring record level updates and deletes. Learn more about [Apache Hudi on Amazon EMR](https://aws.amazon.com/emr/features/hudi/).

- [Apache Hive](https://aws.amazon.com/big-data/what-is-hive/) is an open source data warehouse and analytics package that runs on top of Hadoop. Hive is operated by Hive QL, a SQL-based language which allows users to structure, summarize, and query data. 

- [Presto](https://aws.amazon.com/big-data/what-is-presto/) is an open-source distributed SQL query engine optimized for low-latency, ad-hoc analysis of data. It supports the ANSI SQL standard, including complex queries, aggregations, joins, and window function

- [Apache HBase](https://aws.amazon.com/big-data/what-is-hbase/) is an open source, non-relational, distributed database modeled after Google's BigTable. It was developed as part of Apache Software Foundation's Hadoop project and runs on top of Hadoop Distributed File System(HDFS) to provide BigTable-like capabilities for Hadoop.

- [Hue](http://gethue.com/) is an open source user interface for Hadoop that makes it easier to run and develop Hive queries, manage files in HDFS, run and develop Pig scripts, and manage tables. 

- [Apache Oozie](http://oozie.apache.org/) is a workflow scheduler for Hadoop, where you can create Directed Acyclic Graphs (DAGs) of actions. Also, you can easily trigger your Hadoop workflows by actions or time. Learn more about [Oozie on EMR](http://docs.aws.amazon.com//ElasticMapReduce/latest/ReleaseGuide/emr-oozie.html).

- [Apache Phoenix](https://phoenix.apache.org/) enables low-latency SQL with ACID transaction capabilities over data stored in Apache HBase. You can easily create secondary indexes for additional performance, and create different views over the same underlying HBase table

- **Instances Types**

  - **Instance Groups**
    - Manually add instances of the same type to existing core and task instance groups.
    - Manually add a task instance group, which can use a different instance type.
    - Set up automatic scaling in Amazon EMR for an instance group, adding and removing instances automatically based on the value of an Amazon CloudWatch metric that you specify. For more information, see [Scaling Cluster Resources](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-scale-on-demand.html).
  - **Instance Fleets**
    - Add a single task instance fleet.
    - Change the target capacity for On-Demand and Spot Instances for existing core and task instance fleets. For more information, see [Configure Instance Fleets](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-fleet.html).
    - **Setting up Fleets**
      - For each instance fleet, you may specify up to five instance types, which can be provisioned as On-Demand and Spot Instances. 
      - For the core and task instance fleets, you assign a *target capacity* for On-Demand Instances, and another for Spot Instances. 
      - Amazon EMR chooses any mix of the specified instance types to fulfill the target capacities, provisioning both On-Demand and Spot Instances.
      - Spot Instance options include a defined duration **(also known as a spot block)**, a timeout that specifies an action to take if Spot capacity can't be provisioned, and a preferred allocation strategy (capacity-optimized) for launching Spot Instance fleets. 
      - For the master node type, Amazon EMR chooses a single instance type from your list of instances, and you specify whether it's provisioned as an On-Demand or Spot Instance.
    - **Uniform Instance Groups**
      - Uniform instance groups offer a simplified setup. Each Amazon EMR cluster can include up to 50 instance groups: one master instance group that contains one EC2 instance, a core instance group that contains one or more EC2 instances, and up to 48 optional task instance groups.
  - 
  - Master node type: doesn't require an EC2 instance with much processing power
  -  EC2 instances for the core node type, which process tasks and store data in HDFS, need both processing power and storage capacity; 
  - EC2 instances for the task node type, which don't store data, need only processing power. 

- **Best Practices**

  - Use the [Spot Instance Advisor](https://aws.amazon.com/ec2/spot/instance-advisor/) to check the interruption rates and try to create your Amazon EMR cluster using instance types that historically have lower interruption rates.
  - To reduce the amount of data that Spark needs to reprocess if a Spot Instance is interrupted in your Amazon EMR cluster, you should avoid large shuffles.
  - Break huge Spark jobs into smaller ones to increase resiliency

  **Scaling Down**

  - The first process is the decommissioning of Hadoop YARN, which is the Hadoop resource manager. Hadoop tasks that are submitted to Amazon EMR generally run through YARN, so EMR must ensure that any running YARN tasks are complete before removing the node.
  - The second decommission process is that of the Hadoop Distributed File System or HDFS. HDFS stores data in *blocks* that are spread through the EMR cluster on any nodes that are running HDFS. When an HDFS node is decommissioning, it must replicate those data blocks to other HDFS nodes so that they are not lost when the node is terminated.

- **Concurrency**

  - When you select a step concurrency level for your cluster, you must consider whether or not the master node instance type meets the memory requirements of user workloads
  - The step concurrency level is subject to the configurations of resource managers. For example, if YARN is configured with only a parallelism of `5`, then you can only have five YARN applications running in parallel even if the `StepConcurrencyLevel` is set to `10`. For more information about configuring resource managers, see [Configuring Applications](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html) in the *Amazon EMR Release Guide*.
  - You cannot add a step with an `ActionOnFailure` other than CONTINUE while the step concurrency level of the cluster is greater than 1.
  - If the step concurrency level of a cluster is greater than one, step `ActionOnFailure` feature will not activate.
  - If a cluster has step concurrency level `1` but has multiple running steps, `TERMINATE_CLUSTER ActionOnFailure` may activate, but `CANCEL_AND_WAIT ActionOnFailure` will not. This edge case arises when the cluster step concurrency level was greater than one, but lowered while multiple steps were running.
  - To achieve complex scheduling and resource management of concurrent steps, you can use YARN scheduling features such as `FairScheduler` or `CapacityScheduler`. For example, you can use `FairScheduler` with a `queueMaxAppsDefault` set to prevent more than a certain number of jobs from running at a time.

- **Troubleshooting for failed cluster**

  - [Step 1: Gather Data About the Issue](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-troubleshoot-failed-1.html)
  - [Step 2: Check the Environment](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-troubleshoot-failed-2.html)
  - [Step 3: Look at the Last State Change](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-troubleshoot-failed-3.html)
  - [Step 4: Examine the Log Files](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-troubleshoot-failed-4.html)
  - [Step 5: Test the Cluster Step by Step](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-troubleshoot-failed-5-test-steps.html)

- **Security Group**

  - Amazon EMR uses security groups to control inbound and outbound traffic to your EC2 instances. When you launch your cluster, Amazon EMR uses a security group for your master instance and a security group to be shared by your core/task instances.
  - You use two classes of security groups with Amazon EMR: 
    - ***Amazon EMR-managed security groups*** : Every cluster has managed security groups associated with it. You can use the default managed security groups, or specify custom managed security groups. Either way, Amazon EMR automatically adds rules to managed security groups that a cluster needs to communicate between cluster instances and AWS services.
    - ***additional security groups*.**: Additional security groups are optional. You can specify them in addition to managed security groups to tailor access to cluster instances. Additional security groups contain only rules that you define. Amazon EMR does not modify them.
  - Amazon EMR supports optional Amazon S3 server-side and client-side encryption with EMRFS to help protect the data that you store in Amazon S3. With server-side encryption, Amazon S3 encrypts your data after you upload it.
  - Amazon EMR integrates with CloudWatch to track performance metrics for the cluster and jobs within the cluster. You can configure alarms based on a variety of metrics such as whether the cluster is idle or the percentage of storage used. 

- **Termination**

  - With termination protection enabled, the `TerminateJobFlows` action in the Amazon EMR API does not work.
  - Termination protection does not guarantee that data is retained in the event of a human error or a workaround
  - Write data output to Amazon S3 locations and create backup strategies as appropriate for your business continuity requirements.

- **Cloudwatch integration**

  - Monitoring services such as CloudWatch and Ganglia to track the performance of your cluster.
  - Metrics are updated every five minutes and automatically collected and pushed to CloudWatch for every Amazon EMR cluster. 
  - This interval is not configurable. There is no charge for the Amazon EMR metrics reported in CloudWatch. Metrics are archived for two weeks, after which the data is discarded.
  -  If you create a trail, you can enable continuous delivery of CloudTrail events to an Amazon S3 bucket, including events for Amazon EMR.
  - If you don't configure a trail, you can still view the most recent events in the CloudTrail console in **Event history**

| How do I?                              | Relevant Metrics                                             |
| :------------------------------------- | :----------------------------------------------------------- |
| Track the progress of my cluster       | Look at the `RunningMapTasks`, `RemainingMapTasks`, `RunningReduceTasks`, and `RemainingReduceTasks` metrics. |
| Detect clusters that are idle          | The `IsIdle` metric tracks whether a cluster is live, but not currently running tasks. You can set an alarm to fire when the cluster has been idle for a given period of time, such as thirty minutes. |
| Detect when a node runs out of storage | The `HDFSUtilization` metric is the percentage of disk space currently used. If this rises above an acceptable level for your application, such as 80% of capacity used, you may need to resize your cluster and add more core nodes. |



If you supply sensitive information, such as passwords, to the Amazon EMR configuration API, this information is displayed for those accounts that have sufficient permissions. If you are concerned that this information could be displayed to other users, create the cluster with an administrative account and limit other users (IAM users or those with delegated credentials) to accessing services on the cluster by creating a role which explicitly denies permissions to the `elasticmapreduce:DescribeCluster` API key

#### Log Files

- Amazon EMR and Hadoop both produce log files that report status on the cluster. By default, these are written to the master node in the /mnt/var/log/ directory.

**Hive**

- Hive records metastore information in a MySQL database on the master node's file system. 
- description of the table and the underlying data on which it is built, including the partition names, data types
- When cluster terminates, leader node does aswell -> data is lost. (ephemeral Storage)
- **Solution**: Use Glue Data Catalog or RDS or Aurora
- 

**Athena + EMR**

On EMR release version 5.28.0, 5.28.1, or 5.29.0, if you're creating a cluster using the AWS Glue Data Catalog as the metastore, additionally set the `hive.metastore.schema.verification` to `false`. This prevents Hive and HCatalog from validating the metastore schema against MySQL.

To specify a Data Catalog in a different AWS account, add the `hive.metastore.glue.catalogid` property as shown in the following example. Replace `acct-id` with the AWS account of the Data Catalog.

```
[
  {
    "Classification": "hive-site",
    "Properties": {
      "hive.metastore.client.factory.class": "com.amazonaws.glue.catalog.metastore.AWSGlueDataCatalogHiveClientFactory",
      "hive.metastore.schema.verification": "false"
      "hive.metastore.glue.catalogid": "acct-id"
    }
  }
]
				
```

The default `AmazonElasticMapReduceforEC2Role` managed policy attached to `EMR_EC2_DefaultRole` allows the required AWS Glue actions. If you use the default EC2 instance profile, no action is required. However, if you specify a custom EC2 instance profile and permissions when you create a cluster, ensure that the appropriate AWS Glue actions are allowed. Use the `AmazonElasticMapReduceforEC2Role` managed policy as a starting point.





Resource Based Permission

- arn:aws:iam::acct-id:role/EMR_EC2_DefaultRole
- Renaming tables from within AWS Glue is not supported.

#### Additonal Notes

Amazon EMR retains metadata about your cluster for two months at no charge after you terminate the cluster.

The Amazon EMR console does not let you delete a cluster from the list view after you shut down the cluster. A terminated cluster disappears from the console when Amazon EMR clears its metadata.

Can’t change terminated cluster tag

Tags can empty string but not null



**EMR**

- Amazon EMR clusters in both public and private subnets. Launching Amazon EMR clusters in a private subnet with no public IP space or internet gateway attachment offers maximum security. 
- Security groups act as a stateful firewall around one or more Amazon EC2 instances. 
- You can create a private endpoint for Amazon S3 in your subnet to give your Amazon EMR cluster direct access to data in Amazon S3.
- You can optionally create a Network Address Translation (NAT) Gateway for your cluster to interact with other AWS services, like Amazon DynamoDB and AWS Key Management Service (AWS KMS).
- The red line around the public subnet represents a Network ACL. Network ACLs are an optional layer of security for your VPC that acts as a stateless firewall for controlling traffic in and out of one or more subnets. 

