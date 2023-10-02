gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrambleTextPlugin, CustomEase);


ScrollSmoother.create ({
    wrapper: "#smooth_wrapper",
    content: '#smooth_content',
    smooth: 1
})

window.addEventListener("load", () => {
    gsap.to(".loading_indicator", {
        opacity: 0,
        duration: 0.5,
        ease: 'expo.inOut',
        onComplete: () => {
            gsap.to(".loading_indicator", {
                display: "none",
                duration: 0,
            })
        }
    })
})

window.addEventListener('pageshow', () => {
    gsap.to(".loading_indicator", {
        opacity: 0,
        duration: .3,
        ease: 'power1.inOut',
        onComplete: () => {
            gsap.to(".loading_indicator", {
                display: "none",
                duration: 0,
            })
        }
    })
})

const links = document.querySelectorAll('a:not([target="_blank"])');

links.forEach(link => {
    link.addEventListener('click', event => {
        if(!link.classList.contains("stay")){
            event.preventDefault();
            const href = link.getAttribute('href');
            gsap.to(".loading_indicator", {
                display: "flex",
                duration: 0,                    
                onComplete: () => {
                    gsap.to(".loading_indicator", {
                        opacity: 1,
                        duration: 0.5,
                        ease: 'expo.inOut',
                    })
                }
            })
            setTimeout(() => { // wait for the transition to finish
                window.location.href = href;
            }, 1000); // adjust this delay to match your transition time
        }
    });
});



ScrollTrigger.matchMedia({
	
    "(min-width: 992px)": function() {

        const scrambleEls = document.querySelectorAll(".footer_link")

        scrambleEls.forEach(scrambleElement => {
            const originalText = scrambleElement.innerHTML
            scrambleElement.addEventListener("mouseenter", () => {
                gsap.to(scrambleElement, {
                    duration: 0.2,
                    scrambleText: {
                        text: originalText,
                        chars: originalText,
                        newClass: "gothic",
                        tweenLength: false,
                    }
                })
            })
            scrambleElement.addEventListener("mouseleave", () => {
                gsap.to(scrambleElement, {
                    duration: 0.2,
                    scrambleText: {
                        text: originalText,
                        chars: originalText,
                        tweenLength: false,
                    }
                })
            })
        })

    },
      
  });

const footer = document.querySelector("footer");
const belowFooter = document.querySelector(".below_footer")
const nav = document.querySelector("header");
let passedThreshold = false;


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            nav.style.transform = "translateY(-110%)";
            gsap.to(".scroll_to-top", {
                display: "flex",
                duration: .2,
                opacity: 1, 
                ease: "expo.out",
            })
        } else {
            if (entry.boundingClientRect.y > 0) {
                nav.style.transform = "translateY(0)";
                gsap.to(".scroll_to-top", {
                    display: "none",
                    duration: .2,
                    opacity: 0, 
                    ease: "expo.out",
                })
        }
    }
})
})

observer.observe(belowFooter)


const sct = document.querySelector(".scroll_to-top")
sct.addEventListener("click", () => {
    scrollTo(0, 0)
})



const filterButton = document.querySelectorAll('#filter')
const filterElements = document.querySelectorAll('#filterElement')
const currentFilter = document.getElementById("show-parent")
const filterLinks = document.querySelectorAll(".s_l-link")

filterButton.forEach(button => {

    button.addEventListener('click', () => {
        button.classList.toggle("expand")
        if(currentFilter){
            if(button.classList.contains("expand")) {
                currentFilter.classList.add("hide")
            } else {
                currentFilter.classList.remove("hide")
            }
        }

        filterElements.forEach(element => {
            element.classList.toggle("show")
        })
    })

    filterLinks.forEach(link => {
        link.addEventListener("click", () => {
            button.classList.toggle("expand")
            if(currentFilter){
                if(button.classList.contains("expand")) {
                    currentFilter.classList.add("hide")
                } else {
                    currentFilter.classList.remove("hide")
                }
            }

            filterElements.forEach(element => {
                element.classList.toggle("show")
            })
        })
    })
    
})



