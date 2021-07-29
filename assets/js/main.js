
$('.slider').owlCarousel({
               items: 1,
               singleItem:true,
               nav: true,
               dots: true,
               loop: true,
               autoPlay: 3000
           });
           
const sr = ScrollReveal({
    distance: '60px',
    duration: 1000,
    reset: true,
})




sr.reveal(`div.dm-width`,{
    origin: 'bottom',
    interval: 100,
})

sr.reveal(`div.project-logo,p`,{
    origin: 'left',
    distance: '40px',
    interval: 100,
})

sr.reveal(`div.project-links,h5,i.ri-arrow-up-line scrollup__icon`,{
    origin: 'right',
    interval: 100,
    distance: '0px',
})

sr.reveal(`.buttons`,{
    origin: 'right',
    interval: 100,
    distance: '0px',
})

sr.reveal(`h1.project-name`,{
    origin: 'top',
    interval: 100,
})
sr.reveal(`h2.project-tagline`,{
    distance: '30px',
    origin: 'top',
    interval: 100,
})
