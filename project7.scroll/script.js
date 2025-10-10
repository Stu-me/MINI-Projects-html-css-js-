const progress = document.querySelector('.progress');
const progressPercentage = document.querySelector('.percent')
/* window.scrollY - gives the area of how much length we have scrolled (measure of how much height of area top has hide in scrolling ) 
   window.innerHeight - Height of the display area of the webpage (changes if we minimize shrink or expand);
   document.documentElement.scrollHeight  -- give the total height for the webpage including the scrollable area
 */ 

window.addEventListener('scroll',()=>{
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollRatio = scrollTop/docHeight; // 0.1 to 0.9
    let timer; // declared here cause the cleartimout could work 
    
    const scrollPercentage = Math.trunc((scrollTop/docHeight)*100+1); // how much upper part moved by total height

    progressPercentage.innerHTML = scrollPercentage-1+'%';//window.scrolly window.scrollY

    progress.style.width = scrollPercentage +'%'; // dynamically changing the width size in the css 

    const hue = scrollRatio*360; // hue is betwenn 0 to 360 now the value dynamically changes we made it related to scroll height0
    
    progress.style.background = `linear-gradient(30deg, hsl(${hue},80%,60%),hsl(${hue + 60},80%,60% ))`;
    document.querySelector('body').style.background= `linear-gradient(30deg, hsl(${hue},80%,60%),hsl(${hue + 60},80%,60% ))`;

    // document.querySelector('body').style.background = ;
    document.querySelector('.progress').style.opacity = 1;

    clearTimeout(timer);
    
    
    /*---------------------------------------------------- hiding the bar after a time  ---------------------------------- */
     timer = setTimeout(()=>{
        document.querySelector('.progress').style.opacity = 0;
        document.querySelector('body').style.color = '#d7c0c0ff';
        document.querySelector('body').style.background = '#412f2fff';
    },2000) 
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