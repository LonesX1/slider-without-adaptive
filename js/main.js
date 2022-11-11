const first = document.getElementById('first-slide');
const second = document.getElementById('second-slide');

const nextSlide = document.querySelector('.next-slide');

nextSlide.onclick = function() {
    if (first.className != 'first') {
        first.className = 'first';
        second.className = 'second';
    } else if (second.className === 'second') {
        first.classList.remove('first')
        second.classList.remove('second')
    }
}