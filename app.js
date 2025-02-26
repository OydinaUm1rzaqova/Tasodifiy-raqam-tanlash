
const getRandomElement = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



const generate = () => {
    const minEl = document.getElementById('min');
    const maxEl = document.getElementById('max');
    const min = Number(minEl.value);
    const max = Number(maxEl.value);

    if (minEl.value === '' || maxEl.value === '') {
        alert('Iltimos bu yerga min va max qiymatlarini kiriting!');
        return;
    }

    if (min > max) {
        alert("min max dan kichik bo'lishi kerak!");
        return;
    }


    const placeholderEl = document.querySelector('#placeholder');
    placeholderEl.textContent = getRandomElement(min, max);
}



const btnEl = document.getElementById('generate');
btnEl.addEventListener('click', generate)