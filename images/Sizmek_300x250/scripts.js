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
    var bgAnimationDuration = 5;
    var myTimeline = new TimelineMax({repeat:5, repeatDelay:3});
    myTimeline.set('#loader', {autoAlpha: 0, 'animation-iteration-count':'0'})
    .set(['#bg1'], {autoAlpha: 1})
    .add('f1')
    .set('#bg1', {autoAlpha:1}, 'f1')
    .from('#bg1', bgAnimationDuration, {ease: Power4.easeOut, scale:'1.2'}, 'f1')
    .to("#whiteBar", animationDuration, {top:0}, 'f1')
    .to("#greenBar", animationDuration, {top:0},'f1+=.3')
    .to(['#frame1_text','#logo'], animationDuration, {autoAlpha: 1}, 'f1+=.7')
    .add('f2','+=.1')
    .to("#fullGreen", animationDuration, {autoAlpha:1, top:0}, 'f2')
    .to('#frame2_text', animationDuration, {autoAlpha: 1}, 'f2+=.5')
    .to('#line', animationDuration, {autoAlpha: 1}, 'f2+=.6')
    .to('#frame2_paragraph', animationDuration, {autoAlpha: 1}, 'f2+=.7')
    .to("#cta", animationDuration, {autoAlpha: 1}, 'f2+=.8')
    .to("#cta", animationDuration, {scale:1.2,transformOrigin:'140px 150px'}, 'f2+=1')
    .to("#cta", animationDuration, {scale:1}, 'f2+=1.3');
}



/* Main onload handler */
window.addEventListener('load', preInit);

