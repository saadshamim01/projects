from flask import Flask
from flask.views import MethodView

app = Flask(__name__)

languages = [{'name' : 'JavaScript'}, {'name' : 'Python'}, {'name' : 'Ruby'}]

def get_language(name):
    return [language for language in languages if language['name'] == name][0]


class Language(MethodView):
    def get(self, language_name):
        print('GET')
        pass

    def post(self):
        print('POST')
        pass

    def put(self, language_name):
        print('PUT')
        pass

    def delete(self, language_name):
        print('DELETE')
        pass


language_view = Language.as_view('language_api')
app.add_url_rule('/language', methods=['POST'], view_func=language_view)
app.add_url_rule('/language', methods=['GET'], defaults={'language_name' : None}, view_func=language_view)
app.add_url_rule('/language/<language_name>', methods=['GET', 'PUT', 'DELETE'], view_func=language_view)

if __name__ == "__app__":
    app.run()