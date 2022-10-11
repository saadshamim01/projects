## NameSpace

Kubernetes starts with four initial namespaces:

- `default` The default namespace for objects with no other namespace
- `kube-system` The namespace for objects created by the Kubernetes system
- `kube-public` This namespace is created automatically and is readable by all users (including those not authenticated). This namespace is mostly reserved for cluster usage, in case that some resources should be visible and readable publicly throughout the whole cluster. The public aspect of this namespace is only a convention, not a requirement.
- `kube-node-lease` This namespace for the lease objects associated with each node which improves the performance of the node heartbeats as the cluster scales.

**Creating file in new namespace**

- Define in configmap.yaml

```
apiVersion: v1
kind: ConfigMap
metadata:
  name: game-demo
  namespace: my-namespace
data:
db_url: mysql-service.database
```

- From Terminal

```
kubectl run nginx --image=nginx --namespace=<insert-namespace-name-here>
kubectl get pods --namespace=<insert-namespace-name-here>
```

```
kubectl apply -f mysql-configmap.yaml --namespace=m
y-namespace
```

**Displaying** 

- Getting service/configmap from another namespace

```
kubectl get configmap -n my-namespace
```

**Install kubectx**

```
brew install kubectx
```

```
kubens my-namespace
# No need to add additional flags
kubectl get configmap 
```

