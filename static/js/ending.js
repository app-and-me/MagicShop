const dialogueData = {
    love: {
        "happy": {
            "name": "이민혁",
            "text": `
                    (꿀꺽꿀꺽) ㅎ후….뭐지 달라진 게 없는 거 같은데? (갑자기 민혁의 휴대전화가 울린다)
                    헉 이럴 수가 !! 진짜 성공했어!!! 이제 원영이를 만나러 가야겠어!! 마녀님 고마워요!!
            `,
            "image_path": "static/images/love/1.PNG"
        },
        "sad": {
            "name": "마녀",
            "text": `
                (꿀꺽꿀꺽) ㅎ후….뭐지 달라진 게 없는 거 같은데??(갑자기 민혁의 휴대전화가 울린다)
                뭐라고...?? 원영이가 창균이랑 사귄다고....? 이거 사랑의 물약 맞아? 완전 잘못됐어 ㅠㅠ
            `,
            "image_path": "static/images/love/4.PNG"
        }
    },
    money: {
        "happy": {
            "name": "김지수",
            "text": `
                    (꿀꺽꿀꺽) ㅎ후….뭐지 달라진 게 없는 거 같은데?? 
                    (갑자기 지수의 휴대전화가 울린다) 헉 !!! 내 통장에 100만원이 생겼어!! 진짜 물약이 효과가 있던 거였어 
                    이제 에어팟 맥스를 살 수 있게 되었네!! 웅와!!! 마녀님 정말 고마워요!!!!     
            `,
            "image_path": "static/images/money/1.PNG"
        },
        "sad": {
            "name": "김지수",
            "text": `
                (꿀꺽꿀꺽) ㅎ후….뭐지 달라진 게 없는 거 같은데?? (갑자기 지수의 휴대전화가 울린다)
                (M플릭스 정기 결제 -9500원) 
                이럴 수가 …이게 뭐야!!! 아무런 변화도 없이 오히려 돈이 빠져나갔잖아!! 역시 물약이 뭔가 잘 못 되어서 그런 거였어 이게 뭐야!!!!!ㅜㅜ
            `,
            "image_path": "static/images/money/4.PNG"
        }
    },
    intelligence: {
        "happy": {
            "name": "백예린",
            "text": `
                    (꿀꺽꿀꺽) ㅎ후….뭐지 달라진 게 없는 거 같은데? (갑자기 예린은 자신이 본 모든 책에 내용이 머리 속에 한 꺼번에 들어오는 느낌을 받았다) 
                    헉 !!! 갑자기 배운 내용이 싹 다 뇌에 입력된 기분이에요!! 이대로라면 내일 수능은 만점 가까이 받을 수 있을 거 같아요!
                    마녀님 정말 감사해요ㅜㅜ 내일 꼭 좋은 결과 만들게요!!    
            `,
            "image_path": "static/images/money/1.PNG"
        },
        "sad": {
            "name": "백예린",
            "text": `
                (꿀꺽꿀꺽) ㅎ후….뭐지 달라진 게 없는 거 같은데?? (갑자기 예린에게 엄청난 두통이 몰려온다) 아니…이게 뭐야…
                똑똑해지긴 커녕 알 수 없는 두퉁만 있잖아..너무 어지러워 가만히 서 있기에도 힘들 지경이야…
                하 머리가 아프니까 아까 아침에 봤던 영단어도 생각이 안나고 있어..역시… 물약이 뭔가 잘 못 되어서 그런 거였어 이게 뭐야!!!!!ㅜㅜㅜㅜㅜ
            `,
            "image_path": "static/images/money/4.PNG"
        }
    }
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const type = urlParams.get('type');
const isSuccess = urlParams.get('isSuccess') === 'true';
const dialogues = dialogueData[type];

const dialogueName = document.getElementById('dialogue_name');
const dialogueText = document.getElementById('dialogue_text');
const dialogueImage = document.getElementById('dialogue_image');

let currentDialogueIndex = -1;

function displayTextAnimation(text, interval) {
    let index = 0;
    let textInterval = setInterval(function () {
        if (index < text.length) {
            dialogueText.textContent += text[index];
            index++;
        } else {
            clearInterval(textInterval);
        }
    }, interval);
}

function displayNextDialogue() {
    dialogueText.innerHTML = '';

    let dialogue = dialogues[isSuccess ? 'happy' : 'sad'];
    dialogueName.textContent = dialogue.name;
    dialogueImage.src = dialogue.image_path;

    // 대화 텍스트를 한 글자씩 보여주는 애니메이션 호출
    displayTextAnimation(dialogue.text, 50);

    setTimeout(() => window.open(`/credit?isSuccess=${isSuccess}`, '_top'),
        dialogue.text.length * 50 + 1000); // 대화 텍스트 길이 * 간격 + 추가 시간

}


displayNextDialogue();