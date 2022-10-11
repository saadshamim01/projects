### Glue

When you set the specified path when creating a crawler in Glue, you need to select the bucket/prefix, not the actual CSV file. 

#### Glue

By default, Hive records metastore information in a MySQL database on the master node's file system. When the cluster is terminated, this metastore data is lost. To create a persistent, external metastore, you have two options

- Use the AWS Glue Data Catalog as the metastore for Hive
- Use an external MySQL database, such as Amazon RDS or Amazon Aurora

- AWS Glue Data Catalog is a persistent metadata store.
- Each AWS account has one AWS Glue Data Catalog per AWS Region. 
- **Step1:** 
  - A classifier recognizes the format of your data and generates a schema. 
  - certainty number between 0.0 and 1.0, which helps crawlers determine if there is a match.
  - set of built-in classifiers, but you can also create custom classifiers. AWS Glue invokes custom classifiers first,
- **Step2:**
- No. You can use AWS Glue DataBrew without using either AWS Glue Data Catalog or AWS Lake Formation. If you use Glue Data Catalog to store schema and metadata, Glue DataBrew automatically infers schema from the Glue Data Catalog. If your data is centralized and secured in AWS Lake Formation, DataBrew users can use all data sets available to them from its centralized data catalog.
- **Glue DataBrew** keeps all account activities as logs in the AWS CloudTrail.
- **AWS Glue Elastic** Views makes it easy to build materialized views that combine and replicate data across multiple data stores without you having to write custom code. With AWS Glue Elastic Views, you can use familiar Structured Query Language (SQL) to quickly create a virtual table—a materialized view—from multiple different source data stores. 

- **Pricing**
  - ETL job & development: An AWS Glue job of type Spark Streaming requires a minimum of 2 DPUs. By default, AWS Glue allocates 5 DPUs to each Spark Streaming job. You are billed $0.44 per DPU-Hour in increments of 1 second, rounded up to the nearest second, with a 10-minute minimum duration for each job of type Spark Streaming.
  - Data Catalog & requests: you will be charged $1.00 per 100,000 objects over a million, per month. 
  - Crawler: hourly rate based on the number of Data Processing Units (or DPUs) used for crawler. single Data Processing Unit (DPU) provides 4 vCPU and 16 GB of memory. You are billed in increments of 1 second, rounded up to the nearest second, with a 10-minute minimum duration for each crawl.
  - Data Brew interactive sessions: You are billed for the total number of the sessions used. Each session is 30 minutes. The first 40 interactive sessions are free for first-time users of DataBrew.
  - Databrew jobs:  You are charged an hourly rate based on the number of the AWS Glue DataBrew nodes used to run your job. By default, AWS Glue DataBrew allocates 5 nodes to each job. AWS Glue DataBrew jobs have a 1-minute billing duration.
  - ElasticView:  You are charged only during the time that data is processed for your vi
  - https://docs.aws.amazon.com/glue/latest/dg/orchestrate-using-workflows.html
- **Workflow**
  - workflows to create and visualize complex extract, transform, and load (ETL) activities involving multiple crawlers, jobs, and triggers
  - Each workflow manages the execution and monitoring of all its jobs and crawlers. 
  - As a workflow runs each component, it records execution progress and status. 
  - This provides you with an overview of the larger task and the details of each step. 
  - The AWS Glue console provides a visual representation of a workflow as a graph.
  - Event triggers within workflows can be fired by both jobs or crawlers, and can start both jobs and crawlers. Thus you can create large chains of interdependent jobs and crawlers.
  - **Static and Dynamic Workflow Views**
    - The **static view** indicates the design of the workflow. 
    - The **dynamic view** is a runtime view that includes the latest run information for each of the jobs and crawlers. 
    - When a workflow is running, the console displays the dynamic view, graphically indicating the jobs that have completed and that are yet to be run.
    - Run information includes success status and error details.