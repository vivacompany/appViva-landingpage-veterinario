
// animacao ao scroll da pagina
const landingpage = document.getElementById('landingpage');
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

const debounce = (func, wait, imediate) => {
    let timeout;

    return (...args) => {
        const contect = this;
        const later = () => {
            timeout = null;
            if(imediate) func.apply(context, args);
        };

        const callNow = imediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if(callNow) func.apply(context, args);
    }
}


function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3.2);
    target.forEach( (element) => {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if(target.length) {
    window.addEventListener('scroll', () => {
        animeScroll();
    })
}

const heightpage = window.pageYOffset + ((window.innerHeight));

console.log(heightpage);

landingpage.style.height = heightpage+'px';