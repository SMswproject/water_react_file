from flask import Flask , jsonify ,request ,  json
from recommender_algorithm import run
from free_mod import run_free
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/data" , methods = ['POST'])
def process_json():
    data = request.get_json()

    sentence = ' '.join([data['cloth'] , data['color'] , data['country'] , data['mol'] , data['season'] , data['sex']])

    result = run(sentence)

    response = {
        'address' : result
    }

    return jsonify(response)

@app.route("/api/endpoint" , methods = ['POST'])
def free_mode():
    data = request.get_json()

    string = data['string']

    result = run_free(string)
    
    address = result[0].values[0]
    name = result[1]

    response = {
        'address' : address ,
        'name' : name
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(host = 'localhost' , port=5000 , debug=True)