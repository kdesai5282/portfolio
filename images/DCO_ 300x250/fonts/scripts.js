// Setup namespace for ad.
var creative = {};

creative.init = function () {
  creative.setupDOMElements();

  // Check if Enabler is initialized.
  if (Enabler.isInitialized()) {
    // Check if ad is visible to user.
    if (Enabler.isVisible()) {
      creative.enablerInitHandler();
    } else {
      Enabler.addEventListener(studio.events.StudioEvent.VISIBLE,
        creative.enablerInitHandler);
    }
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT,
        creative.enablerInitHandler);
  }
};

creative.setupDOMElements = function () {
  creative.domElements = {};
  creative.domElements.adwrapper = document.getElementById('adwrapper');
  creative.domElements.bgImg = document.getElementById('bgImg');
  creative.domElements.text1 = document.getElementById('text1');
  creative.domElements.bluebox = document.getElementById('bluebox');
  creative.domElements.text2 = document.getElementById('text2');
  creative.domElements.text2_terms = document.getElementById('text2_terms');
  creative.domElements.text3 = document.getElementById('text3');
  creative.domElements.text3_terms = document.getElementById('text3_terms');
  creative.domElements.cta = document.getElementById('cta');
  creative.domElements.rate = document.getElementById('rate');
};

creative.enablerInitHandler = function (event) {
  creative.dynamicDataAvailable();
  creative.domElements.adwrapper.addEventListener('click', creative.exitClickHandler);
  if (Enabler.isPageLoaded()) {
    creative.pageLoadHandler();
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.PAGE_LOADED, creative.pageLoadHandler);
  }
};

creative.dynamicDataAvailable = function () {

  // NOTE: Here starts the pasted section from Studio.

    //Enabler.setProfileId(1026778);
    var devDynamicContent = {};
    devDynamicContent.RABOD0069_DCO_300x250= [{}];
    devDynamicContent.RABOD0069_DCO_300x250[0]._id = 0;
    devDynamicContent.RABOD0069_DCO_300x250[0].ID = 1;
    devDynamicContent.RABOD0069_DCO_300x250[0].Reporting_Label = "Male A";
    devDynamicContent.RABOD0069_DCO_300x250[0].Default = true;
    devDynamicContent.RABOD0069_DCO_300x250[0].Active = true;
    devDynamicContent.RABOD0069_DCO_300x250[0].Hero_Image = {};
    devDynamicContent.RABOD0069_DCO_300x250[0].Hero_Image.Type = "file";
    devDynamicContent.RABOD0069_DCO_300x250[0].Hero_Image.Url = "https://s0.2mdn.net/ads/richmedia/studio/60002357/60002357_20180510170004587_300x250_bg1.jpg";
    devDynamicContent.RABOD0069_DCO_300x250[0].Box_Color = "#000099";
    devDynamicContent.RABOD0069_DCO_300x250[0].Frame1_Text = "Want security for your savings?";
    devDynamicContent.RABOD0069_DCO_300x250[0].Frame2_Text = "RaboDirect will keep your money safe";
    devDynamicContent.RABOD0069_DCO_300x250[0].Frame2_Terms = "RaboDirect is a division of Rabobank Australia Limited\nABN 50 001 621 129 AFSL no. 234700. Read the terms and\nconditions on our website before making investment decisions.";
    devDynamicContent.RABOD0069_DCO_300x250[0].Frame3_Text = "High Interest Savings Account";
    devDynamicContent.RABOD0069_DCO_300x250[0].Frame3_Terms = "*Current 4 month variable introductory rate for new personal customers only, on deposits up to $250,000. Rates subject to change. Reverting after to the standard variable rate.";
    devDynamicContent.RABOD0069_DCO_300x250[0].Rate_Whole = "3";
    devDynamicContent.RABOD0069_DCO_300x250[0].Rate_Decimal = ".05";
    devDynamicContent.RABOD0069_DCO_300x250[0].Rate_Text = "Variable Rate";
    devDynamicContent.RABOD0069_DCO_300x250[0].Rate_Offer = "4 month introductory rate";
    devDynamicContent.RABOD0069_DCO_300x250[0].CTA_Text = "click here to get started";
    devDynamicContent.RABOD0069_DCO_300x250[0].CTA_Box_Color = "#F36F21";
    devDynamicContent.RABOD0069_DCO_300x250[0].Exit_URL = {};
    devDynamicContent.RABOD0069_DCO_300x250[0].Exit_URL.Url = "https://www.rabodirect.com.au/personal-savings/";
    Enabler.setDevDynamicContent(devDynamicContent);

  // NOTE: Here ends the pasted section from Studio.


  // Variable "dynamicContent" gets automatically initialized by Enabler.
  creative.dynamicData = dynamicContent.RABOD0069_DCO_300x250[0];

  // Set your dynamic exit url
  creative.dynamicExitUrl = creative.dynamicData.Exit_URL.Url;
  creative.domElements.bgImg.src = creative.dynamicData.Hero_Image.Url;
  creative.domElements.text1.innerHTML = creative.dynamicData.Frame1_Text;
  creative.domElements.bluebox.style.backgroundColor = creative.dynamicData.Box_Color;
  creative.domElements.text2.innerHTML = creative.dynamicData.Frame2_Text;
  creative.domElements.text2_terms.innerHTML = creative.dynamicData.Frame2_Terms;
  creative.domElements.text3.innerHTML = creative.dynamicData.Frame3_Text;
  creative.domElements.text3_terms.innerHTML = creative.dynamicData.Frame3_Terms;
  creative.domElements.cta.innerHTML = creative.dynamicData.CTA_Text;
  creative.domElements.cta.style.backgroundColor = creative.dynamicData.CTA_Box_Color;
  var rate = ''+creative.dynamicData.Rate_Whole+'<sup id="ratedecimal">'+creative.dynamicData.Rate_Decimal+'</sup><span id="percent">%</span><span id="pa">p.a.<sup>*</sup></span><span id="varrate">'+creative.dynamicData.Rate_Text+'</span><span id="months">'+creative.dynamicData.Rate_Offer+'</span>';
  creative.domElements.rate.innerHTML = rate;


};


