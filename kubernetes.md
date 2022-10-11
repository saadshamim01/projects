## Kubernetes

- Kubernetes is Open Source Orchestration system for Docker Containers. 
-  Kubernetes Implemented by Google.
-  Kubernetes is a platform that eliminates the manual processes involved in deploying containerised applications. 
- Kubernetes used to manage the State of Containers. Start Containers on Specific Nodes. Restart Containers when gets Killed. Move containers one Node to Another

![Screen Shot 2021-11-27 at 9.21.27 PM](/Users/saadshamim/Desktop/Screen Shot 2021-11-27 at 9.21.27 PM.png)

##### Features of Kubernetes 

- **Automated Scheduling:** Kubernetes provides advanced scheduler to launch container on cluster nodes based on their resource requirements and other constraints. 
- **Healing Capabilities:** Kubernetes allows to replaces and reschedules containers when nodes die. Kubernetes doesn’t allow Containers to use, until they get ready. 
- **Auto Upgrade and RollBack:** Kubernetes rolls out changes to the application or its configuration. Monitoring Application ensure that Kubernetes doesn’t kill all Instance at that time. If something goes wrong, with Kubernetes you can rollback the change.
- **Horizontal Scaling:** Kubernetes can scale up and scale down the application as per the requirements with a simple command, using a UI, or automatically based on CPU usage. 
- **Storage Orchestration:** With Kubernetes, you can mount the storage system of your choice. You can either opt for local storage, or choose a public cloud provider. 
- **Secret & Configuration Management:** Kubernetes can help you deploy and update secrets and application configuration without rebuilding your image and without exposing secrets in your stack configuration.

#### Kubernetes Architecture

Kubernetes follow the Master - Slave(Worker) Node Architecture. 

- Master Node : Responsible for the management of Kubernetes cluster. Entry point for all administrative tasks.
- Kubernetes can have Multi-Master Architecture.

![Screen Shot 2021-11-27 at 9.25.28 PM](/Users/saadshamim/Desktop/Screen Shot 2021-11-27 at 9.25.28 PM.png)



**API Server** 

- API server is the entry point for all the REST commands used to control the cluster. 
- Interaction Point with Kubernetes. 

**Etcd**

- Distributed keyvalue store which stores the cluster state. 
- Used as Back-End for K8s. 
- Provides high availability of Data related to Cluster State.

**Scheduler** 

- Regulates the tasks on slave nodes. Stores the resource usage information for each slave node.

**Controller** 

- Runs multiple Controller utility in single process. ➤ Carry on Automated tasks in K8s Cluster.

![Screen Shot 2021-11-27 at 9.30.34 PM](/Users/saadshamim/Desktop/Screen Shot 2021-11-27 at 9.30.34 PM.png)

**Worker Node**  

- It’s a physical server or you can say a VM where the container managed by the Cluster Run. 
- Worker nodes contain all the necessary services to manage the networking between the containers, communicate with the master node, and assign resources to the scheduled containers. 

**Kubelet** 

- K8s Agent executed on the worker nodes. 
- Kubelet gets the configuration of a Pod from the API server and ensures that the described containers are up and running.

**Pods** 

- Is a group of one or more containers with shared storage/network, and a specification for how to run the containers. 
- Share the Same Shared content and same IP but reach other Pods via LocalHost. 
- Single Pod can Run on Multiple Machines and Single Machine can Run Multiple Pods.

**Kube-Proxy**

- Kube-proxy runs on each node to deal with individual host sub-netting and ensure that the services are available to external parties. 
- Kube-proxy acts as a network proxy and a load balancer for a service on a single worker node.

Kubernetes Installation

- Kubernetes HA Deployment (1-Master | 2 -Worker) Suitable for Production like SetUp 

- Single Node Deployment (MiniKube K8s Cluster) Suitable for Development/Practice



#### Commands

kubectl config view: To check whether the cluster is running or not

1. Use the kubectl create command to create a Deployment that manages a Pod. The Pod runs a Container based on the provided Docker image.
`kubectl create deployment hello-node --image=k8s.gcr.io/echoserver:1.10`

2. View the Deployment:
`kubectl get deployments`

3. View the Pod:
`kubectl get pods`

4. Expose the Pod to the public internet using the kubectl expose command:
`kubectl expose deployment hello-node --type=LoadBalancer --port=8080`

**The --type=LoadBalancer flag indicates that you want to expose your Service outside of the cluster.**

5. View the Service you created:
`minikube service hello-node`

CleanUP -
1. Remove service
kubectl delete service hello-node
2. Remove Deployments-
kubectl delete deployment hello-node

minikube service hello-node: To open the link on chrome

#### Namespace

- NameSpaces are virtual Cluster backed by the same Physical Cluster. K8s Objects, such as pods and containers live in NameSpace. 
- NameSpaces are ways to separate and organise Objects in K8

