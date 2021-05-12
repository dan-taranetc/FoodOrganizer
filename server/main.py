from flask import Flask, request
import json
app = Flask(__name__)


@app.route('/auth', methods=['GET', 'POST'])
def authorization():
    jdata = json.loads(request.data)
    with open('users.json') as f:
        users = json.load(f)
        if jdata['login'] in users:
            if jdata['password'] == users[jdata['login']]['password']:
                return '0'
            else:
                return '1'
        else:
            return '1'


@app.route('/new_user', methods=['GET', 'POST'])
def new_user():
    jdata = json.loads(request.data)
    with open('users.json') as f:
        users = json.load(f)
        if jdata['login'] in users:
            return '1'
        else:
            return '0'


@app.route('/reg', methods=['GET', 'POST'])
def registration():
    jdata = json.loads(request.data)
    print(jdata)
    with open('users.json') as f:
        users = json.load(f)
    with open('users.json', 'w') as f:
        users.update({jdata['login']: jdata})
        json.dump(users, f, ensure_ascii=False, indent=2)
    return jdata['login']


if __name__ == '__main__':
    app.run('127.0.0.1', port=3708, debug=True)

