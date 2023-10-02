gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)





gsap.to('.icr_image', {
    clipPath: "inset(0% 0% 0% 0%)",
    duration: .5,
    ease: "power4.inOut",
    scrollTrigger: {
        trigger: ".icr_image",
        start: "bottom bottom",
    }
})


const swiper = new Swiper('.swiper', {
    loop: false,
    slidesPerView: 1,
    clickable: true,
    touchRatio: 0,
    speed: 0,
    enabled: false,
    on: {
        init: function () {
            var currentSlide = this.activeIndex + 1;
            document.getElementById("slideCountFollow").innerHTML = ( ' ' + currentSlide + '/' + this.slides.length);
        },
        tap: function () {
            if(this.isEnd) {
                this.slideTo(0);
            } else {
                this.slideNext();
            }
        },
        slideChange: function () {
                var currentSlide = this.activeIndex + 1;
                document.getElementById("slideCountFollow").innerHTML = ( ' ' + currentSlide + '/' + this.slides.length);
                if(swiper.isEnd) {
                    document.querySelector(".next_project").classList.add("show");
                    document.querySelector(".next_project-wrap").classList.add("show");
                } else {
                    document.querySelector(".next_project").classList.remove("show");
                    document.querySelector(".next_project-wrap").classList.remove("show");
                }
            }
        },
        breakpoints: {
            992: {
                enabled: true,
            }  
        }

  });



const cursor = document.querySelector('.swiper_follow-count--next');
const wrapper = document.querySelector('.swiper');

// Set up the mousemove event listener on the wrapper element
wrapper.addEventListener('mousemove', e => {
    var rect = wrapper.getBoundingClientRect();
    var relX = e.clientX - rect.left;
    var relY = e.clientY - rect.top;
  
  // Update the position of the cursor element to follow the mouse
  gsap.to(cursor, {
    x: relX,
    y: relY,
    duration: 0,
    ease: 'power2.out'
  });
});

gsap.set(".swiper_follow-count--next p, .swiper_follow-count--next span", {
    transform: "translateX(-100%)",
    opacity: 0,
})
const revealCountFollower = gsap.timeline({paused: true})
.to(".swiper_follow-count--next p, .swiper_follow-count--next span", {
    transform: "translateX(0%)",
    opacity: 1,
    duration: 0.3,
})

wrapper.addEventListener('mouseenter', () => {
    revealCountFollower.play()
});

wrapper.addEventListener('mouseleave', () => {
    revealCountFollower.reverse()
});

const postSwiper = new Swiper('.s_p-content-swiper', {
    slidesPerView: 1.2,
    grabCursor: true,
    spaceBetween: 8,
    centeredSlides: true,
    loop: true,
    on: {
        init: function () {
            var currentSlide = this.realIndex + 1;
            document.getElementById("spc_swiper-counter").innerHTML = ( ' ' + currentSlide + '/' + this.slides.length);
          },
        slideChange: function () {
            var currentSlide = this.realIndex + 1;
            document.getElementById("spc_swiper-counter").innerHTML = ( ' ' + currentSlide + '/' + this.slides.length);
        }
      },
      breakpoints: {
        // when window width is >= 320px
        992: {
            slidesPerView: 2,
            grabCursor: true,
            spaceBetween: 16,
        },
    },
});


var revealAnimDone = false;
gsap.set(".swiper-slide-active .s_p-swiper_figure img", {
    scale: 2,
    transformOrigin: "center",
}, "-=.2")
const revealSP = gsap.timeline()
.to(".project_thumbnail-slider .rcv", {
    height : "0",
    duration: 1.5,
    ease: "power4.out"
})
.to(".s_p-swiper_figure img", {
    scale: 1,
    duration: 1.5,
    ease: "expo.out"
}, "<")
.to(".single-project_details-p span", {
    y: 0,
    duration: 0.8,
    ease: CustomEase.create("custom", "M0,0 C0.22,0.61 0.36,1 1,1 "),
}, "<+=0.5")
.to(".pt", {
    y: 0,
    duration: 0.8,
    ease: CustomEase.create("custom", "M0,0 C0.22,0.61 0.36,1 1,1 "),
}, "<")
.to(".project_title", {
    overflow: "visible",
    duration: 0,
    onComplete: () => {
        revealAnimDone = true;
    }
})

gsap.set(".swiper", {
    scale: 1.08,
})
gsap.to(".swiper", {
    scale: 1,
    scrollTrigger: {
        trigger: ".swiper",
        start: "top center",
        end: "bottom center",
        scrub: 1,
    },
})


ScrollTrigger.matchMedia({
	
    "(min-width: 992px)": function() {

        
        const sph = document.querySelector(".project_title .pt")
        const sphOldLocation = document.querySelector(".project_title")
        const sphNewLocation = document.getElementById("new_menu_title")
        
        
        function appendSph() {
            if(revealAnimDone === true) {
                const sphState = Flip.getState(sph, {props: "fontSize, lineHeight"})
                sphNewLocation.append(sph)
                
                Flip.from(sphState, {
                    duration: 0.5,
                    absolute: true,
                })
            }
        }
        
        function reverseSph() {
                if(revealAnimDone === true) {
                const sphState = Flip.getState(sph, {props: "fontSize, lineHeight,letterSpacing"})
                sphOldLocation.append(sph)
                
                Flip.from(sphState, {
                    duration: 0.3,
                    absolute: true,
                })
            }
        }
    
                ScrollTrigger.create({
                    trigger: ".project_title",
                    start: "-100px top",
                    onEnter: appendSph,
                    onLeaveBack: reverseSph,
                });

            },      
  }); 

  const sctSP = document.querySelector('.sp_sct');

  sctSP.addEventListener("click", () => {
    window.scrollTo(0, 0)
  })
  
  var previousScrollPosition = 0;
window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  
  var distanceFromBottom = documentHeight - (scrollPosition + window.innerHeight);

  if (scrollPosition > (window.innerHeight * 4) && scrollPosition < previousScrollPosition && distanceFromBottom > (window.innerHeight * 4)) {
    sctSP.classList.add("show")
  } else {
    sctSP.classList.remove("show")
  }

  previousScrollPosition = scrollPosition;
});


const inContentFigures = document.querySelectorAll('.in_content-figure')

inContentFigures.forEach(figure => {

    const image = figure.querySelector('img')
    const imageBG = figure.querySelector(".in_content-img_bg")

    gsap.set(image, {
        scale: 1.5
    })

    const inContentImageReveal = gsap.timeline({
        scrollTrigger: {
            trigger: figure,
            start: "top 80%",
        }
    })
    .to(imageBG, {
        height : "0",
        duration: 1.5,
        ease: "power4.out"
    })
    .to(image, {
        scale: 1,
        duration: 1.5,
        ease: "expo.out"    
    }, "<")
    
})