ScrollTrigger.matchMedia({
    
    "(min-width: 992px)": function() {
                ScrollTrigger.matchMedia({
                
                "(max-width: 1920px)": function() {
                    const stickyWrappers = document.querySelectorAll(".sticky_column");
                    
                    stickyWrappers.forEach(wrapper => {
                        const stickyElement = wrapper.querySelector(".sticky_element")
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


            },
            
        }); 
                    
    },
      
  }); 

	        

const dmLinks = document.querySelectorAll(".dm_link")
ScrollTrigger.matchMedia({
    "(min-width: 992px)": function() {
                
            dmLinks.forEach(link => {
                const linkText = link.querySelector(".dm_link-scramble")
                const initialLinkText = linkText.innerHTML
                
                link.addEventListener("mouseenter", () => {
                gsap.to(linkText, {
                    duration: 0.3,
                    scrambleText: {
                        text: initialLinkText,
                        chars: initialLinkText,
                        newClass: "dm_link-scramble-hover",
                    }
                })
                })
                link.addEventListener("mouseleave", () => {
                    gsap.to(linkText, {
                        duration: 0.3,
                        scrambleText: {
                            text: initialLinkText,
                            chars: initialLinkText,
                        }
                    })
                })
                
            })
},

});

const dmTopLinks = document.querySelectorAll(".dm_top-link")
ScrollTrigger.matchMedia({
    "(min-width: 992px)": function() {

        
        dmTopLinks.forEach(link => {
            const topLinkText = link.querySelector(".dm_top-link-scramble")
            const topLinkInitialText = topLinkText.innerHTML
            
            link.addEventListener("mouseenter", () => {
                gsap.to(topLinkText, {
                    duration: 0.3,
                    scrambleText: {
                        text: topLinkInitialText,
                        chars: topLinkInitialText,
                        newClass: "dm_top-link-scramble-hover",
                    }
                })
            })
            link.addEventListener("mouseleave", () => {
                gsap.to(topLinkText, {
                    duration: 0.3,
                    scrambleText: {
                        text: topLinkInitialText,
                        chars: topLinkInitialText,
                    }
                })
            })
            
        })

},

});


  const menuButtons = document.querySelectorAll('.menu_button');
  gsap.set(".dm_top-link", {
    y: "100%"
  })

  const desktopMenu = gsap.timeline({paused: true, reversed: true})
            .to(".desktop_menu", {
                padding: "24px 16px",
                duration: 0,
                duration: .4,
                ease: CustomEase.create("custom", "M0,0 C0,0 0.001,0.001 0.002,0.002 0.6,0.202 0.504,1 1,1 "),
            }, "<")
            .to(".d_m-content", {
                padding: "16px",
                duration: 0,
            }, "<")
            .fromTo(".desktop_menu", {
                height: "0vh",
            }, {
                height: "100vh",
                duration: .4,
                ease: CustomEase.create("custom", "M0,0 C0,0 0.001,0.001 0.002,0.002 0.6,0.202 0.504,1 1,1 "),
            },"<")
            .fromTo(".desktop_menu .header_lines.dm", {
                transform: "translateY(-100%)",
            }, {
                transform: "translateY(0%)",
                duration: .2,
                ease: "expo.inOut",
            }, "<")
            .from(".dm_close-icon-rect", {
                attr: {
                    x: -150,
                },
                duration: .4,
                ease: CustomEase.create("custom", "M0,0 C0,0 0.001,0.001 0.002,0.002 0.6,0.202 0.504,1 1,1 "),
            }, "<+=.15")
            .fromTo(".desktop_menu .header_lines.dm_bottom", {
                transform: "translateY(100%)",
            }, {
                transform: "translateY(0%)",
                duration: .2,
                ease: "expo.inOut",
            }, "<+=.3")
            .to(".d_m-content", {
                opacity: 1,
                duration: 0.3,
                ease: CustomEase.create("custom", "M0,0 C0,0 0.001,0.001 0.002,0.002 0.6,0.202 0.504,1 1,1 "),
            }, "<")
            .to(".dm_link", {
                y: 0,
                duration: 0.6,
                stagger: {
                    amount: .2
                },
                ease: "circ.inOut",
            }, "<")
            .from(".dm_link-wrap-contact a", {
                y: "110%",
                duration: 0.6,
                ease: "circ.inOut",
            }, "<")
            .to(".dmt_links-title", {
                y: 0,
                duration: 0.1,
                ease: "circ.inOut"
            }, "<")
            .to(".dm_link-top_wrap>*", {
                y: 0,
                stagger: {
                    amount: .2
                },
                duration: 0.3,
                ease: "circ.inOut"
            }, "<")
            .to(".dm_s-links>*", {
                y: "0%",
                duration: 0.4,
                stagger: {
                    amount: .2
                },
                ease: "circ.inOut"
            }, "<")

menuButtons.forEach(menuButton => {
    menuButton.addEventListener("click", () => {
        if(desktopMenu.reversed()) {
            desktopMenu.play();
        } else {
            desktopMenu.reverse();
        }
    })
})
const dmLogo = document.querySelector(".dm_logo svg")
dmLogo.addEventListener("click", () => {
    if(desktopMenu.reversed()) {
        desktopMenu.play();
    } else {
            desktopMenu.reverse();
    }
})
dmLinks.forEach(link => {
    link.addEventListener("click", () => {
        if(desktopMenu.reversed()) {
            desktopMenu.play();
        } else {
            desktopMenu.reverse();
        }
    })
})
dmTopLinks.forEach(link => {
    link.addEventListener("click", () => {
        if(desktopMenu.reversed()) {
            desktopMenu.play();
        } else {
            desktopMenu.reverse();
        }
    })
})

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        desktopMenu.reverse();
    }
  });

const belowFooterAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: ".below_footer",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
    }
})
.to(".a_m-i01", {
    x: "-20%",
    ease: "none"
}, "<")
.to(".a_m-i02", {
    x: "0%",
    ease: "none"
}, "<")
.to(".a_m-i03", {
    x: "-20%",
    ease: "none"
}, "<")




// Loading Follows Cursor
const loadingWrap = document.getElementById("alphamark_loading-wrap");

loadingWrap.addEventListener("mousemove", e => {
    var rect = loadingWrap.getBoundingClientRect();
    var x = e.clientX - rect.left
    var y = e.clientY - rect.top

    gsap.to(".loading_counter", {
        left: x,
        top: y,
        duration: 0.2,
    })

})



  // Loading Animation
  let once = sessionStorage.getItem("animation");
  const mainHeadlines = document.querySelectorAll(".main_headline")

  var headlineSplit = new SplitText(mainHeadlines, {
      type: "lines words",
      linesClass: "main_headline-lines",
      wordsClass: "main_headline-word",
  })
  
  gsap.set(headlineSplit.words, {
      y: "100%"
  })

      if(once == "played") {

        document.getElementById("alphamark_loading-wrap").remove();
        document.body.style.opacity = "1";
        document.body.style.overflowY = "visible";
        gsap.to(".loading_indicator", {
            opacity: 0,
            duration: 0.3,
            ease: 'expo.inOut',
            onComplete: () => {
                gsap.to(".loading_indicator", {
                    display: "none",
                    duration: 0,                    
                })
            }
        })
        gsap.to(".site_wrap", {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power4.inOut",
        })
        gsap.to(".main_headline-word", {
            y: 0,
            duration: .5,
            stagger: {
                amount: .09
            },
            ease: CustomEase.create("custom", "M0,0 C0.22,0.61 0.36,1 1,1 "),
            onComplete: () => {
                headlineSplit.revert();
            }
        }, "<+=.5")
    } else {        
        const mainLoadingAnimation = gsap.timeline()
        .to(".loading_indicator", {
            display: "none",
            duration: 0,                    
        })
        .to("body", {
            opacity: 1,
            duration: 0,
        })
        .to(".loading_progress", {
            width: "100%",
            duration: .75,
            ease: "circ.out",
            onComplete: () => {
                gsap.to(".alphamark_loading-wrap", {
                    height: 0,
                    duration: .75,
                    ease: "expo.inOut",
                    onComplete: () => {
                        document.getElementById("alphamark_loading-wrap").remove();
                        gsap.to(".loading_indicator", {
                            opacity: 0,
                            duration: 0.3,
                            ease: 'expo.inOut',
                            onComplete: () => {
                                gsap.to(".loading_indicator", {
                                    display: "none",
                                    duration: 0,                    
                                })
                            }
                        })
                        gsap.to(".site_wrap", {
                            scale: 1,
                            opacity: 1,
                            duration: .75,
                            ease: "power4.inOut",
                        }, "<-=0.3")
                        gsap.to(".main_headline-word", {
                            y: 0,
                            duration: .5,
                            stagger: {
                                amount: .09
                            },
                            ease: CustomEase.create("custom", "M0,0 C0.22,0.61 0.36,1 1,1 "),
                            onComplete: () => {
                                headlineSplit.revert();
                            }
                        }, "<+=.5")
                        gsap.to(".loading_logo", {
                            filter: "blur(0px)",
                            duration: 1.2,
                            ease: "power4.inOut"
                        })
                        gsap.to("body", {
                            overflowY: "visible",
                            duration: 0,
                        })
                    }
                })
            }
        })
    var Cont = { val: '000' },
    NewVal = 100;
    
    gsap.to(Cont, {
        val: NewVal,
        roundProps: "val",
        onUpdate: function () {
            document.getElementById("loading_counter").innerHTML = Cont.val;
        },
        duration: mainLoadingAnimation.duration()
    });
          
          
        sessionStorage.setItem("animation", "played");
    }


    

