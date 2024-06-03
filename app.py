from flask import Flask, render_template, request
import serial
import time

app = Flask(__name__)

# 시리얼 포트 설정 (Windows의 경우 'COM3', 'COM4' 등, Linux의 경우 '/dev/ttyUSB0', '/dev/ttyACM0' 등)
ser = serial.Serial('COM3', 9600)

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

@app.route('/trigger', methods=['POST'])
def trigger_relay():
    # Arduino에 신호를 보냅니다.
    ser.write(b'1')  # '1'이라는 신호를 보냅니다. Arduino에서 이 신호를 감지하도록 설정
    return {'status': 'success'}

if __name__ == '__main__':
    app.run()
