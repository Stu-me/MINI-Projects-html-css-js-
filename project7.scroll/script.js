const progress = document.querySelector('.progress');

window.addEventListener('scroll',()=>{
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop/docHeight)*100; // how much upper part moved by total height
    progress.style.width = scrollTop - 100 +'%'; // dynamically changing the width size in the css 
})
/*
window.scrollY

Gives the vertical scroll distance in pixels from the top of the page.

document.documentElement

Refers to the root <html> element.
Its properties describe the entire page, not just the visible area. 

.scrollHeight

The total height of the document (content + overflow). Used to know how long the page is.

window.innerHeight

The height of the visible part of the browser window (viewport).

docheight = total area - visible area(in one time )
*/