let button = document.querySelector(".main-action .button");
let carName = document.querySelectorAll(".price-form .price-input")[2];
let orderCar = document.querySelector(".price-form .button");

button.addEventListener("click", () => {cars.scrollIntoView({behavior:"smooth"});});
let buttons = document.querySelectorAll(".car-item-action .button");

for(let butt of buttons){
    butt.addEventListener("click", () => {price.scrollIntoView({behavior:"smooth"});
        carName.value = butt.parentElement.parentElement.children[1].textContent;
    });
}

orderCar.addEventListener("click", () => {
    for (let field of orderCar.parentElement.children){
        if(field.value===''){alert("Заполните поле "+field.placeholder);
            return;}
    }
    alert("Заявка отправлена");
});

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.9) / 9) + 'px,' + ((event.clientY * 0.9) / 9) + 'px,0px)';
    });
    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.7 * window.scrollY) + 'px';
    })
});