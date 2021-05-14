## Introduction

- Following tools are used to monitor the performance of the resource/business:

1. CloudWatch
2. CloudTrail
3. Trusted Advisor

If some resource is getting over utlised (EC2), it will automatically scale.


### CloudWatch

- Allows you to monitor AWS infrasture and resources (real time monitoring)

- Variable tied to resource. Ex: Cleaning after 100 mugs; owner can be alerted using **CloudWatch alarm: by setting a threshold or in development if developer forgets to stop instances, cloudwatch will shut it down.**

- Can be integrated with SMS aswell.

- CloudWatch dashboard allows you to monitor all resources from a single page in real time. **Can access metics from a central location**

- Gain visibility in applications, infrastructure and services -> Reduce MTTR and improve TCO.

MTTR: Mean time to resolution
TCO: Total cost of ownership

- Using insight to optimize application and opperational resources.


### CloudTrail

- Its an API auditing tool, every request is logged in CloudTrail engine and can be stored in secure S3 bucket.

- Used as a proof that settings where never changed. Tamper proof methods like **VaultLock** can be used to store these logs.

- Events updated every 15 mintues after API call. Filters can be applied during analysis.

#### Cloud Trail Insights

- Allows cloudtrail to automatically detect unusal API activities.


### AWS Trusted Advisor

- AWS has an automated advisor which checks and suggest better way to structure and use the resources.

- Evaluates resources on basis of 5 pillars:

1. Cost optimization
2. Performance
3. Security
4. Fault tolerance
5. Service limits

Runs series of check on each pillar and compiles a list of check. Some are free and others not depending on **support plan**

- It checks whether underutilised EC2 resource or multi factor authentication is turned off.

- **Check category: no problems, investigations and actions.**

- Can setup email alerts for checks.

- Check additional resources.






