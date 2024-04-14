const dialogueData = {
    love: [
        {
            "name": "이민혁",
            "text": "난 미림 마이스터고에 재학 중인 이민혁, 입학식 때부터 내 마음을 훔쳐간 원영이… 근데 그런 원영이가 옆 반 창균이를 좋아한다고? 원영이를 뺏기지 않고 싶은 마음에 나는 소원을 들어준다는 마녀의 물약 상점으로 가봤다.",
            "image_path": "static/images/love/1.PNG"
        },
        {
            "name": "마녀",
            "text": "어서오세요! 어떤 소원으로 물약 상점에 오셨죠??.",
            "image_path": "static/images/witch/2.PNG"
        },
        {
            "name": "이민혁",
            "text": "저…학교에 진짜 좋아하는 여자애가 있거든요…!! 근데 그 친구는 다른 남자애를 좋아해요.. 그 여자애가 저를 좋아하도록 하는 물약은 없나요??",
            "image_path": "static/images/love/3.PNG"
        },
        {
            "name": "마녀",
            "text": "사랑의 물약 말씀하시는 거군요!! 당연히 있죠!! 지금부터 당신의 소원을 들어드릴 사랑의 물약을 만들어드릴게요!!",
            "image_path": "static/images/witch/1.PNG"
        }
    ],
    money: [
        {
            "name": "김지수",
            "text": "난 미림 마이스터고에 재학 중인 2학년이다. 이번에 작업 능률을 올리기 위해 무려 에어팟 맥스를 구입하려고 한다.. 허나 비싸기도 비싼데 난 지금 돈이 하나도 없다..부모님은 절대 사주실 마음이 없다고 하고 내 용돈을 모아 사려면 거진 1년을 굶고 다녀야한다 알바를 할까 생각하지만 빡센 학교 생활 탓에 알바할 시간과 체력도 없는 상태이다 어쩌면 좋지 생각하다가 소원을 들어주는 마녀의 물약 상점이 있다는 소식을 들어 방문하게 되었다. ",
            "image_path": "static/images/money/1.PNG"
        },
        {
            "name": "마녀",
            "text": "어서오세요! 어떤 소원으로 물약 상점에 오셨죠??.",
            "image_path": "static/images/witch/2.PNG"
        },
        {
            "name": "김지수",
            "text": "제가 진짜 갖고 싶은 물건이 있거든요…??? 당장 사고 싶은데 살 돈도 없고…당장 돈을 벌 여건도 안돼요ㅠㅠㅠ 진짜 꼬옥 갖고 싶은데 돈을 얻을 수 있는 물약이 없을까요??",
            "image_path": "static/images/money/3.PNG"
        },
        {
            "name": "마녀",
            "text": "부유의 물약 말씀하시는 거군요!! 당연히 있죠!! 지금부터 당신의 소원을 들어드릴 부유의 물약을 만들어드릴게요!!",
            "image_path": "static/images/witch/1.PNG"
        }
    ],
    intelligence: [
        {
            "name": "백예린",
            "text": "하… 내 내나이 21 남들은 한창 청춘을 즐길 때 난 독서실에 박혀 대학 입시를 준비 중이다.. 남들은 다 캠퍼스 라이프를 누린다던데..난 아직까지 고3생활에 막을 내리지 못하고 있다..아무리 열심히 공부를 해도 결과가 안나와서 스트레스를 받던 중 수능 전 날에 지푸라기라도 잡는 심정으로 소원을 들어준다는 마녀의 물약 상점이 있다고 들어 방문을 했다",
            "image_path": "static/images/study/1.PNG"
        },
        {
            "name": "마녀",
            "text": "어서오세요! 어떤 소원으로 물약 상점에 오셨죠??.",
            "image_path": "static/images/witch/2.PNG"
        },
        {
            "name": "백예린",
            "text": "저…내일이 당장 수능인데…진짜 답이 없어요 이번에는 대학 꼭 가야하는데ㅜㅜ 당장 똑똑해 질 수 있는 물약 없을까요???",
            "image_path": "static/images/study/3.PNG"
        },
        {
            "name": "마녀",
            "text": "지성의 물약 말씀하시는 거군요!! 당연히 있죠!! 지금부터 당신의 소원을 들어드릴 지성의 물약을 만들어드릴게요!!",
            "image_path": "static/images/witch/1.PNG"
        }
    ]
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const type = urlParams.get('type');

const dialogues = dialogueData[type];

let dialoguesCount = dialogues.length;
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
            clearInterval(textInterval); // 모든 텍스트가 표시되면 인터벌 중지
        }
    }, interval); // 한 글자씩 보여주는 시간 간격 (밀리초 단위)
}

function displayNextDialogue() {
    dialogueText.innerHTML = '';
    currentDialogueIndex++;
    if (currentDialogueIndex >= dialoguesCount) {
        window.open(`/making-potion?type=${type}`, '_top')
    }

    let dialogue = dialogues[currentDialogueIndex];
    dialogueName.textContent = dialogue.name;
    dialogueImage.src = dialogue.image_path;

    // 대화 텍스트를 한 글자씩 보여주는 애니메이션 호출
    displayTextAnimation(dialogue.text, 50);

    // 대화 텍스트가 모두 표시된 후에 자동으로 다음 대화 표시
    setTimeout(displayNextDialogue, dialogue.text.length * 50 + 1000); // 대화 텍스트 길이 * 간격 + 추가 시간
}

// 초기에는 첫 번째 대화를 표시
displayNextDialogue();