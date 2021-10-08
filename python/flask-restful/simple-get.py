from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return {"Hello": "World"}

class Hi(Resource):
    def get(self):
        return {"Hello": "saad!"}

api.add_resource(HelloWorld, '/')

api.add_resource(Hi, '/hi')

if __name__ == "__main__":
    app.run(debug=True)