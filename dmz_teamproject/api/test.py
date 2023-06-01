from recommender_algorithm import run
from flask import jsonify

data = {
    "cloth" : "hello" ,
    "color" : "my" ,
    "country" : "name" ,
    "mol" : "is" ,
    "season" : "daeyang" ,
    "sex" : "kim"
}

data = jsonify(data)
print(data)