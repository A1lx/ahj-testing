export default function checkPaymentSystem() {
  const input = document.querySelector('.input');

  input.addEventListener('input', () => {
    const inputValueArr = [...input.value];
    const filters = [...document.querySelectorAll('.icon-filter')];
 
    if (inputValueArr[0] === '2') {
      //карты Мир
      for (let i = 0; i < filters.length; i++) {
        filters[i].classList.add('filter');
        filters[0].classList.remove('filter');
      }
    } else if (inputValueArr[0] === '5') {
      // карты Мастеркард
      for (let i = 0; i < filters.length; i++) {
        filters[i].classList.add('filter');
        filters[1].classList.remove('filter');
      }
    } else if (inputValueArr[0] === '4') {
      // карты Виза
      for (let i = 0; i < filters.length; i++) {
        filters[i].classList.add('filter');
        filters[2].classList.remove('filter');
      }
    } else if (inputValueArr[0] === '3') {
      // карты Американ-экспресс
      for (let i = 0; i < filters.length; i++) {
        filters[i].classList.add('filter');
        filters[3].classList.remove('filter');
      }
    } else {
      //все остальные
      for (let i = 0; i < filters.length; i++) {
        filters[i].classList.remove('filter');
      }
    }
  });
}