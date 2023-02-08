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
function createElement(el){
  var arrElements = document.getElementsByTagName(''+el);
    var currElement, currID;
    for (currElement = 0; currElement < arrElements.length; ++currElement) {
        currID = arrElements[currElement].id;
        try {
            if (currID) creative.domElements[currID] = document.getElementById(currID);
        }
        catch (err) {
            console.log(err);
        }
    }
}
creative.setupDOMElements = function () {
  creative.domElements = {};
    createElement('div');
    createElement('img');
    createElement('span');
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

     Enabler.setProfileId(10423407);
    var devDynamicContent = {};

    devDynamicContent.scoopon_sample = [{}];
    devDynamicContent.scoopon_sample[0]._id = 0;
    devDynamicContent.scoopon_sample[0].deal_id = 1;
    devDynamicContent.scoopon_sample[0].reporting_label = "DEFAULT";
    devDynamicContent.scoopon_sample[0].is_default = true;
    devDynamicContent.scoopon_sample[0].is_active = false;
    devDynamicContent.scoopon_sample[0].image_url_1 = {};
    devDynamicContent.scoopon_sample[0].image_url_1.Url = "https://res.cloudinary.com/lux-group/image/upload/w_300,h_250,c_fill,g_center,q_auto:eco,f_auto,fl_progressive/zl2jj10en5lyx2pitn9r";
    devDynamicContent.scoopon_sample[0].image_url_2 = {};
    devDynamicContent.scoopon_sample[0].image_url_2.Url = "images/300x250_bg3.jpg";
    devDynamicContent.scoopon_sample[0].product_title = "Save up to 49% on a Hands-On Wildlife Experience with Drink and More";
    devDynamicContent.scoopon_sample[0].price = '';
    devDynamicContent.scoopon_sample[0].dp = "Featherdale Wildlife Park";
    devDynamicContent.scoopon_sample[0].discount_percentage = '';
    devDynamicContent.scoopon_sample[0].hours_left = '';
    devDynamicContent.scoopon_sample[0].product_url = {};
    devDynamicContent.scoopon_sample[0].product_url.Url = "https://cudo.com.au/activities/deal/flip-out-strathpine-trampoline-session--0060I00000Y4spOQAR";
    devDynamicContent.scoopon_sample[0].cta = "book now";
    // devDynamicContent.Scoopon_DCO_300x250 = [{}];
    // devDynamicContent.Scoopon_DCO_300x250[0]._id = 0;
    // devDynamicContent.Scoopon_DCO_300x250[0].deal_id = 1;
    // devDynamicContent.Scoopon_DCO_300x250[0].reporting_label = "DEFAULT";
    // devDynamicContent.Scoopon_DCO_300x250[0].is_default = true;
    // devDynamicContent.Scoopon_DCO_300x250[0].is_active = false;
    // devDynamicContent.Scoopon_DCO_300x250[0].image_url_1 = "https:\/\/res.cloudinary.com\/lux-group\/image\/upload\/w_300,h_250,c_fill,g_center,q_auto:eco,f_auto,fl_progressive\/zl2jj10en5lyx2pitn9r";
    // devDynamicContent.Scoopon_DCO_300x250[0].image_url_2 = "https:\/\/res.cloudinary.com\/lux-group\/image\/upload\/w_300,h_250,c_fill,g_center,q_auto:eco,f_auto,fl_progressive\/zl2jj10en5lyx2pitn9r";
    // devDynamicContent.Scoopon_DCO_300x250[0].product_title = "Save up to 49% on a Hands-On Wildlife Experience with Drink and More";
    // devDynamicContent.Scoopon_DCO_300x250[0].price = 13;
    // devDynamicContent.Scoopon_DCO_300x250[0].dp = "Featherdale Wildlife Park";
    // devDynamicContent.Scoopon_DCO_300x250[0].discount_percentage = 40;
    // devDynamicContent.Scoopon_DCO_300x250[0].hours_left = 1354;
    // devDynamicContent.Scoopon_DCO_300x250[0].product_url = {};
    // devDynamicContent.Scoopon_DCO_300x250[0].product_url.Url = "https://cudo.com.au/activities/deal/flip-out-strathpine-trampoline-session--0060I00000Y4spOQAR";
    // devDynamicContent.Scoopon_DCO_300x250[0].cta = "book now";
    Enabler.setDevDynamicContent(devDynamicContent);

  // NOTE: Here ends the pasted section from Studio.


  // Variable "dynamicContent" gets automatically initialized by Enabler.
  creative.dynamicData = dynamicContent.scoopon_sample[0];

  // Set your dynamic exit url
  creative.dynamicExitUrl = creative.dynamicData.product_url.Url;

  const allData = Object.entries(creative.dynamicData)
  for (const [key, value] of allData) {
    if(value.hasOwnProperty('Url')){
      // console.log(`${key}: ${value['Url']}`);
      if(creative.domElements.hasOwnProperty(key)){
        creative.domElements[key].src = value['Url'];
      }else{
        // console.log('dom does not exists');
      }
    }else{
      // console.log(`${key}: ${value}`);
      if(creative.domElements.hasOwnProperty(key)){
        creative.domElements[key].innerHTML = value;
      }else{
        // console.log('dom does not exists');
      }
    }
  }

  // creative.domElements.image_url_1.src = creative.dynamicData.image_url_1.Url;
  // creative.domElements.image_url_2.src = creative.dynamicData.image_url_2.Url;
  // creative.domElements.product_title.innerHTML = creative.dynamicData.product_title;
  // creative.domElements.price.innerHTML = 'Price: ' + creative.dynamicData.price;
  // creative.domElements.dp.innerHTML = creative.dynamicData.dp;
  // creative.domElements.discount_percentage.innerHTML = creative.dynamicData.discount_percentage;
  // creative.domElements.hours_left.innerHTML = creative.dynamicData.hours_left;
  // creative.domElements.cta.innerHTML = creative.dynamicData.cta;

};

