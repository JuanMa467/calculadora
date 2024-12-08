from pickle import FALSE
from flask import Flask, jsonify, render_template, redirect, url_for, session
from flask import request

app = Flask(__name__)
app.secret_key = "llave"



@app.route('/calculadora')
def calculadora():
    try:
        session['total'] = 0
        return render_template("indexCalculadora.html")
    except KeyError:
        return ("NO ESTA LOGUEADO")

@app.route('/realizar_suma', methods=["GET", "POST"])
def realizar_suma():

    mensaje = ''
    request_data = request.get_json()
    
    numero1 = int(request_data['p_num1'])
    total = int(session['total'])+ numero1
    session['total'] = total
    mensaje = "Total: "+str(total)
    return jsonify({"respuesta": mensaje })

@app.route('/realizar_resta', methods=["GET", "POST"])
def realizar_resta():
    mensaje = ''
    request_data = request.get_json()
    
    numero1 = int(request_data['p_num1'])
    total = int(session['total'])- numero1
    session['total'] = total
    mensaje = "Total: "+str(total)
    return jsonify({"respuesta": mensaje })

@app.route('/realizar_división', methods=["GET", "POST"])
def realizar_división():
    mensaje = ''
    request_data = request.get_json()
    
    numero1 = int(request_data['p_num1'])
    total = int(session['total'])/ numero1
    session['total'] = total
    mensaje = "Total: "+str(total)
    return jsonify({"respuesta": mensaje })
@app.route('/realizar_multiplicación', methods=["GET", "POST"])
def realizar_multiplicación():
    mensaje = ''
    request_data = request.get_json()
    
    numero1 = int(request_data['p_num1'])
    total = int(session['total'])* numero1
    session['total'] = total
    mensaje = "Total: "+str(total)
    return jsonify({"respuesta": mensaje })
@app.route('/realizar_porcentaje', methods=["GET", "POST"])
def realizar_porcentaje():
    mensaje = ''
    request_data = request.get_json()
    
    numero1 = int(request_data['p_num1'])
    total = (int(session['total'])* numero1)/100
    session['total'] = total
    mensaje = "Total: "+str(total)
    return jsonify({"respuesta": mensaje })
@app.route('/realizar_raíz', methods=["GET", "POST"])
def realizar_raíz():
    mensaje = ''    
    request_data = request.get_json()
    
    numero1 = int(request_data['p_num1'])
    total = int(session['total'])**(1/numero1)
    session['total'] = total
    mensaje = "Total: "+str(total)
    return jsonify({"respuesta": mensaje })

@app.route('/AC', methods=["GET", "POST"])
def AC():
    mensaje = ''
    total = int(session['total']) * 0
    session['total'] = total 
    mensaje = "Total: "+str(total)
    return jsonify({"respuesta": mensaje })
@app.route('/resultado' , methods=["GET", "POST"])
def resultado():
    request_data = request.get_json()
    numero1 = int(request_data['p_num1'])
    total = numero1
    session['total'] = total
    mensaje = "Total: "+str(total)
    return jsonify({"respuesta": mensaje })

if __name__ == '__main__':
    app.run(debug=True, port=5000)