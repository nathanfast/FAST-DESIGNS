gsap.registerPlugin(ScrollTrigger, SplitText);

// document.getElementById("ptNext").addEventListener('click', () => {
//     if (postSwiper.isEnd) {
//         // go back to the first slide
//         postSwiper.slideTo(0);
//     } else {
//         // gopostSwiper postSwiperto the next slide
//         postSwiper.slideNext();
//     }
// })
// document.getElementById("ptPrev").addEventListener('click', () => {
//     if (postSwiper.isBeginning) {
//         // go back to the first slide
//         postSwiper.slideTo(postSwiper.slides.length - 1);
//     } else {
//         // gopostSwiper postSwiperto the next slide
//         postSwiper.slidePrev();
//     }
// })

const swiper = new Swiper('.swiper.posts_query-swiper', {
    slidesPerView: 1.1,
    spaceBetween: 16,
    grabCursor: true,
    breakpoints:{
        1441: {
            slidesPerView: 4.2
        },
        1024: {
            slidesPerView: 3.5
        }
    }
  });


  const postsSwiper = document.querySelectorAll(".posts_query-swiper")

  postsSwiper[0].addEventListener("pointerdown", () => {
    postsSwiper[0].classList.add("pointerdown")
  })
  postsSwiper[0].addEventListener("pointerup", () => {
    postsSwiper[0].classList.remove("pointerdown")
  })
  
// const postSwiper = new Swiper('.p_t-swiper', {
//     slidesPerView: 1,
//     grabCursor: true,
//     pagination: {
//         el: '.p_t-swiper_pagination',
//         type: 'bullets',
//         clickable: true,
//     },
//     nested: true
// });

ScrollTrigger.matchMedia({

    "(min-width: 992px)": function() {
        
        const triggerNav = document.querySelector(".alphamark_nav.not_fixed");
        const alphamarkNav = document.querySelector(".alphamark_nav:not(.not_fixed)");


        gsap.from(".loading_screen", {
            maxHeight: "100%",
            scrollTrigger: {
                trigger: "#smooth_content",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            }
        })


        // Options for the Intersection Observer
        const options = {
        root: null, // Use the viewport as the root
        rootMargin: '-32px', // No margin
        threshold: 0.5, // Trigger when at least 50% of the element is visible
        };

        // Callback function for the Intersection Observer
        const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            // Element is entering the viewport
            gsap.to(triggerNav, {
                visibility: "visible",
                duration: 0,
            }, "<")

            gsap.to(alphamarkNav, {
                display: "none",
                duration: 0,
            }, "<")

            gsap.to(".f_p-nml", {
                paddingTop: "16px",
                duration: 0,
            }, "<")
            } else {
            // Element is leaving the viewport
            gsap.to(triggerNav, {
                visibility: "hidden",
                duration: 0,
            }, "<")
            gsap.to(alphamarkNav, {
                display: "block",
                duration: 0,
            }, "<")
            gsap.to(".f_p-nml", {
                paddingTop: "8px",
                duration: 0,
            }, "<")
            }
        });
        };

        // Create an Intersection Observer instance
        const observer = new IntersectionObserver(callback, options);

        // Start observing the target element
        observer.observe(triggerNav);
    },
}); 
  

const homePageProjects = document.querySelectorAll('.home_page-project');

homePageProjects.forEach(project => {
    if(project.classList.contains("coming_soon")) {
        // Step 2: Create a new element with the desired tag
        project.removeAttribute("href");
        const newElement = document.createElement('div');

        // Step 3: Transfer attributes and content to the new element
        const attributes = Array.from(project.attributes);
        attributes.forEach((attr) => {
        newElement.setAttribute(attr.nodeName, attr.nodeValue);
        });

        newElement.innerHTML = project.innerHTML;

        // Step 4: Replace the original element with the new element
        project.replaceWith(newElement);
    }
})