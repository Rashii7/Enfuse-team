
from flask import Flask, jsonify,request,send_file
import pickle
import json
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app,resources={r'/api/v1/*': {"origins": ["http://localhost:3000","*"],"supports_credentials": True}})

# cors = CORS(app, origins=['*'], methods=['GET', 'POST'])


 # read python dict back from the file
pkl_file = open('all_model.pkl', 'rb')
bus_pkl = open('Bus_model.pkl','rb')
rail_pkl = open('rail_model.pkl','rb')
metro_bus_pkl = open('metro_bus_model.pkl','rb')

model_all = pickle.load(pkl_file)
print(model_all)
bus_model = pickle.load(bus_pkl)
rail_model = pickle.load(rail_pkl)
metro_bus_model = pickle.load(metro_bus_pkl)
print(bus_model,rail_model,metro_bus_model)
result = model_all.predict([[1],[2]])
print("result--->",result)

@app.route('/')
def index():
    return 'Hello, world!'

@app.route('/api/v1/getAll',methods=["POST"])
def allMode():
    body = request.json;
    print("data", body)
    res = {}
    if "week" in body:
        week = body['week']
        # week = data['week']
        result = []
        if week == 'All':
            for i in range(1,52):
                res = model_all.predict([[i]])
                result.append(int(round(res[0][0])))

            return jsonify({'data': result}), 200
        else:
            for i in range(1,int(week)):
                res = model_all.predict([[i]])
                result.append(int(round(res[0][0])))

            return jsonify({'data': result}), 200
    else:
        return jsonify({"error": "week is required"}), 400

@app.route('/api/v1/getBus',methods=['POST'])
def getBus():
    body = request.json;
    print("data",body)
    result = []
    if "week" in body:
        week = body['week']
        if week == 'All':
            for i in range(1,52):
                res = bus_model.predict([[i]])
                result.append(int(round(res[0][0])))

            return jsonify({'data': result}), 200
        else:
            # result = bus_model.predict([[week]])
            # return jsonify({"data": int(round(result[0][0]))}), 200
            for i in range(1,int(week)):
                res = bus_model.predict([[i]])
                result.append(int(round(res[0][0])))

            return jsonify({'data': result}), 200
    else:
        return jsonify({"error":"week is required"}), 400

@app.route('/api/v1/metroBus',methods=['POST'])
def metroBus():
    body = request.json;
    print("data", body)
    if "week" in body:
        week = body['week']
        result = []
        if week == 'All':
            for i in range(1,52):
                res = metro_bus_model.predict([[i]])
                result.append(int(round(res[0][0])))

            return jsonify({'data': result}), 200
        else:
            for i in range(1, int(week)):
                res = metro_bus_model.predict([[i]])
                result.append(int(round(res[0][0])))

            return jsonify({'data': result}), 200
            # result = metro_bus_model.predict([[week]])
            # return jsonify({"data": int(round(result[0][0]))}), 200
    else:
        return jsonify({"error": "week is required"}), 400

@app.route('/api/v1/rail',methods=['POST'])
def rail():
    body = request.json;
    print("data", body)
    result = []
    if "week" in body:
        week = body['week']
        # week = data['week']
        if week == 'All':
            for i in range(1,52):
                res = rail_model.predict([[i]])
                result.append(int(round(res[0][0])))

            return jsonify({'data': result}), 200
        else:
            for i in range(1,int(week)):
                res = rail_model.predict([[i]])
                result.append(int(round(res[0][0])))

            return jsonify({'data': result}), 200
            # result = rail_model.predict([[week]])
            # return jsonify({"data": int(round(result[0][0]))}), 200
    else:
        return jsonify({"error": "week is required"}), 400

@app.route('/api/v1/totalwasteChart')
def total_waste():
    return send_file('totalwaste.png', mimetype='image/png')

@app.route('/api/v1/recycleWasteChart')
def recycle_waste():
    return send_file('recycle_waste.png', mimetype='image/png')

@app.route('/api/v1/total-waste-data')
def getDataTotalWasteData():
    # Load the JSON data from a file

    try:
       data = pd.read_json('DA_Total_Waste.json', orient='records', lines=True)
       json_data = data.to_json(orient='records')
       print("data",data)
    except Exception as e:
        print('err',e)

    # Return the data as a JSON response
    return jsonify({"data": json_data})

# @app.route('/api/v1/recyclejson')


if __name__ == '__main__':
    app.run()

