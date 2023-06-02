from flask import Flask , request , jsonify
from recommender_algorithm import run

app = Flask(__name__)

@app.route("http://10.20.101.180:3000/api/endpoint" , methods = ['POST'])
def process_json():
    data = request.get_json()

    #sentence = ' '.join([data['cloth'] , data['color'] , data['country'] , data['mol'] , data['season'] , data['sex']])

    #result = run(sentence)

    #response = {
    #    "address" : result
    #}

    #return jsonify(response)

    test = {
        "address" : "안녕"
    }

    return jsonify(test)


if __name__ == '__main__':
    app.run()