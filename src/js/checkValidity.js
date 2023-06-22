import luhnAlgorithm from "./luhnAlgorithm";

export default function checkValidity() {
  const input = document.querySelector('.input');
  const container = document.querySelector('.container');
  const btn = document.querySelector('.submit');

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const reportBx = document.querySelector('.report-box');

    if (reportBx) {
      reportBx.remove();
    }
  
    const reportBox = document.createElement('div');
    reportBox.classList.add('report-box');
  
    if (luhnAlgorithm(input.value)) {
      reportBox.innerHTML = `
      <span class="valid-success">Номер карты прошел валидацию</span>
      `;
      container.appendChild(reportBox);
    } else {
      reportBox.innerHTML = `
      <span class="valid-failed">Номер карты не прошел валидацию</span>
      `;
      container.appendChild(reportBox);
    }
  });
}