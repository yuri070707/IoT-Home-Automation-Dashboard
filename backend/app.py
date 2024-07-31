from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

data = {
    "temperature": None,
    "humidity": None
}

@app.route('/data', methods=['GET'])
def get_data():
    print("GET request received")
    return jsonify(data)

@app.route('/data', methods=['POST'])
def update_data():
    global data
    print("POST request received")
    data = request.get_json()
    print(f"Received data: {data}")  # データ受信をログに記録
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
