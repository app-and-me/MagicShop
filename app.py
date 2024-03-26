from flask import Flask, render_template
import json

app = Flask(__name__)

@app.route('/')
def render_index():  # put application's code here
    return render_template('index.html')

@app.route('/start')
def render_start():
    return render_template('start.html')

@app.route('/love')
def render_love():

    return render_template('love_dialogue.html')

@app.route('/money')
def render_money():
    return render_template('money_dialogue.html')

@app.route('/intelligence')
def render_intelligence():
    return render_template('intelligence_dialogue.html')

if __name__ == '__main__':
    app.run()