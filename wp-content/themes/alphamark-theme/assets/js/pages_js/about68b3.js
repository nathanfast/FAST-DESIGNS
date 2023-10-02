gsap.registerPlugin(ScrollTrigger)

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


const HeadlineSentences = document.querySelectorAll(".industry_inline")

HeadlineSentences.forEach(sentence => {

    const imageFollower = sentence.querySelector(".industry_inline-img")

    sentence.addEventListener("mousemove", (e) => {
        var rect = sentence.getBoundingClientRect();
        var relX = e.clientX - rect.left;
        
        gsap.to(imageFollower, {
            duration: 0, 
            x: relX, 
            ease: "none"
        });
    })

})

const recognitionImages = document.querySelectorAll(".p_r-figure");
const recognitionLinks = document.querySelectorAll(".project_recognition-wrap");

recognitionLinks.forEach(link => {

    
    link.addEventListener("mouseenter", () => {

        var attr = link.getAttribute("data-recognition");

        recognitionImages.forEach(image => {

            if(image.getAttribute("data-recognition") === attr) {
                image.classList.add("show");
            } else {
                image.classList.remove("show")
            }

        })

    })
    
    link.addEventListener("mouseleave", () => {

        recognitionImages.forEach(image => {
                image.classList.remove("show")
        })

    });

})


const heroImage = document.querySelector('.a_u-image')

gsap.set(heroImage, {
    scale: 1.08
})

gsap.to(heroImage, {
    scale: 1,
    scrollTrigger: {
        trigger: ".about_us-image",
        start: "top 50%",
        end: "bottom 30%",
        scrub: true,
    }
})


const stickyWrappers = document.querySelectorAll(".sticky_column-about");

stickyWrappers.forEach(wrapper => {
    const stickyElement = wrapper.querySelector(".sticky_element-about")
    var scrubHeight = wrapper.getBoundingClientRect().height - stickyElement.getBoundingClientRect().height
    
    gsap.to(stickyElement, {
        top: "100%",
        y: "-100%",
        ease: "none",
        scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: `${scrubHeight} top`,
            scrub: true,
        }
    })
    
})