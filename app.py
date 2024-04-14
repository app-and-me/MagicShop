from flask import Flask, render_template
import json

app = Flask(__name__)

@app.route('/')
def render_index():
    return render_template('index.html')

@app.route('/start')
def render_start():
    return render_template('start.html')

@app.route('/making-potion')
def render_making_potion():
    return render_template('making_potion.html')

@app.route('/dialogue')
def render_dialogue():
    return render_template('dialogue.html')

@app.route('/progress')
def render_progress():
    return render_template('progress.html')

@app.route('/ending')
def render_ending():
    return render_template('ending.html')

@app.route('/credit')
def render_credit():
    return render_template('credit.html')

if __name__ == '__main__':
    app.run()