creative.exitClickHandler = function (event) {
  if(creative.dynamicExitUrl != ''){
    Enabler.exitOverride('Dynamic exit', creative.dynamicExitUrl);
  }else{
    Enabler.exit('Background exit');
  }
};

creative.pageLoadHandler = function (event) {
  // Show creative and run the Animation
  creative.showAd();
};

// Is triggered when the background image in polite.js was fully loaded.
creative.showAd = function () {


    // Run GSAP Animation Timeline here
    var animationDuration = 0.5;
    var myTimeline = new TimelineMax({repeat:5, repeatDelay:3});
    myTimeline.set("#loader", {autoAlpha: 0, "animation-iteration-count":"0"})
    myTimeline.set(["#content","#image1","#logo","#cta"], {autoAlpha: 1})
    .to("#fractals", animationDuration, {x:150}, "+=.5")
    .to("#product_title", animationDuration, {autoAlpha: 1}, "+=.2")
    .to("#price", animationDuration, {autoAlpha: 1}, "-=.5")
    .to(["#product_title","#price"], animationDuration, {autoAlpha: 0}, "+=2")
    .to("#fractals", animationDuration, {x:450})
    .to("#image2", animationDuration, {autoAlpha: 1}, "-=.4")
    .to("#dp", animationDuration, {autoAlpha: 1})
    .to("#discount_percentage", animationDuration, {autoAlpha: 1})
    .to("#price", animationDuration, {x:150, y:-56})
    .to("#discount_percentage", animationDuration, {autoAlpha: 0},"+=.5")
    .to("#price", animationDuration, {autoAlpha: 1})
    .to(["#hours_left","#hourImage"], animationDuration, {autoAlpha: 1})

};

// Start creative once all elements in window are loaded.
window.addEventListener('load', creative.init.bind(creative));


