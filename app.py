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
    dialogues = [
  {
    "name": "이민혁",
    "text": "난 미림 마이스터고에 재학 중인 이민혁, 올해부터 남녀공학이 되어서 다니게 되었다 학교를 다니던 중 내가 진짜 좋아하는 애가 생겼다. 입학식 때부터 내 마음을 훔쳐간 원영이…가슴 절절 앓는 짝사랑 끝에 고백을 하려고 마음을 먹었는데 며칠 전에 원영이가 같은 반 창균이를 좋아하고 있다는 소문을 들었다. 그렇게 원영이를 뺏기지 않고 싶은 마음에 나는 소원을 들어준다는 마녀의 물약 상점으로 가봤다.",
    "image_path": "images/love/1.PNG"
  },
  {
    "name": "마녀",
    "text": "어서오세요! 어떤 소원으로 물약 상점에 오셨죠??.",
    "image_path": "images/witch/2.PNG"
  },
  {
    "name": "이민혁",
    "text": "저…학교에 진짜 좋아하는 여자애가 있거든요…!! 근데 그 친구는 다른 남자애를 좋아해요.. 그 여자애가 저를 좋아하도록 하는 물약은 없나요??",
    "image_path": "images/love/3.PNG"
  },
  {
    "name": "마녀",
    "text": "사랑의 물약 말씀하시는 거군요!! 당연히 있죠!! 지금부터 당신의 소원을 들어드릴 사랑의 물약을 만들어드릴게요!!",
    "image_path": "images/witch/1.PNG"
  }
];
    return render_template('dialogue.html', dialogues=dialogues)

@app.route('/money')
def render_money():
    return render_template('money.html')

@app.route('/intelligence')
def render_intelligence():
    return render_template('intelligence.html')

if __name__ == '__main__':
    app.run()