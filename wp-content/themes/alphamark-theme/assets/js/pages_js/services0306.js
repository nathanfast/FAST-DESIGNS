

function randomStagger(number) {
    return Math.random() * number;
  }

    const dotBlink = gsap.timeline({repeat: -1})
    .to(".world_map-red_dot", {
        opacity: 1,
        duration: .2,
        stagger:  randomStagger(Math.random() * 0.5),
     })
    .to(".world_map-red_dot", {
        opacity: 0,
        duration: .2,
        stagger:  randomStagger(Math.random() * 0.5),
    })