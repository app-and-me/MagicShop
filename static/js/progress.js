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

    if (progressValue === 100) stopProgress();
}, 1000);

const stopProgress = () => {
    label.innerHTML = '추출 완료!';
    progress.innerHTML = '디스펜서에서 나오는 물약을 마시고, 이미지를 클릭하세요.';
    clearInterval(updateProgress);

    // progress가 100%가 되었을 때 서버에 신호를 보냅니다.
    fetch('/trigger', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({trigger: true})
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.status); // 성공 메시지 출력
    })
    .catch(error => console.error('Error:', error));
}

potionImg.addEventListener('click', () => {
    // 100%가 아닐 땐 클릭이벤트 없음
    if (progressValue !== 100) return;

    window.open(`/ending?type=${type}&isSuccess=${isSuccess}`, '_top');
});
