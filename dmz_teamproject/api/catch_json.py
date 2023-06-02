from flask import Flask , jsonify ,request ,  json
from recommender_algorithm import run
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

    return response

if __name__ == '__main__':
    app.run(host = 'localhost' , port=5000 , debug=True)