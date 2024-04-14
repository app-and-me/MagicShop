const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const type = urlParams.get('type');
const isSuccess = Boolean(urlParams.get('isSuccess'));


const potionImg = document.querySelector('.potion-img');
const progress = document.querySelector('.progress');
const label = document.querySelector('.label');
let progressValue = 0;

if (type === 'love') {
    potionImg.src = 'static/images/love/potion.PNG';
} else if (type === 'money') {
    potionImg.src = 'static/images/money/potion.PNG';
} else if (type === 'intelligence') {
    potionImg.src = 'static/images/study/potion.PNG';
}

const updateProgress = setInterval(() => {
    const randomProgress = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    progressValue += randomProgress;
    if (progressValue > 100) progressValue = 100;
    progress.innerHTML = progressValue + "%";


    if (progressValue === 100) stopPreogress();
}, 1000);

const stopPreogress = () => {
    label.innerHTML = '추출 완료!'
    progress.innerHTML = '디스펜서에서 나오는 물약을 마시고, 이미지를 클릭하세요.'
    clearInterval(updateProgress);
}

potionImg.addEventListener('click', () => {
    // 100%가 아닐 땐 클릭이벤트 없음
    if (progressValue !== 100) return;

    window.open(`/ending?type=${type}&isSuccess=${isSuccess}`, '_top');
})