### Microsoft Azure

**Compute Domain**

- Virtual Domain: Requires configuring instance, installing packages & managing security.
- App Service: No access, requires language selection, upload files, used to deploying an application. automated version of VM.
- Function: Just upload code, cant deploy applications just processing. Usefull for distributed services, file manipulation.

**Storage Domain**

- Blob Storage: Can upload any type of file.
- Queue Storage: Used for queueing tasks (for synchronization), task1 before task2 and so on. Bundles up the task, when queue storage accessed it gives the first task. Can be used with functions.
- Backup: For infrequently accessed data, cheaper, retrieval time. (Similar to S3 Glacier)

**MySQL for Azure**

- Used for querying databases.

**Auto Scaling and Load Balancing** 

- Load Balancing: Used to equally distribute traffic to servers.
- Auto Scaling: Automatically scales up and down according to traffic.
- Both needs to be used together.

**Launching App Services**

App Service -> Web App -> Select langauge (.NET, PHP, Node.js or Python) -> Upload code -> Create

Select Name -> Select Subscription model -> Resource Group (Create new / existing) -> App Service Plan -> Appliction Insight.

App Service Plan: Select according to your needs.

**Launching Blob Storage**

Blob Storage -> Security & Encryption Settings -> Resource Group -> Create

**Launching Databases**

Databases -> Azure Database for MySQL -> Create

Server Name -> Resource Group -> Username & Password -> Version -> Pricing Tier-> Create

**Scaling**

- Horizontal Scaling: Increase the number of instances.
- Vertical Scaling: Increase the size of instances.
- Load balancer attached automatically.

Select instance -> Enable autoscaling -> Select limits, rules  & conditions -> Create

**Azure Pricing**

- 200 $ free credit for first 30 days.
- Plans
  - Pay as you go
  - 6 months or 12 months (Less Expensive)
  - Lifetime free 
    - App Service (10 web & mobile apps)
    - Virtual Network (50 free VNs)

**Azure Storage**

- Storage: Used to store objects which are random in nature. Eg: videos, music files etc.
- Databases: Used to store data or records which are related to each other, which may change with time and can be updated.

- **Azure Storage**: Cloud storage solution for modern application that rely on durability, availability and scalability to meet the needs of customers.

- Storage Account -> Add -> Name -> Account Kind (Blob/General) -> Replication

- Replication

  - **Locally redundant storage (LRS)** copies your data synchronously three times within a single physical location in the primary region. LRS is the least expensive replication option, but is not recommended for applications requiring high availability or durability.
  - **Zone-redundant storage (ZRS)** copies your data synchronously across three Azure availability zones in the primary region. For applications requiring high availability, Microsoft recommends using ZRS in the primary region, and also replicating to a secondary region.
  - **Geo-redundant storage (GRS)** copies your data synchronously three times within a single physical location in the primary region using LRS. It then copies your data asynchronously to a single physical location in a secondary region that is hundreds of miles away from the primary region. 
  - **Geo-zone-redundant storage (GZRS)** combines the high availability provided by redundancy across availability zones with protection from regional outages provided by geo-replication. Data in a GZRS storage account is copied across three Azure availability zones in the primary region and is also replicated to a secondary geographic region for protection from regional disasters.

  | Parameter                                             | LRS                                       | ZRS                                                          | GRS/RA-GRS                                                   | GZRS/RA-GZRS                                                 |
  | :---------------------------------------------------- | :---------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
  | Percent durability of objects over a given year       | at least 99.999999999% (11 9's)           | at least 99.9999999999% (12 9's)                             | at least 99.99999999999999% (16 9's)                         | at least 99.99999999999999% (16 9's)                         |
  | Availability for read requests                        | At least 99.9% (99% for cool access tier) | At least 99.9% (99% for cool access tier)                    | At least 99.9% (99% for cool access tier) for GRS  At least 99.99% (99.9% for cool access tier) for RA-GRS | At least 99.9% (99% for cool access tier) for GZRS  At least 99.99% (99.9% for cool access tier) for RA-GZRS |
  | Availability for write requests                       | At least 99.9% (99% for cool access tier) | At least 99.9% (99% for cool access tier)                    | At least 99.9% (99% for cool access tier)                    | At least 99.9% (99% for cool access tier)                    |
  | Number of copies of data maintained on separate nodes | Three copies within a single region       | Three copies across separate availability zones within a single region | Six copies total, including three in the primary region and three in the secondary region | Six copies total, including three across separate availability zones in the primary region and three locally redundant copies in the secondary region |

**Componenets of Azure Storage**

**Azure Blob Storage**

- Service that stores unstructured data in the cloud as objects/blobs.
- Can store text or binary data such as document, media files or application installers.
- Referred to as **object storage**.
- Storage -> Blobs -> Create Container(Folders)

**Azure Queue Storage**

- Service for storing large number of messages that can be accessed via HTTP or HTTPS.
- Message size up to 64 Kb.
- Queue contains messages ~ storage upto capacity limit of storage account.
- Storage -> Queues -> Create.
- Requires Connection String and Key.
- Processed data is removed from queue.

**File Storage**

- It is an SMB file share in Azure.
- Allows hybrid systems, cloud drive can be mounted on premise computers.
- Directories and files must be created at parent share.
- Can contain unlimited number of shares.
- Maximum size of share is 5 TB.

**Azure Tables**

- Stores large amount of structured data.
- Can also store unstructured data.



ssdsdsdsdsds























