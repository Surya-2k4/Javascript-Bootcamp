//Window event (resize)

 

window.addEventListener('resize' ,() => {
    const dimensions = `Window dimensions: ${window.innerWidth}px x ${window.innerHeight}px `;
    document.getElementById('dimensions').textContent = dimensions;
});

//load event

window.addEventListener('load', ()=>{
    console.log('Window loaded');
});

//Scroll event

window.addEventListener('scroll', ()=>{
    console.log('Window Scrolled');
})
