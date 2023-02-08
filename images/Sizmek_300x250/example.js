/* Called on the window load event. */
function preInit() {
  init();
}

/* The Enabler is now initialized and any extra modules have been loaded. */
function init() {
  addListeners();
  showAd();
}

function addListeners() {
  document.getElementById("adwrapper").addEventListener('click', exitClickHandler);
}

/* Exit Event handler */
function exitClickHandler() {
  EB.clickthrough();
}


/* show the Main Ad */
function showAd(){
    var animationDuration = 0.5;
    var bgAnimationDuration = 2;
    var myTimeline = new TimelineMax({repeat:1, repeatDelay:3});
    myTimeline.set('#loader', {autoAlpha: 0, 'animation-iteration-count':'0'});
    myTimeline.set(['#bg1'], {autoAlpha: 1});
    myTimeline.add('f1');
    myTimeline.set('#bg1', {autoAlpha:1}, 'f1');
    myTimeline.from('#bg1', bgAnimationDuration, {ease: Power4.easeOut, scale:'1.2'}, 'f1');
    myTimeline.to("#whiteBar", animationDuration, {top:0}, 'f1');
    myTimeline.to("#greenBar", animationDuration, {top:0},'f1+=.3');
    myTimeline.to(['#frame1_text','#logo'], animationDuration, {autoAlpha: 1}, 'f1+=.7');
    if(document.getElementById("frame1a_text").innerHTML!=''){
      myTimeline.to(['#frame1a_text'], animationDuration, {autoAlpha: 1}, 'f1+=1.7');
    }
    myTimeline.add('f2','+=.1');
    myTimeline.to("#fullGreen", animationDuration, {autoAlpha:1, top:0}, 'f2');
    myTimeline.to('#frame2_text', animationDuration, {autoAlpha: 1}, 'f2');
    myTimeline.to('#line', animationDuration, {autoAlpha: 1}, 'f2');
    myTimeline.to('#frame2_paragraph', animationDuration, {autoAlpha: 1}, 'f2');
    myTimeline.to("#cta", animationDuration, {}, 'f2');
    myTimeline.to("#cta", animationDuration, {autoAlpha: 1,scale:1.2,transformOrigin:'140px 150px'}, 'f2+=1');
    myTimeline.to("#cta", animationDuration, {scale:1,transformOrigin:'300px 250px'}, 'f2+=1.3');;
}



/* Main onload handler */
window.addEventListener('load', preInit);

