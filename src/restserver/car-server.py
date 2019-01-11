#!/usr/bin/env python
# -*- coding: UTF-8 -*-

"""A simple python script to query ANALYSE server and generate statistics
   using ANALYSE REST Version 3
"""

from flask import Flask, url_for, jsonify, request, Response
from flask_cors import CORS
from functools import wraps
import sys
import json
import codecs
import datetime
import jwt


# script version
__version__ = "0.1.0"
__author__ = "Eugen Weimann"
__email__ = "eugen.weimann@corpuls.com"

# Car server
SERVERNAME = "car REST server"
HOST = "http://localhost"
PORT = 5000

# CORS origin
ORIGIN = "http://localhost"


# parameters
app = Flask(SERVERNAME)
CORS(app,origins=ORIGIN,supports_credentials=True)


def log(s):
    print(s)


def _check_auth(username, password):
    return username == 'user1' and password == 'pass'


def _add_common_headers(response):
    response.headers["Access-Control-Allow-Origin"] = ORIGIN
    response.headers["Access-Control-Allow-Credentials"] = "true"
    return response


def _authenticate():
    message = {'message': "Authenticate."}
    resp = jsonify(message)

    resp.status_code = 401
    _add_common_headers(resp)
    resp.headers['WWW-Authenticate'] = 'Basic realm="Example"'

    return resp


def requires_user_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        auth = request.authorization
        if not auth:
            return _authenticate()

        elif not _check_auth(auth.username, auth.password):
            return _authenticate()
        return f(*args, **kwargs)

    return decorated


@app.errorhandler(404)
def not_found(error=None):
    message = {
            'status': 404,
            'message': 'Not Found: ' + request.url,
    }
    resp = jsonify(message)
    _add_common_headers(resp)
    resp.status_code = 404

    return resp


@app.route("/")
def api_root():
    return "Welcome to " + SERVERNAME


@app.route("/v1/cars", methods=["GET", "POST"])
@requires_user_auth
def car_search():
    term = ""
    if request.args:
       if "size" in request.args:
           log("size: " + request.args["size"])
       if "term" in request.args:
           term = request.args['term']
           log("term: " + request.args['term'])
    
    data = _json_from_file('cars.json')
    if len(term) > 0:
        data = [x for x in data if term in x["Name"]]
    print("LEN;: "+str(len(data)))
    
    resp = jsonify(data)
    resp.headers['Link'] = HOST
    _add_common_headers(resp)
    resp.status_code = 200
    resp.headers["Content-Type"] = "application/json"

    return resp
   
def _file_as_list(filename):
    with open("data/" + filename,"r") as f:
         return f.read().splitlines()
         
def _json_from_file(filename):
    return json.load(codecs.open("data/" + filename,'r','utf-8'))
        
def main(arguments):
    log("Starting " + SERVERNAME)
    app.run()


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
