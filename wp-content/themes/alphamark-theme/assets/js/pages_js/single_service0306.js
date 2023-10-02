gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)

function handleScroll() {
    if (window.scrollY >= 100) {
      document.querySelector(".scroll_down-wrap").style.opacity = "0"
    } else {
      document.querySelector(".scroll_down-wrap").style.opacity = "1"
    }
  }
  window.addEventListener('scroll', handleScroll);

  const tSwiper = new Swiper('.testimonials_swiper', {
    slidesPerView: 1,
    grabCursor: true,
    simulateTouch: true,
    on: {
        init: function () {
            var currentSlide = this.activeIndex + 1;
            document.getElementById("t_s-count").innerHTML = ( '0' + currentSlide + ' ▪ 0' + this.slides.length);
          },
        slideChange: function () {
            var currentSlide = this.activeIndex + 1;
            document.getElementById("t_s-count").innerHTML = ( '0' + currentSlide + ' ▪ 0' + this.slides.length);
        }
      }
  });

  const tsButtonLeft = document.getElementById("t_s-left");
  const tsButtonRight = document.getElementById("t_s-right");

    tsButtonRight.addEventListener("click", () => {
        if(tSwiper.isEnd) {
            tSwiper.slideTo(0);
        } else {
            tSwiper.slideNext();
        }
    })
    tsButtonLeft.addEventListener("click", () => {
        if(tSwiper.isBeginning) {
            tSwiper.slideTo(tSwiper.slides.length - 1);
        } else {
            tSwiper.slidePrev();
        }
    })
    
ScrollTrigger.matchMedia({

"(min-width: 992px)": function() {
    const changingSentencesAnim = gsap.timeline({
        scrollTrigger: {
            trigger: ".changing_sentences-container",
            start: "bottom bottom",
            pin: true,
            pinSpacing: true,
            scrub: 1,
        }
    })
            .to(".changing-sentence1", {
                y: "-120%",
            })
            .to(".changing-sentence2", {
                y: "0%",
            }, "<")
            .to(".changing-sentence2", {
                y: "-120%",
            })
            .to(".changing-sentence3", {
                y: "0%",
            }, "<")


            
        },
        
    }); 
    gsap.to(".website_images-wrap", {
        x: "-20%",
        scrollTrigger: {
            trigger: ".web_slider",
            start: "50px bottom",
            end: "bottom top",
            scrub: true,
        }
    })
const expandingImageTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".image_container",
        start: "center bottom",
        end: "top top",
        scrub: 1,
    }
})
.to(".e_i-wrap", {
    clipPath: "inset(0% 0%)",
    duration: 0.5
})
.to(".expanding_image", {
    scale: 1,
    duration: 0.5
}, "<")


const designUsabilityAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: ".design--usability-section",
        start: "center bottom",
        end: "bottom bottom",
        scrub: 2,
    }
})
    .to(".design", {
        x: "0vh"
    })
    .to(".usability", {
        x: "0vh",
    }, "<")
    

    var revealAnimDone = false;
    const revealSP = gsap.timeline()
    .to(".pt", {
        y: 0,
        duration: 0.8,
        delay: .5,
        ease: CustomEase.create("custom", "M0,0 C0.22,0.61 0.36,1 1,1 "),
        onComplete: () => {
            console.log(revealAnimDone)
        }

    })
    .to(".project_title", {
        overflow: "visible",
        duration: 0,
        onComplete: () => {
            revealAnimDone = true;

            setTimeout(() => {
                console.log(revealAnimDone)
            }, 1000)

        }
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
                        const sphState = Flip.getState(sph, {props: "fontSize, lineHeight, letterSpacing"})
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