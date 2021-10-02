# Interview

### Prerequisite
Create conda environment and install the packages.

```bash
conda create -n interview python=3
pip install requirements.txt
```

### Start Webserver
To start the flask server.

```bash
python3 app.py
```

### Test Request

#### Success (1000)

Usually for success, we use 200.

```bash
curl --location --request POST 'http://3.7.73.29/login' \
    --header 'Content-Type: application/json' \
    --data-raw '{
"api_key": "cd99b8a0982cf76eac7e0c42c6073df2",
"email": "saber@gmail.com",
"password": "123"
}'
```

```json
{
    "responseCode": 1000,
    "responseMessage": "Success",
    "user": {
        "id": 1,
        "name": "Saber Abdel",
        "email_id": "saber@gmail.com",
        "gender": "Male",
        "last_login": "2021-10-01 22:18:24"
    }
}
```
#### Parameter Missing (301)

Usually for missing failure we use 422. We are not passing API key below.

```bash
curl --location --request POST 'http://3.7.73.29/login' \
    --header 'Content-Type: application/json' \
    --data-raw '{
"api_key": null,
"email": "saber@gmail.com",
"password": "123"
}'
```

```json
{
    "responseCode": 301,
    "responseMessage": "REQUEST_PARAMS_MISSING"
}
```

#### Permission Denied (911)

Usually for permission denied we use 403. We are entering the wrong API key.

```bash
curl --location --request POST 'http://3.7.73.29/login' \
    --header 'Content-Type: application/json' \
    --data-raw '{
"api_key": "wrong_api_key",
"email": "saber@gmail.com",
"password": "123"
}'
```

```json
{
    "responseCode": 911,
    "responseMessage": "ACCESS_PERMISSION_DENIED"
}
```

#### User not found (401)

Usually for page/user not found we use 404. We are entering the wrong user.
```bash
curl --location --request POST 'http://3.7.73.29/login' \
    --header 'Content-Type: application/json' \
    --data-raw '{
"api_key": "cd99b8a0982cf76eac7e0c42c6073df2",
"email": "nouser@gmail.com",
"password": "123"
}'
```

```json
{
    "responseCode": 401,
    "responseMessage": "USER_NOT_FOUND"
}
```

#### Invalid Login Credentials (410)

For unauthorized access/wrong credentials we use 401. Passing the wrong password.

```bash
curl --location --request POST 'http://3.7.73.29/login' \
    --header 'Content-Type: application/json' \
    --data-raw '{
"api_key": "cd99b8a0982cf76eac7e0c42c6073df2",
"email": "saber@gmail.com",
"password": "wrong_password"
}'
```

```json
{
    "responseCode": 410,
    "responseMessage": "INVALID_LOGIN_DETAILS"
}
```

#### Wrong method (911)

For method not allowed, we usually use 405. Instead of using POST method, we used GET method.

```bash
curl 'http://3.7.73.29/login'
```

```json
{
    "message": "The method is not allowed for the requested URL."
}
```

