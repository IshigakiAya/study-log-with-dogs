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

    studyLogs.forEach(function (studyLog, index) {
        const studyLogItem = document.createElement('li');

        studyLogItem.textContent = studyLog.title + '：' + studyLog.time + '分';

        studyLogItem.className = 'flex items-center justify-between rounded border border-gray-200 p-3 text-gray-700';

        const deleteButton = document.createElement('button');

        deleteButton.textContent = '削除';

        deleteButton.className = 'ml-4 rounded bg-red-500 px-2 py-1 text-sm text-white transition hover:bg-red-400';

        deleteButton.addEventListener('click', function () {
            studyLogs.splice(index, 1);

            renderStudyLogs();
            renderTotalStudyTime();
        });

        studyLogItem.appendChild(deleteButton);

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
