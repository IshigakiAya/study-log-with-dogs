const studyForm = document.getElementById('study-form');
const studyTitleInput = document.getElementById('study-title');
const studyTimeInput = document.getElementById('study-time');

const studyLogs = [];

studyForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const studyTitle = studyTitleInput.value;
    const studyTime = studyTimeInput.value;

    const studyLog = {
        title: studyTitle,
        time: studyTime,
    };

    studyLogs.push(studyLog);

    console.log(studyLogs);

    studyTitleInput.value = '';
    studyTimeInput.value = '';
});
