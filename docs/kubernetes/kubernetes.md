## Kubernetes 

It is an open-source container management tool responsible of container deployment, scaling & descaling of containers & load balancing.

- Docker manages lifecycle management and builds container using images. Containers communicate with each other via Kubernetes. So, containers running on multiple hosts can be manually linked and orchestrated using Kubernetes.

Features of Kubernetes

- Automated Scheduling
- Self Healing Capabilities
- Automated rollouts and rollbacks
- Horizontal Scaling and Load Balancing

### Components

#### Node

- Cluster consists of a set of worker machines, called [nodes](https://kubernetes.io/docs/concepts/architecture/nodes/), that run containerized applications. 
- Every cluster has at least one worker node.

#### Pods

- The worker node(s) host the [Pods](https://kubernetes.io/docs/concepts/workloads/pods/) that are the components of the application workload. 
- The [control plane](https://kubernetes.io/docs/reference/glossary/?all=true#term-control-plane) manages the worker nodes and the Pods in the cluster. In production environments, the control plane usually runs across multiple computers and a cluster usually runs multiple nodes, providing fault-tolerance and high availability.

- 