// Mobile Menu Animation

ScrollTrigger.matchMedia({
	
    "(max-width: 992px)": function() {

        const menuButton = document.getElementById("mobile_menu");

        const mobileMenuAnimation = gsap.timeline({paused: true, reversed: true})
        .to("body", {
            overflow: "hidden",
            duration: 0,
        })
        .to("header", {
            height: "100%",
            duration: 0,
        })
        .to(".alphamark_nav", {
            height: "100%",
            duration: 0,
        })
        .to(".mml1", {
            y: "2px",
            duration: 0.3,
            ease: "circ.inOut"
        }, "<")
        .to(".mml2", {
            y: "-2px",
            duration: 0.3,
            ease: "circ.inOut"
        }, "<")
        .to(".mobile_menu", {
            transform: "translate(3px, 8px)",
            duration: 0,
            ease: "none"
        })
        .to(".mobile_menu-content", {
            padding: "16px 8px",
            opacity: 1,
            duration: 0,
        })
        .to(".mobile_menu-content", {
            height: "100%",
            duration: .5,
            ease: CustomEase.create("custom", "M0,0 C0,0 0.001,0.001 0.002,0.002 0.6,0.202 0.504,1 1,1 "),
        }, "<-=.05")
        .to(".header_lines", {
            backgroundColor: menuButton.classList.contains('dark') ? "white" : "black",
            duration: 0.3,
            ease: "circ.inOut"
        }, "<-=.08")
        .fromTo(".header_lines.mmc", {
            transform: "translateY(100%)",
        }, {
            transform: "translateY(0%)",
            duration: 0.3,
            ease: "circ.inOut"
        })
        .to(".header_lines .line", {
            backgroundColor: menuButton.classList.contains('dark') ? "black" : "white",
            duration: 0.3,
            ease: "circ.inOut",
        }, "<")
        .to(".mml1", {
            backgroundColor: menuButton.classList.contains('dark') ? "black" : "white",
            y: "4px",
            rotate: "-45deg",
            duration: 0.3,
            ease: "circ.inOut"
        }, "<")
        .to(".mml2", {
            backgroundColor: menuButton.classList.contains('dark') ? "black" : "white",
            rotate: "45deg",
            duration: 0.3,
            ease: "circ.inOut"
        }, "<")
        .to(".front_page-logo", {
            paddingLeft: "8px",
            duration: 0.2,
        }, "<")
        .to("header", {
            mixBlendMode: "normal",
            duration: 0,
        }, "<")
        .to(".m_m-content", {
            height: "100%",
            padding: "110px 8px 0px 8px",
            duration: 0,
        }, "-=.45")
        .to(".m_m-content", {
            opacity: 1,
            duration: .5,
            ease: CustomEase.create("custom", "M0,0 C0,0 0.001,0.001 0.002,0.002 0.6,0.202 0.504,1 1,1 "),
        }, "<+.2")
        .to(".dm_link", {
            y: 0,
            duration: 0.6,
            stagger: {
                amount: .2
            },
            ease: "circ.inOut",
        }, "<-=.1")
        .to(".m_links .alphamark_link.big", {
            y: 0,
            duration: 0.6,
            ease: "circ.inOut",
        }, "<")

        menuButton.addEventListener("click", () => {

            if(mobileMenuAnimation.reversed()) {
                mobileMenuAnimation.play();
            } else {
                mobileMenuAnimation.reverse();
            }

        })
        
    },
      
  });


