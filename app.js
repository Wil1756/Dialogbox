const closeBtn = document.getElementById('close');
const popupMenu = document.getElementById('popup');
const popupBtn = document.querySelector('.popup__button');


setTimeout(() => {
    popupMenu.classList.add('show');
}, 1000);

closeBtn.addEventListener('click', () => {
    popupMenu.classList.remove('show')
})

popupBtn.addEventListener.classList.remove('click', () => {
    popupMenu.classList.remove('show')
})