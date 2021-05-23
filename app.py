import diet_algorithm
from datetime import datetime
from flask import Flask, render_template, jsonify, request
import pandas as pd
import json
import csv
from flask_json import FlaskJSON, JsonError, json_response, as_json
import wtforms
from json2html import *

app = Flask(__name__)
json = FlaskJSON(app)


@json.encoder
def custom_encoder(o):
    pass


json.init_app(app)


@json.encoder
def custom_encoder(o):
    pass


@app.route('/receipts')
def receipts():
    df = pd.read_csv('receipts.csv', delimiter=",").fillna(' ')
    return df.to_html()


@app.route('/test')
def test():
    df = pd.read_csv('receipts.csv', delimiter=',').fillna('')
    data = df['ингредиенты'].unique()
    return render_template('test.html', data=data)


@app.route('/json')
def get_json():
    df = pd.read_csv('receipts.csv', delimiter=',').fillna('')
    data = df.head()
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )
    return response


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


@app.route('/')
def main_list():
    return pd.read_csv('receipts.csv').fillna('').to_html()


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


@app.route('/user')
def get_diet_user():
    df = pd.read_csv('receipts.csv')
    return df.to_json()


@app.route('/tags')
def get_tags():
    df = pd.read_csv('dishes_and_content.csv').fillna('')
    return df.to_html()


if __name__ == '__main__':
    app.run()
