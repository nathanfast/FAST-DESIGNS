const parentCategories = document.querySelectorAll(".cat_button")
const childCategories = document.querySelectorAll(".children_categories-wrap");
const currentParentShow = document.getElementById("show-parent");

var cpString = "";
var currentParent = "";

var mediaQuery = window.matchMedia("(max-width: 992px)")


document.addEventListener("DOMContentLoaded", () => {
    if(sessionStorage.getItem("currentParent") === null) {
        sessionStorage.setItem("currentParent", 'by-expertise')
        var currentParent = sessionStorage.getItem("currentParent");
    } else {
        var currentParent = sessionStorage.getItem("currentParent");
    }

    childCategories.forEach(child => {

        const showChildrenTimeline = gsap.timeline({paused: true})
        .to(child, {
            display: 'inline-flex',
            duration: 0
        })
        .to(child.querySelectorAll("h5"), {
            y: "0%",
            stagger: 0.035,
            duration: 0.15,
            ease: "power2.inOut"
        })
        const hideChildrenTimeline = gsap.timeline({paused: true})
        .to(child.querySelectorAll("h5"), {
            y: "130%",
            stagger: 0.035,
            duration: 0.15,
            ease: "power2.inOut"
        })
        .to(child, {
            display: 'none',
            duration: 0
        })

        if(child.getAttribute("data-category") === currentParent) {
            showChildrenTimeline.play();
            child.classList.add("first_active");
        } else {
            hideChildrenTimeline.play();
            child.classList.remove("first_active");
        }
        
    });

    
    
    if( currentParent === 'by-expertise') {
        cpString = "(By Expertise)";
    } else if( currentParent === 'by-industry' ) {
        cpString = "(By Industry)";
    } else if ( currentParent === 'by-location' ) {
        cpString = "(By Location)";
    }

    currentParentShow.innerHTML= cpString;

})



parentCategories.forEach(button => {

    button.addEventListener("click", () => {

        var attr = button.getAttribute("data-category");
        sessionStorage.setItem("currentParent", attr);

        currentParent = sessionStorage.getItem("currentParent");

        childCategories.forEach(child => {

            const showChildrenTimeline = gsap.timeline({paused: true})
            .to(child, {
                display: 'inline-flex',
                duration: 0
            })
            .to(child.querySelectorAll("h5"), {
                y: "0%",
                stagger: 0.05,
                duration: 0.25,
                ease: "power4.Out"
            })
            const hideChildrenTimeline = gsap.timeline({paused: true})
            // if(mediaQuery.matches) {
                hideChildrenTimeline.to(child.querySelectorAll("h5"), {
                    y: "130%",
                    stagger: 0,
                    duration: 0,
                    ease: "power4.Out"
                })
                hideChildrenTimeline.to(child, {
                    display: 'none',
                    duration: 0
            })
            // } else {
            //     hideChildrenTimeline.to(child.querySelectorAll("h5"), {
            //         y: "130%",
            //         stagger: 0.05,
            //         duration: 0.25,
            //         ease: "power4.Out"
            //     })
            //     hideChildrenTimeline.to(child, {
            //         display: 'none',
            //         duration: 0
            //     })
            // }

            if(child.getAttribute("data-category") === currentParent) {
                showChildrenTimeline.play();
            } else {
                hideChildrenTimeline.play();
            }
            
        });
        
        if( currentParent === 'by-expertise') {
            cpString = "(By Expertise)";
        } else if( currentParent === 'by-industry' ) {
            cpString = "(By Industry)";
        } else if ( currentParent === 'by-location' ) {
            cpString = "(By Location)";
        }

        currentParentShow.innerHTML= cpString;
        
    })
})



const displayButtons = document.querySelectorAll(".display_mode-button");
const displaySections = document.querySelectorAll(".projects_section");

displayButtons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonAttr = button.getAttribute("data-mode");
        displayButtons.forEach(button => {
            if(button.classList.contains("active")) {
                button.classList.remove("active");
            }
        })
        button.classList.add("active");
        displaySections.forEach(section => {
            const sectionAttr = section.getAttribute("data-section-mode");

            if(buttonAttr === sectionAttr) {
                section.classList.add("shown")
                const showSection = gsap.timeline()
                    .to(section, {
                        display: "block",
                        duration: 0,
                    })
                    .to(section, {
                        scale: 1,
                        opacity: 1,
                        duration: 1,
                        ease: "power4.inOut",
                    })
            } else {
                section.classList.remove("shown")
                const hideSection = gsap.timeline()
                .to(section, {
                    display: "none",
                    duration: 0,
                })
                .to(section, {
                    scale: 0.98,
                    opacity: 0,
                    duration: 1,
                    ease: "power4.inOut",
                })
            }
        })

    })
})

document.addEventListener("DOMContentLoaded", () => {
    displaySections.forEach(section => {
        if(section.classList.contains("shown")) {
            section.classList.add("shown")
            const showSection = gsap.timeline()
                .to(section, {
                    display: "block",
                    duration: 0,
                })
                .to(section, {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: "power4.inOut",
                })
        }
    })
})

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

const listProjects = document.querySelectorAll('.archive_project');

listProjects.forEach(project => {
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