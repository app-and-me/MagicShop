let things = [
    {
        "img_path": "/images/things/1.png",
        "name": "은행 껍질",
        "desc": "가을철 냄새의 원흉 하지만 맛은 꽤 좋을지도?"
    },
    {
        "img_path": "/images/things/2.png",
        "name": "돼지 머리",
        "desc": "핑크색 돼지 머리다."
    },
    {
        "img_path": "/images/things/3.png",
        "name": "백조의 심장",
        "desc": "하얀 백조의 심장이다. 깃털의 모양이 우아하다."
    },
    {
        "img_path": "/images/things/4.png",
        "name": "연필가루",
        "desc": "연필가루 한줌. 먹어도 되는걸까?"
    },
    {
        "img_path": "/images/things/5.png",
        "name": "해바라기",
        "desc": "해바라기다. 부동산에서 많이 본 것 같기도?"
    },
    {
        "img_path": "/images/things/6.png",
        "name": "마네키네코",
        "desc": "노란색 마네키네코다. 노란색 마네키네코의 의미가 무엇일까?"
    },
    {
        "img_path": "/images/things/7.png",
        "name": "장미 꽃잎",
        "desc": "사랑의 대명사인 장미의 꽃잎, 과연 사랑이 이루어질까?"
    },
    {
        "img_path": "/images/things/8.png",
        "name": "고양이모양 식빵",
        "desc": "주머니에서 미래의 물건을 꺼낼 것 같은 고양이 모양 식빵이다."
    },
    {
        "img_path": "/images/things/9.png",
        "name": "복숭아 씨앗",
        "desc": "복숭아의 씨앗이다. 영험한 효능이 있다고 한다."
    },
    {
        "img_path": "/images/things/10.png",
        "name": "포도주",
        "desc": "예로부터 유흥과 향락의 상징이었다. 피처럼 붉은 색이다."
    },
    {
        "img_path": "/images/things/11.png",
        "name": "대용량 상자",
        "desc": "엄청 큰 상자다. 넣어도 넣어도 가득 차질 않아!"
    },
    {
        "img_path": "/images/things/12.png",
        "name": "전교 1등의 안경",
        "desc": "전교 1등의 안경이다. 보기만 해도 똑똑해지는 기분이 든다."
    },
]

let container = document.querySelector('.container.things');
let desk = document.querySelector('.desk');
let deskItems = []; // 이미 desk에 있는 아이템의 인덱스를 저장하는 배열

things.forEach((item, index) => {
    let itemDiv = document.createElement('div');
    itemDiv.classList.add('thing');
    itemDiv.classList.add(`thing-${index}`);

    let img = document.createElement('img');
    img.classList.add('thing-img');
    img.src = `static/${item.img_path}`;

    let name = document.createElement('p');
    name.classList.add('name');
    name.textContent = item.name;

    let desc = document.createElement('p');
    desc.classList.add('desc');
    desc.textContent = item.desc;

    itemDiv.appendChild(img);
    itemDiv.appendChild(name);
    itemDiv.appendChild(desc);

    container.appendChild(itemDiv);

    itemDiv.addEventListener('click', () => {
        // 이미 desk에 있는지 여부 확인
        if (!deskItems.includes(index) && deskItems.length < 4) {
            itemDiv.style.opacity = '0';
            let deskItem = document.getElementsByClassName('desk-item')[deskItems.length];
            deskItem.appendChild(img.cloneNode(true)); // 클론 노드를 추가하여 원본 아이템 유지
            deskItems.push(index); // desk에 추가된 아이템의 인덱스 저장
            console.log('click');
        }
    });
});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const type = urlParams.get('type');

const nextButton = document.getElementById('next-button');
nextButton.addEventListener('click', () => {
    if (deskItems.length < 4) {
        alert('재료를 총 4개 선택해야 만들 수 있어요!');
    } else if (deskItems.includes(2) && deskItems.includes(6) && deskItems.includes(8) && deskItems.includes(9) && type === 'love') {
        window.open('/success?type=love', '_top');
    } else if (deskItems.includes(0) && deskItems.includes(1) && deskItems.includes(4) && deskItems.includes(5) && type === 'money') {
        window.open('/success?type=money', '_top');
    } else if (deskItems.includes(3) && deskItems.includes(7) && deskItems.includes(10) && deskItems.includes(11) && type === 'intelligence') {
        window.open('/success?type=intelligence', '_top');
    } else {
        window.open('/fail', '_top');
    }
})