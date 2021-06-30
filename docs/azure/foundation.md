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