- List existing namespaces

  `kubectly get namespaces`

- Specify namespace, if namespace not specified then default

  `kubectl get pods --namespace <namespace_name> `

- Create namespace

  `kubectl create namespace <namespace_name> `

#### High Availability

![Screen Shot 2021-11-28 at 12.02.28 AM](/Users/saadshamim/Desktop/Screen Shot 2021-11-28 at 12.02.28 AM.png)

![Screen Shot 2021-11-28 at 12.02.38 AM](/Users/saadshamim/Desktop/Screen Shot 2021-11-28 at 12.02.38 AM.png)

![Screen Shot 2021-11-28 at 12.02.33 AM](/Users/saadshamim/Desktop/Screen Shot 2021-11-28 at 12.02.33 AM.png)

#### K8s Management Tools ➤ 

- Kubectl 
  - Kubectl is official CLI for K8s. 
  - We will see using kubectl thought-out this course.
- Kubeadm 
  - Kubeadm tool is used to easily creating the K8s Cluster.
  - Helping user to set-up and make cluster functional.
- Minikube
  - K8s Developer’s tool. 
  - Help to SetUp K8s Cluster quickly for Development. 
  - SetUp local single Node Cluster. 
- Helm
  - Powerful tool for K8s Template and Package management. 
  - Ability to Convert K8s Objects in reusable templates.  
  - Ability to provide Complex Multi Config Templates with cross connectivity.
- Kompose
  - Helps to translate Docker Compose files into a K8s Objects. 
  - Ability to ship containers from Compose to K8s.
- Kustomize
  - Configuration management tool for K8s objects Configuration. Similar to Helm and have ability to create re-useable templates for K8s.



#### Node Draining

- Sometimes, we need to remove a Node from Cluster in Service.  

- Application shouldn’t be impacted by this process. 

- Draining Node : Containers running on that node will be gracefully terminated and re-schedule to another available node. 

- Use Kubectl to drain node : 

  `kubectl drain <node_name>`

- Ignore DaemonSet : DaemonSet means pods that are tied to each node. If any DaemonSet is running in your K8s cluster, use command -

  kubectl drain <node_name> - -ignore-daemonsets

- Uncordoning K8s Node

  - If node remain part of Container. User can allow pods to run on that node. 
  - `kubectl uncordon <node_name> `

-    vi pods.yaml

  root@k8-master:~# kubectl apply -f pods.yaml

  

  cannot delete Pods not managed by ReplicationController, ReplicaSet, Job, DaemonSet or StatefulSet (use --force to override): default/draining-node-test-pod

  cannot delete DaemonSet-managed Pods (use --ignore-daemonsets to ignore): kube-system/calico-node-2qtl6, kube-system/kube-proxy-5rcv8

#### Upgrading the Cluster

**Upgrading Master Node:** Drain Control Plane Node, Plan upgrade, apply upgrade, upgrade kubectl and kubelet

**Upgrading Worker Node:** Upgrade worker node , drain worker node, upgrade kubeadm

#### Kubernetes Object Management

- Kubectl is command line tool for Kubernetes. 

- Kubectl uses the K8s APIs internally to carryout the commands.

  `kubectl uncordon <node_name>`

**Kubectl get** 

- Kubectl get is used to get the objects, present in K8s Cluster $ 

  `kubectl get   -o —sort-by  —selector` 

-  -o — Set Output format YML/JSON  

- -sort-by — Sort Output using JSON path Expression

- -Selector — Filter results by label

**Kubectl** **describe**

- You can get Detailed Information about any Kubernetes Object.

  `kubectl describe <object_name><object_name>  `

**Kubectl create**

- You can create any K8s Object using Kubectl create. 

- File descriptor must be YAML.

  `kubectl create -f `

**Kubectl apply**

- Kubectl apply is similar to Kubectl create.

- If user use kubectl apply on already existing object. It will modify the existing object, if possible.

  `kubectl apply -f <file_name>`

**Kubectl delete**

- Kubectl delete, deletes the object from K8s Cluster.

  `kubectl delete  <object_type> <object_name>`

**Kubectl exec**

- Kubectl exec, used to run commands inside container. 

- K8s resource must be running on which kubectl exec is being performed.

  `kubectl exec  -c <pod_name> -c <container_name>`

  `kubectl exec draining-node-test-deployment-5864dcbff4-s9qzt -c nginx -- cat /etc/nginx/nginx.conf`

#### Kuberntes RBAC

- K8s allows to manage the User Access in K8s Cluster.  
- Admins can restrict the User Read/Write Access in Kubernetes Cluster.

![Screen Shot 2021-11-28 at 7.45.32 PM](/Users/saadshamim/Desktop/Screen Shot 2021-11-28 at 7.45.32 PM.png)

