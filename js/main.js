$(document).ready(function() {

  //init ScrollMagic
  var controller = new ScrollMagic.Controller(); //telling browser to use scrollbar and trigger animation

  //pin the header
  var pinHeaderScene = new ScrollMagic.Scene({ //define the settings
    triggerElement: '#top',
    triggerHook: 0, //pinning to the top of the page
    // duration: '10%'
  })
  .setPin('#top', {pushfollowers: false})
  .addTo(controller);

  //pin the callout
  var pinCalloutScene = new ScrollMagic.Scene({ //define the settings
    triggerElement: '#callout',
    triggerHook: 0.5,
    duration: '20%'
  })
  .setPin('#callout', {pushfollowers: false})
  .addTo(controller);


  //build a scene (animation is defined in a scene)
  var ourScene = new ScrollMagic.Scene({ //options for the scenes are defined in the curly brackets
    triggerElement: '#about img',
    duration: '100%',   //ending trigger
    triggerHook: 0.9

  })
  .setClassToggle('#about', 'fade-in')
  .addIndicators({
    name: 'fade-scene',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: '#75C695'
  })
  .addTo(controller);

//scene for proficiencies
var ourScene2 = new ScrollMagic.Scene({ //options for the scenes are defined in the curly brackets
  triggerElement: '#services',
  duration: '100%',   //ending trigger
  triggerHook: 0.9

})
.setClassToggle('#services', 'fade-in')
.addIndicators({
  name: 'fade-scene',
  colorTrigger: 'black',
  colorStart: '#75C695',
  colorEnd: '#75C695'
})
.addTo(controller);

});
