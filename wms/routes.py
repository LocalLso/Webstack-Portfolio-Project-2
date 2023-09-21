from flask import Flask, render_template, url_for
from wms import app
from flask_cors import CORS, cross_origin

@app.route("/", methods=['GET', 'POST'])
@app.route("/home", methods=['GET', 'POST'])
@cross_origin()
def home():
	return render_template('home.html')
