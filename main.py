from flask import Flask, render_template, request, redirect, url_for
from replit import db
from flask import jsonify
import os

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/add', methods=['POST'])
def add_password():
    service = request.form['service']
    password = request.form['password']
    print(f"Service: {service}, Password: {password}")
    db[service] = password
    return redirect(url_for('index'))


@app.route('/passwords')
def passwords():
    passwords = dict(db)
    return render_template('passwords.html', passwords=passwords)

@app.route('/get_password')
def get_password():
    password = os.environ['pass1']
    return jsonify({'password': password})
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
