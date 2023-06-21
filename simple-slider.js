const nextButton = document.querySelector('.ad__btn--next');
const prevButton = document.querySelector('.ad__btn--prev');
const cards = document.querySelectorAll('.slide');
const lastCardIndex = cards.length -1;
let visibleCardIndex = 0;


nextButton.addEventListener("click", ()=>{
    let hiddenCardIndex = visibleCardIndex+1;

    let visibleCard = cards[visibleCardIndex]; // получаем левую карточку
    let hiddenCard = cards[hiddenCardIndex]; // получаем правую карточку
    visibleCard.classList.toggle("hidden"); // скрываем левую карточку
    hiddenCard.classList.toggle("hidden"); // показываем правую карточку


    // обновляем индекс левой карточки 
    if (hiddenCardIndex === lastCardIndex) {
       nextButton.setAttribute("disabled","true");
    } 
    prevButton.removeAttribute("disabled");
    visibleCardIndex++
});

prevButton.addEventListener("click", ()=>{
    let hiddenCardIndex = visibleCardIndex-1;

    let visibleCard = cards[visibleCardIndex]; // получаем левую карточку
    let hiddenCard = cards[hiddenCardIndex]; // получаем правую карточку
    visibleCard.classList.toggle("hidden"); // скрываем левую карточку
    hiddenCard.classList.toggle("hidden"); // показываем правую карточку


    // обновляем индекс левой карточки 
    if (hiddenCardIndex === 0) {
       prevButton.setAttribute("disabled","true");
    } 
    nextButton.removeAttribute("disabled");
    visibleCardIndex--; 
});