### Security

**KMS**

 Using server-side encryption through an AWS KMS CMK gives you the most secure encryption of the options provided.

**Tokenization**

 Tokenization is an alternative to encryption that helps to protect certain parts of the data that has **high sensitivity or a specific regulatory compliance requirement such as [PCI](https://aws.amazon.com/compliance/pci-dss-level-1-faqs/).** Separating the sensitive data into its own dedicated, secured data store and using tokens in its place helps you **avoid the potential cost and complexity of end-to-end encryption.** It also allows you to reduce risk with temporary, one-time-use tokens.

**Secrets Manager** 

gives you the capability to encrypt your parameters, randomly generate passwords, and automatically rotate your database connection information.



**Artifact**

**Building compliance report for HIPAA:** AWS Artifact gives you the capability to retrieve the Business Associate Addendum (BAA) HIPAA compliance report directly from AWS. Also, AWS Config monitors your AWS resource configuration changes. It allows you to take action or alert, using custom rules, on configuration changes that violate your policies.



**Macie**

**Scanning S3 for PII protection:** Use the AWS Macie service to guard against security violations by continuously scanning your S3 bucket data and your account settings. Macie uses machine learning to classify your PII data properly. Macie also monitors access activity for your data, looking for access abnormalities and data leaks.

**Security Group**

**Accessing Splunk through Firehose:** Change security group setting and make it public. Splunk cluster is in a VPC, you need to make your Splunk cluster publically accessible with a public IP address. Additionally, you need to unblock the Kinesis Data Firehose address. Kinesis Data Firehose has a set group of IP addresses depending on which region you have configured your VPC. For example, if your VPC is in US East Virginia, then the IP address is one of these CIDR blocks: 34.238.188.128/26, 34.238.188.192/26, or 34.238.195.0/26

can only use security groups to control access to Elasticsearch domains that are configured in a VPC. Your Elasticsearch domain is a public domain Elasticsearch cluster.



**Cognito**

You can use Cognito and its user pools and identity pools to provide a username and password access for Kibana users.

Config not sending message: The AWSConfigRole managed policy, associated with the role assigned to AWS Config, allows AWS Config to record and notify changes to your S3 buckets.

**Encryption**

EMR local disk encryption: EBS encryption is applied to the attached storage volumes as well as to the root volume. AWS recommends using EBS encryption in your EMR security configuration definition as a best practice.

EMR protection pipeline: Placing your EMR clusters in your private subnet is the first level of isolation. Placing your EMR master instance in an EMR-managed security group and your core/task instances in another EMR-managed security group provides the next level of isolation. Using a VPC endpoint and a NAT Gateway to control access to other AWS services provides the third level of isolation.

AES-256 not valid for EMR

**Redshift**

PII + Redshift Granular level: Build stored procedures with the INVOKER security attribute in Redshift that control the access to the data needed for each function. Using a stored procedure in Redshift, you can give your users access to the data they need, and only the data they need, without giving the users access to the underlying tables. The INVOKER security attribute for Redshift stored procedures is the default security attribute

Making data more secure, already has KMS: **Create a new Redshift cluster** that is HSM enabled and migrate your data to the new cluster., **Hardware security module (HSM) encryption is the most secure encryption you can use on your Redshift cluster.** You cannot directly modify a Redshift cluster to use HSM. You must first create a new Redshift cluster that is HSM enabled and migrate your data to the new cluster.

**Config**

Config not sending message: The AWSConfigRole managed policy, associated with the role assigned to AWS Config, allows AWS Config to record and notify changes to your S3 buckets.

The most efficient way to monitor your resource use, such as monitoring your Elasticache Memcached node autoscaling, is to leverage the **AWS Config custom rule capability.**



Memec



## Security

IAM

**IAM Role**

- IAM roles are typically used for service-to-service communication, or for applications that need to make requests to AWS. 
- Example:  Bob would create an IAM role and attach it to the AWS Glue crawler to give temporary security credentials the crawler will need to access Amazon S3. 



- 

Kinesis Firehouse 

- Some AWS services can only send messages and events to a Kinesis Data Firehose delivery stream that is in the same Region.
- Kinesis Data Firehose concatenates multiple incoming records based on buffering configuration of your delivery stream. It then delivers the records to S3 as an S3 object.