from flask import Flask , request , jsonify
from recommender_algorithm import run


app = Flask(__name__)

@app.route("/api/data" , methods = ['POST'])
def process_json():
    data = request.get_json()

    sentence = ' '.join([data['cloth'] , data['color'] , data['country'] , data['mol'] , data['season'] , data['sex']])
    
    result = run(sentence)
    
    response = {
        "address" : result
    }
    
    return jsonify(response)

if __name__ == '__main__':
    app.run(host = 'localhost' , port = 8000 , debug = True)