//   The Contact Button

const mainMediaQuery = window.matchMedia("(max-width: 992px)");
document.addEventListener("DOMContentLoaded", () => {
const scrollButton = document.querySelector('.the_contact_button');
const cookieContainer = document.getElementById("cookie-notice");

// Define the class name you're interested in
const targetClass = "cookie-notice-visible";

// Create a new MutationObserver instance
if(cookieContainer && scrollButton) {
    const observer = new MutationObserver(function (mutationsList, observer) {
        for (const mutation of mutationsList) {
            // Check if the mutation is an attribute change
            if (mutation.type === "attributes" && mutation.attributeName === "class") {
                // Check if the target class has been added
                if (mutation.target.classList.contains(targetClass)) {
                    if(mainMediaQuery.matches) {
                        scrollButton.style.bottom = `${cookieContainer.getBoundingClientRect().height + 24}px`;
                        scrollButton.style.opacity = 1;
                    } else {
                        scrollButton.style.bottom = `${cookieContainer.getBoundingClientRect().height + 16}px`;
                        scrollButton.style.opacity = 1;
                    }
                } else {
                    if(mainMediaQuery.matches) {
                        scrollButton.style.bottom = `24px`;
                        scrollButton.style.opacity = 1;
                    } else {
                        scrollButton.style.bottom = `16px`;
                        scrollButton.style.opacity = 1;
                    }
                }
            }
        }
    });
    
    // Configure the observer to watch for attribute changes
    const observerConfig = { attributes: true };
    
    // Start observing the target element
    observer.observe(cookieContainer, observerConfig);
} else if (scrollButton) {
    if(mainMediaQuery.matches) {
        scrollButton.style.bottom = `24px`;
        scrollButton.style.opacity = 1;
    } else {
        scrollButton.style.bottom = `16px`;
        scrollButton.style.opacity = 1;
    }
}


if(scrollButton) {
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const bottomThreshold = document.body.getBoundingClientRect().height - (window.innerHeight * 2.5); // 40vh from the bottom


    if(scrollPosition >= bottomThreshold) {
        gsap.to(".the_contact_button", {
            opacity: 0,
            onComplete: () => {
                scrollButton.style.visibility = "hidden";
            },
            duration: .2,
            ease: "power4.inOut",
        })
    } else {
        gsap.to(".the_contact_button", {
            visibility: "visible",
            opacity: 1,
            duration: .2,
            ease: "power4.inOut",
        })
    }
    
    
    });

}
    
})
