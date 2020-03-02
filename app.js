// Create array of search terms of interest

arrNature = [
  "mountain",
  "river",
  "ocean",
  "forest",
  "earth",
  "lake",
  "sunset",
  "sunrise",
  "camping",
  "running",
  "skiing",
  "surfing",
  "desert",
  "climbing",
  "joshua tree",
  "hot springs",
  "yoga",
  "meditation"
];

// Create a for loop to display buttons, with search term as attribute data-term
$(document).ready(function() {
  for (var i = 0; i < arrNature.length; i++) {
    $("#button-panel").append(
      "<button data-term = " + arrNature[i] + ">" + arrNature[i] + "</button>"
    );
  }
});

// Create an on click function for the submit button
// to add the input to the array, then regenerate the buttons

// Create an on click event for the buttons

// Create API request

// THEN, create a request for rating, image and display 10 images

// include an on-click event to click-on, click-off GIPHY animation
