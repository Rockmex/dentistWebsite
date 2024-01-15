$(function () {
  $("#includeHeader").load("header.html");
});

$(function () {
    $("#includeFooter").load("footer.html");
  });

// init controller
var controller = new ScrollMagic.Controller();

// create a scene
$(function () { // wait for document re
var scene = new ScrollMagic.Scene({
    duration: 310, // the scene should last for a scroll distance of 100px
    offset: 50 // start this scene after scrolling for 50px
})
    .setPin('#introduction') // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller
  });