## Boto3 Installation on EC2 Linux 

Launch EC2 Linux and connect to it.

Step1: Install server updates

```
sudo yum update -y
```

Step 2: Install Python Packages

```
sudo yum install python -y
```

- Verify the version

  ```
  sudo yum info python

Step 3: Install Boto3 package

- Download pip

  ```
  wget https://bootstrap.pypa.io/get-pip.py
  ```

- Verify pip file

  ```ll
  ll
  ```

- Install pip

  ```
  python get-pip.py
  ```

- Verify pip version

  ```
  pip show
  ```

- Install boto3

  ```
  pip install boto3

Step 4: Verify boto3 version

```bash
pip show boto3
```