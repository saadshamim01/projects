from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, Float, String
import os

app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'planets.db')

db = SQLAlchemy

@app.route('/')
def hello_world():
    return jsonify('Hello World!'), 200


@app.route('/super_simple')
def super_simple():
    return jsonify(message="Simple Life!")

@app.route('/not_found')
def not_found():
    return jsonify(message="Not found"), 404

@app.route('/parameters')
def parameters():
    name= request.args.get('name')
    age = int(request.args.get('age'))
    if age < 18:
        return jsonify(message = "Sorry " + name + " you are not old enough"), 401
    else:
        return jsonify(message = "Welcome " + name + " you are old enough"), 200


# localhost:5000/url_variables/name/age
@app.route('/url_variables/<string:name>/<int:age>')
def url_variables(name: str, age: int):
    if age < 18:
        return jsonify(message = "Sorry " + name + " you are not old enough"), 401
    else:
        return jsonify(message = "Welcome " + name + " you are old enough"), 200


# Database
class User(db.Model):
    __tablename__= 'users'
    id = Column(Integer, primary_key=True)
    first_name=Column(String)
    last_name=Column(String)
    email=Column(String, unique=True)
    password=Column(String)






if __name__ == '__main__':
    app.run()
