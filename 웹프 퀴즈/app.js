const a = document.getElementById('inuButton').addEventListener('click', () => {
    fetch('http://localhost:3000/web')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        }).then(data => {
            // id 필드를 제거한 데이터로 변환
            const cleanedData = data.map(({ id, ...rest }) => rest);

            // 변환된 데이터를 localStorage에 저장
            localStorage.setItem('webData', JSON.stringify(cleanedData));

            // 데이터를 화면에 출력
            displayData(cleanedData);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
});
function displayData(data) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    data.forEach(item => {
        const p = document.createElement('p');
        p.textContent = JSON.stringify(item);
        outputDiv.appendChild(p);
    });
}
