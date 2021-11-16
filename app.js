gsap.from(".animate-hero",{
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.3
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".animate-bio", {
    ScrollTrigger: ".animate-bio",
    duration: 0.5,
    opacity: 0,
    x: -150,
    stagger: .12,
});

gsap.from(".animate-powers", {
    ScrollTrigger: ".animate-powers",
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
});

gsap.from('.animate-card', {
    ScrollTrigger: '.animate-card',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.1,
    delay: 0.2,
})

gsap.from('.animate-friends', {
    ScrollTrigger: '.animate-friends',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.1,
    delay: 0.2
});

gsap.from('.animate-nindroid', {
    ScrollTrigger: '.animate-nindroid',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.1,
    delay: 0.2
})

gsap.from('.animate-email', {
    ScrollTrigger: '.animate-email' ,
    duration: 0.8,
    opacity: 0,
    y: -150,
    stagger: 0.25,
    delay: 0.4
})