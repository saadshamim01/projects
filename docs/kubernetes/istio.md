## Istio Service Mesh

Service mesh: managaes communication between microservices.

Challenges of microservice architecture

- Business Logic(BL)
- Communication Configuration (COMM)
- Security Logic(SEC)
- Retry Logic (R)
- Metric & tracing logic (MT)

Security: Communication inside cluster, service can talk with other service. Developers dont have time to work on actual applications. Business logic needs to be added to each node. Increases complexity

Solution

- Core Feature: Traffic Split
  - Release new version without breaking the application. (Canary Deployment)



Redis

sudo apt update

sudo apt-get install redis

redis-cli -h [primary_endpoint] -p [port]

Enable inbound rule for EC2 Custom. TCP [port] [0.0.0.0/0]

set name []

get name

set city pune

set mobile 321

keys *



