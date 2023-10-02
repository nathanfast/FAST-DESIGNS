const postSwiper = new Swiper('.p_t-swiper', {
    slidesPerView: 1,
    grabCursor: true,
    pagination: {
        el: '.p_t-swiper_pagination',
        type: 'bullets',
        clickable: true,
    },
    nested: true
});

document.getElementById("ptNext").addEventListener('click', () => {
    if (postSwiper.isEnd) {
        // go back to the first slide
        postSwiper.slideTo(0);
    } else {
        // gopostSwiper postSwiperto the next slide
        postSwiper.slideNext();
    }
})
document.getElementById("ptPrev").addEventListener('click', () => {
    if (postSwiper.isBeginning) {
        // go back to the first slide
        postSwiper.slideTo(postSwiper.slides.length - 1);
    } else {
        // gopostSwiper postSwiperto the next slide
        postSwiper.slidePrev();
    }
})