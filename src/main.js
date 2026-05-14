const studyForm = document.getElementById('study-form');
const studyTitleInput = document.getElementById('study-title');
const studyTimeInput = document.getElementById('study-time');
const studyLogList = document.getElementById('study-log-list');
const totalStudyTime = document.getElementById('total-study-time');

const studyLogs = [];

function showEmptyMessage() {
    const emptyMessage = document.createElement('li');

    emptyMessage.textContent = 'まだ学習ログがありません。';

    emptyMessage.className = 'rounded border border-gray-200 p-3 text-gray-600';

    studyLogList.appendChild(emptyMessage);
}

function renderStudyLogs() {
    studyLogList.innerHTML = '';

    if (studyLogs.length === 0) {
        showEmptyMessage();
        return;
    }

    studyLogs.forEach(function (studyLog) {
        const studyLogItem = document.createElement('li');

        studyLogItem.textContent = studyLog.title + '：' + studyLog.time + '分';

        studyLogItem.className = 'rounded border border-gray-200 p-3 text-gray-700';

        studyLogList.appendChild(studyLogItem);
    });
}

function calculateTotalStudyTime() {
    let total = 0;

    studyLogs.forEach(function (studyLog) {
        total = total + Number(studyLog.time);
    });

    return total;
}

function renderTotalStudyTime() {
    const total = calculateTotalStudyTime();

    totalStudyTime.textContent = total + '分';
}

renderStudyLogs();
renderTotalStudyTime();

studyForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const studyTitle = studyTitleInput.value;
    const studyTime = studyTimeInput.value;

    const studyLog = {
        title: studyTitle,
        time: studyTime,
    };

    studyLogs.push(studyLog);

    renderStudyLogs();
    renderTotalStudyTime();

    studyTitleInput.value = '';
    studyTimeInput.value = '';
});
