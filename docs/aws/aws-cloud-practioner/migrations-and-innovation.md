## Introduction

Services discussed in this module:
- AWS Cloud Adoption Framework (AWS CAF)
- Six factors of cloud migration
- AWS Snowcone, AWS Snowball & AWS Snowmobile

### AWS Cloud Adoption Framework (AWS CAF)

- Helps guide organization for cloud migration

- AWS CAF has 6 areas of focus called Perspectives.

**Business capabilities: Business, People, Governance**

**Technical capabilities; Platform, Security, Operations**

- The Business Perspective ensures that IT aligns with business needs and that IT investments link to key business results.

- The People Perspective supports development of an organization-wide change management strategy for successful cloud adoption.

- The Governance Perspective focuses on the skills and processes to align IT strategy with business strategy. This ensures that you maximize the business value and minimize risks.

- The Platform Perspective includes principles and patterns for implementing new solutions on the cloud, and migrating on-premises workloads to the cloud.

- The Security Perspective ensures that the organization meets security objectives for visibility, auditability, control, and agility.

- The Operations Perspective helps you to enable, run, use, operate, and recover IT workloads to the level agreed upon with your business stakeholders.

Refer to the tutorial
### Migration Strategies (6Rs)

- When migrating the company can select strategies;

**Rehosting
Replatforming
Refactoring/re-architecting
Repurchasing
Retaining
Retiring**

- Rehosting also known as “lift-and-shift” involves moving applications without changes.

- Replatforming, also known as “lift, tinker, and shift,” involves making a few cloud optimizations to realize a tangible benefit. Optimization is achieved without changing the core architecture of the application.

- Refactoring (also known as re-architecting) involves reimagining how an application is architected and developed by using cloud-native features.

- Repurchasing involves moving from a traditional license to a software-as-a-service model. Migration to salesforce.com

- Retaining consists of keeping applications that are critical for the business in the source environment. This might include applications that require major refactoring before they can be migrated, or, work that can be postponed until a later time.

- Retiring is the process of removing applications that are no longer needed.

### AWS Snow Family

#### Family consists of AWS Snowcone, AWS Snowball, AWS Snowmobile

- These devices offer different capacity points, include built-in computing capabilities and integrates with AWS security, monitoring, storage management and computing capabilities.

#### Snowcone

- Small, rugged & secure edge computing data transfer.

- Features: 2 CPUs, 4 GB of memory, and 8 TB of usable storage.

#### Snowball

- Offers two types of devices: ** Snowball Edge Storage Optimized & Snowball Edge Compute Optimized**

**Snowball Edge Storage Optimized** devices are well suited for large-scale data migrations and recurring transfer workflows, in addition to local computing with higher capacity needs.


- Storage: 80 TB of hard disk drive (HDD) capacity for block volumes and Amazon S3 compatible object storage, and 1 TB of SATA solid state drive (SSD) for block volumes.

- Compute: 40 vCPUs, and 80 GiB of memory to support Amazon EC2 sbe1 instances (equivalent to C5).

**Snowball Edge Compute Optimized** provides powerful computing resources for use cases such as machine learning, full motion video analysis, analytics, and local computing stacks.

- Storage: 42-TB usable HDD capacity for Amazon S3 compatible object storage or Amazon EBS compatible block volumes and 7.68 TB of usable NVMe SSD capacity for Amazon EBS compatible block volumes.

- Compute: 52 vCPUs, 208 GiB of memory, and an optional NVIDIA Tesla V100 GPU. Devices run Amazon EC2 sbe-c and sbe-g instances, which are equivalent to C5, M5a, G3, and P3 instances.

#### AWS Snowmobile

- AWS Snowmobile is an exabyte-scale data transfer service used to move large amounts of data to AWS.

- Can transfer up to 100 petabytes of data per Snowmobile, a 45-foot long ruggedized shipping container, pulled by a semi trailer truck.