![Screen Shot 2021-11-28 at 7.45.38 PM](/Users/saadshamim/Desktop/Screen Shot 2021-11-28 at 7.45.38 PM.png)









Pods and Containers

Application Configuration

- Most people already understand "configuration" as settings that influence the operation of an application. 
- Kubernetes allows user to pass dynamic configuration values to application at Runtime. 
- These dynamic Configuration helps user to control the Application Flow.

ConfigMap ➢ 

- Keep the Non-Sensitive Data in ConfigMap, which can be passed to Container Application. 
- Config Map Store Data in Key-Value format. 
- ConfigMaps allow you to separate your configurations from your Pods and components. 
- ConfigMap helps to makes configurations easier to change and manage, and prevents hardcoding configuration data to Pod specifications.

**ConfigMap Commands** ➢

- Config Map via Config File. 

  `kubectl create configmap [NAME] --from-file [/PATH/TO/ FILE.PROPERTIES] --from-file [/PATH/TO/FILE2.PROPERTIES]`

  `kubectl create configmap [NAME] --from-file [/PATH/TO/ DIRECTORY] `

- Get ConfigMap via CLI. 

  `kubectl get configmap  -o yaml/json`

  

**Secrets** 

- Secrets are similar to ConfigMap but designed to keep the Sensitive Data. 

- Create Secrets from file. 

  `kubectl create secret generic db-user-pass --from-file=./username.txt —from-file=./password.txt`

- ➢ Note : Special characters such as $, \, *, and ! require escaping.

- Get Secrets. 

  `kubectl get secrets`

- Describe Secrets.
-  `kubectl describe secrets `

**Sample Secrets YAML file.**

```
apiVersion: v1
kind: Secret
metadata:
name: mysecret-manifest
type: Opaque
data:
username: YW5zaHVsY2hhdWhhbg==
password: VGVzdGt1VybmV0ZXMxMjM0NQ==
```

![Screen Shot 2021-11-29 at 1.21.14 AM](/Users/saadshamim/Desktop/Screen Shot 2021-11-29 at 1.21.14 AM.png)

![Screen Shot 2021-11-29 at 1.22.18 AM](/Users/saadshamim/Desktop/Screen Shot 2021-11-29 at 1.22.18 AM.png)



ConfigMap

```
kubectl get configmaps     
kubectl describe configmaps player-pro-demo
kubectl apply -f example-configmap.yml  
```

Secrets

```
echo -n 'admin' | base64
echo -n 'adminpassword' | base64
kubectl apply -f example-secrect.yml  
kubectl describe secret example-secret
```

```
kubectl apply -f configmap-env-demo.yml 

kubectl exec configmap-env-demo -it -- sh
echo $SECRET_USERNAME
```

Mount Volume

```
kubectl apply -f configmap-vol-demo.yml
kubectl exec configmap-vol-demo -it -- sh
cd /etc/config/configMap
cat base.properties 
cd /etc/config/secrets
cat username
```



#### Resource Request 

- Resource request allows user to define a resource limit, user expect a container to use. 
- Kube Scheduler will manage resource request and avoid scheduling on node, which don’t have enough resources.
- Note : Containers are allowed to use more or less than the request resource. Resource Request is to manage the scheduling only.
- Memory is measure in Bytes. User is allowed to define in MegaByte as well. 
- Requests for CPU resources are measured in cpu units. 1 vCPU means 1000 CPU Unit. 

```yaml
apiVersion: v1
kind: Pod
metadata:
 name: frontend
spec:
 containers:
 - name: app
 image: nginx
 resources:
 requests:
 memory: "64Mi"
 cpu: "250m"
```

```yaml
apiVersion: v1
kind: Pod
metadata:
 name: frontend
spec:
 containers:
 - name: app
 image: nginx
 resources:
 limits:
 memory: "128Mi"
 cpu: "500m"
```

if memory exceeded -> Error

If cpu exceeded -> other resource will not start

#### Container Health

- Kubernetes is feature Rich, and provide number of features to monitor the containers.
- Active Monitoring Helps K8s to decide the container state and Auto Restart in Case of Container Failure.

#### Liveness Probe 

- Liveness probe helps to determine the Container State. 
- By Default, K8s only consider container to be down, if container process stops.
- Liveness probe helps user to improve & customized this Container Monitoring mechanism. 
- User can execute Two types of Liveness probes - Run Command in Container, Periodic HTTP Health Check.
- Liveness via Container Command manifest.
- i**nitialDelaySeconds: How long to wait before sending a probe after a container starts.** 
- **periodSeconds: How often a probe will be sent.**

#### ReplicaSet vs Replication Controller

The replica set are also known as next generation replication controller. The only difference between replica set and replication controller is **the selector types**. The replication controller supports equality based selectors whereas the replica set supports equality based as well as set based selectors.

 You can choose between 4 values of operators In, NotIn, Exists, DoesNotExist -

