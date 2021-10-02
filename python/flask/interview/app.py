#!/usr/bin/env python3

from flask import Flask
from flask_restful import Resource, Api, reqparse
from datetime import datetime

DATETIME_FORMAT = "%Y-%m-%d %H:%M:%S"

app = Flask(__name__)
api = Api(app)
API_KEY = "cd99b8a0982cf76eac7e0c42c6073df2"

# for simplicity we are storing username and password in memory
# we could store in external database or file system.
USERS = {
  "saber@gmail.com": {
    "id": 1,
    "name": "Saber Abdel",
    "email_id": "saber@gmail.com",
    "gender": "Male",
    "password": "123",  # ideally we just want to store hash for security reason
    "last_login": "2021-09-01 15:08:29"
  }
}

parser = reqparse.RequestParser()
parser.add_argument('api_key')
parser.add_argument('email')
parser.add_argument('password')



class Hello(Resource):
    def get(self):
        return {'hello': 'world'}


class User(Resource):

  def post(self):
    args = parser.parse_args()
    # check params
    if args.api_key is None or args.email is None or args.password is None:
      return self._create_error_response(
          error_code=301,
          error_message="REQUEST_PARAMS_MISSING"
      )

    # permission denied if api_key is invalid
    if args.api_key != API_KEY:
      return self._create_error_response(
          error_code=911,
          error_message="ACCESS_PERMISSION_DENIED"
      )

    # check if user exists
    if args.email not in USERS:
      return self._create_error_response(
          error_code=401,
          error_message="USER_NOT_FOUND"
      )

    user = USERS[args.email]
    # validate login details
    if user["password"] != args.password:
      return self._create_error_response(
          error_code=410,
          error_message="INVALID_LOGIN_DETAILS"
      )

    # success
    if args.api_key == API_KEY and (
        args.email == user["email_id"] and args.password == user["password"]):
      response = {
        "responseCode": 1000,
        "responseMessage": "Success",
        "user": {
          "id": user["id"],
          "name": user["name"],
          "email_id": user["email_id"],
          "gender": user["gender"],
          "last_login": datetime.fromisoformat(user["last_login"]).strftime(
              DATETIME_FORMAT)
        }
      }
      # update last succesful login time
      user["last_login"] = datetime.now().isoformat()
      return response
    # wrong api method

  def _create_error_response(self, error_code, error_message):
    return {
      "responseCode": error_code,
      "responseMessage": error_message
    }

api.add_resource(User, '/login')
api.add_resource(Hello, '/hi')

if __name__ == "__main__":
  app.run(debug=True)
