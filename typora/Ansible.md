Ansible

- Ansible is agentless. No need to install on target server. One time installation required.
- Uses yaml language.

- Modules are granular and specific.
- Playbook
  - how and in which order
  - at what time and where (on which machines)
  - what (modules) should be executed

#### Inventory

Here’s that same basic inventory file in YAML format:

```ansibe
all:
  hosts:
    mail.example.com:
  children:
    webservers:
      hosts:
        foo.example.com:
        bar.example.com:
    dbservers:
      hosts:
        one.example.com:
        two.example.com:
        three.example.com:
```

Multiple Groups to track:

- What - An application, stack or microservice (for example, database servers, web servers, and so on).
- Where - A datacenter or region, to talk to local DNS, storage, and so on (for example, east, west).
- When - 

#### PlayBook

- Ansible Playbooks offer a repeatable, re-usable, simple configuration management and multi-machine deployment system, one that is well suited to deploying complex applications.

**Running a playbook**



To see the details

```
ansible-playbook [name].yml

# To
ansible-playbook second.yml -v
```



Ansible Ad-hocs Queries

```
ansible localhost -m find -a "paths=/Users/saadshamim/Downloads/learning-spring file_type=file"
```





