from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route("/calculator/greeting", methods=['GET'])
def greeting():
    return 'Hello world!', 200

@app.route("/calculator/add", methods=['POST'])
def add():
    content = request.json
    first = int(content["first"])
    second = int(content["second"])
    resp = {'result': first+second}
    return jsonify(resp)

@app.route("/calculator/subtract", methods=['POST'])
def subtract():
    content = request.json
    first = int(content["first"])
    second = int(content["second"])
    resp = {'result': first-second}
    return jsonify(resp)

if __name__ == '__main__':
    app.run(port=8080,host='0.0.0.0')
