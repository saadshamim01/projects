## Create Linux EC2 Instance using AWS CLI

Connect to AWS CLI

```bash
aws configure
```

 Create Key Pair

```
aws ec2 create-key-pair --key-name ec2-key-pair
```

Create Security Group

```
aws ec2 create-security-group --group-name ec2-key-pair --description "ec2-key-pair"
```

Create an EC2 Instance

```
aws ec2 run-instances --image-id  ami-0a23ccb2cdd9286bb --instance-type t2.micro --key-name ec2-key-pair --security-group-ids sg-0a4cf4416a267785
```

Create Volume

```
aws ec2 create-volume --volume-type gp2  --size 5 --availability-zone  ap-south-1b
```

Attach Volume to EC2 instance

```
aws ec2 attach-volume --volume-id vol-06cd6252f1e2997b2 --instance-id i-01fb037a0fa4ae11c --device /dev/sdf
```

#### Clean Up

Terminate EC2 instance

```
aws ec2 terminate-instances --instance-ids i-00d8ed666fe3c19e3
```



