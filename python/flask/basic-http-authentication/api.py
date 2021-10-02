from flask import Flask,request, make_response
from functools import wraps
app = Flask(__name__)

def auth_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        auth = request.authorization
        if auth and auth.username == 'user' and auth.password == 'password1':
            return f(*args, **kwargs)

        return make_response('Could not verify!', 401, {'WWW-Authenticate': 'Basic realm="Login Required"'})

    return decorated

@app.route('/login')
def index():
    auth = request.authorization
    if auth and auth.username == 'user' and auth.password == 'password1':
        return '<h1> you are logged in </h1>'

    return make_response('Could not verify!', 401, {'WWW-Authenticate': 'Basic realm="Login Required"'})


@app.route('/page1')
@auth_required
def page1():
    return '<h1> you are on the 1st page </h1>'

@app.route('/page2')
@auth_required
def page2():
    return '<h1> you are on the 2nd page </h1>'


if __name__ == '__main__':
    app.run(debug=True)