creative.exitClickHandler = function (event) {
  Enabler.exit('exit', creative.dynamicExitUrl);
};

creative.pageLoadHandler = function (event) {
  // Show creative and run the Animation
  creative.showAd();
};

// Is triggered when the background image in polite.js was fully loaded.
creative.showAd = function () {

    // Run GSAP Animation Timeline here
    var animationDuration = 0.5;
    var myTimeline = new TimelineMax({repeat:1, repeatDelay:3});
    myTimeline.set("#loader", {autoAlpha: 0, "animation-iteration-count":"0"})
    myTimeline.set(["#bg","#logo","#footer"], {autoAlpha: 1})
    .to("#cta", animationDuration, {autoAlpha: 1})
    .to("#bluebox", animationDuration, {width:"150px"})
    .to("#text1", animationDuration, {autoAlpha:1},"-=.25")
    .to("#text1", animationDuration, {autoAlpha:0}, "+=3")
    .to("#bluebox", animationDuration, {width:"300px"}, "-=.55")
    .to(["#text2","#text2_terms"], animationDuration, {autoAlpha:1}, "-=.25")
    .to(["#text2","#text2_terms"], animationDuration, {autoAlpha:0}, "+=3.25")
    .to(["#bluebox","#bg"], animationDuration+=.5, {height:"0px", top:"300px"}, "-=.5")
    .to("#blueline", animationDuration+=.5, {autoAlpha:1}, "-=.75")
    .to(["#text3","#text3_terms","#rate","#pa","#varrate","#percent","#months"], animationDuration, {autoAlpha:1}, "-=1.75");


};
// Start creative once all elements in window are loaded.
window.addEventListener('load', creative.init.bind(creative));


