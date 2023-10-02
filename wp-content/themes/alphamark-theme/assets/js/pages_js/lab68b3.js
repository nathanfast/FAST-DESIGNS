
const scrollableElement = document.querySelector(".scrollable-element")
const scrollable = document.querySelector('.js-loop')
let done = false

let target = 1
let reverse = false

var x = window.matchMedia("(min-width: 992px)")

    
function scroll() {
  if(!done) {
    target = scrollableElement.scrollTop
    
    
      if(target <= 0) {
        target = (scrollableElement.offsetHeight * 2) - 1
        scrollableElement.scrollTo({
          top: target,
          left: 0,
          behavior: 'instant'
        })
      } else if( target >= scrollableElement.offsetHeight * 2) {
        target = 1
        scrollableElement.scrollTo({
          top: target,
          left: 0,
          behavior: 'instant'
        })
      }


        if(reverse) {
          target--;
        } else {
          target++;
        }
    
    var prevScrollpos = scrollableElement.scrollTop;
    scrollableElement.addEventListener("scroll", () => {
      var currentScrollPos = scrollableElement.scrollTop;
      if (prevScrollpos > currentScrollPos) {
        reverse = true;
      } else {
        reverse = false;
      }
      prevScrollpos = currentScrollPos;
    })
    scrollableElement.scrollTo({
      top: target,
      left: 0,
      behavior: 'instant'
    })
    
    requestAnimationFrame(scroll);
  }
}


if(!done) {
  document.addEventListener("DOMContentLoaded", scroll);
  setTimeout(() => {
      window.scrollTo(0, 1);
  }, 200)
}

if(x.matches) {
  const movableElements = document.querySelectorAll('.gallery-img-figure');
  const movableElementWrap = document.querySelector(".content")

  movableElementWrap.addEventListener("mousemove", (e) => {
    movableElements.forEach(movableElement => {

      const  shiftValue = movableElement.getAttribute('data-value');
      const moveX = (e.clientX * shiftValue) / 100;
      const moveY = (e.clientY * shiftValue) / 100;
    
      gsap.to(movableElement, {
        x: `-${moveX}`,
        y: `-${moveY}`,
        duration: 1,
      })

    });
  })
}


document.addEventListener("DOMContentLoaded", () => {
  gsap.to(".letter-wrap span", {y: 0, duration: 1.5, stagger: 0.01, ease: Expo.easeInOut})
  gsap.to(".gallery-wrap figure>img", {y:0, duration: 1.5, ease: Expo.easeInOut})
})

    