



#### SQS

- FIFO, 3000 requests using batch, 300/s without
- Latency: <10ms
- Retention: 4 to 14 days
- Limitation 256 kb
- Sending: Body, metadata,  delay; Receiving: Message identifier, MD5 hash
- Receive max 10
- Max Limitation: 120,000
- Server Side Encryption using KMS, does not encrypt metadata.

#### SQS Extended Client

- More than 256 kb, using SQS extended client (java library)

#### Internet of Things (IOT)

- Pub/Sub: low latency
- Message sent using MQTT, WebSocket, HTTP 1.1 protocols
- Message published into topics
- Authentication: X.509 certificares, Cognito, IAM, Federated Identities
- Rules defined on MQTT topics
- **IoT Greengrass** brings the compute layer to the device directly



#### Direct Connect

Private connection betweeen remote network to VPC. Supports IPv4 & APv6.

- Types:
  1. Dedicated Connections: Aws first then AWS Direct Connect Partners
  2. Hosted Connections: Request made via AWS Direct Connect Partners
- Data in transit not encrypted but private. AWS Direct Connect + VPN -> IPsec-encrypted private connection.

#### Snow Family

Collect and process data on edge locations, migrates data aswell.

Data Migration

Edge Compute





- 

- 







 

 

