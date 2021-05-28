import diet_algorithm
from flask import Flask, request
import pandas as pd
import json

app = Flask(__name__)

@app.route('/reg', methods=['GET', 'POST'])
def registration():
    jdata = json.loads(request.data)
    print(jdata)
    with open('users.json') as f:
        users = json.load(f)
    with open('users.json', 'w') as f:
        users.update({jdata['Userdata']['login']: jdata})
        json.dump(users, f, ensure_ascii=False, indent=2)
    return jdata['Userdata']['login']


@app.route('/')
def main_list():
    return pd.read_csv('receipts.csv').fillna('').to_html()


@app.route('/auth', methods=['GET', 'POST'])
def authorization():
    jdata = json.loads(request.data)
    with open('users.json') as f:
        users = json.load(f)
        if jdata['login'] in users:
            if jdata['password'] == users[jdata['login']]['Userdata']['password']:
                return json.dumps(users[jdata['login']], indent=2)
            else:
                return '0'
        else:
            return '0'


@app.route('/new_user', methods=['GET', 'POST'])
def new_user():
    jdata = json.loads(request.data)
    with open('users.json') as f:
        users = json.load(f)
        if jdata['login'] in users:
            return '1'
        else:
            return '0'


@app.route('/get_diet', methods=['GET', 'POST'])
def get_diet():
    jdata = json.loads(request.data)
    login = jdata['login']
    time = jdata['time']
    if request.method == 'POST':
        with open('users.json') as f:
            users = json.load(f)
        user_content = diet_algorithm.get_receipt(users[login], time)
        return user_content


if __name__ == '__main__':
    app.run('127.0.0.1', port=1337, debug=True)
