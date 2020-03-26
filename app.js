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
  "yoga",
  "meditation"
];

// Create a for loop to display buttons, with search term as attribute data-term
$(document).ready(function() {
  for (var i = 0; i < arrNature.length; i++) {
    $("#button-panel").append(
      "<button class = 'term-button' data-term = '" +
        arrNature[i] +
        "'>" +
        arrNature[i] +
        "</button>"
    );
  }

  // Create an on click function for the submit button
  // to add the input to the array, then regenerate the buttons

  $("#submit-term").on("click", function(event) {
    event.preventDefault();
    var newItem = $("#submit-item").val();
    arrNature.push(newItem);
    $("#button-panel").empty();
    for (var i = 0; i < arrNature.length; i++) {
      $("#button-panel").append(
        "<button class = 'term-button' data-term = '" +
          arrNature[i] +
          "'>" +
          arrNature[i] +
          "</button>"
      );
    }

    // repeat logic within submit function, since once button is added, the functions outside this response won't run
    // Create an on click event for the buttons

    $(".term-button").on("click", function() {
      // empty the giphy-panel div of previous content
      // $("#giphy-panel").empty();
      // create a url
      var searchItem = $(this).attr("data-term");

      var searchURL =
        "https://api.giphy.com/v1/gifs/search?q=" +
        searchItem +
        "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

      // Create API request
      $.ajax({
        url: searchURL,
        method: "GET"

        // THEN, create a request for rating, image and display 10 images
        // used our activity button-triggered-ajax.html as a template
      }).then(function(response) {
        var result = response.data;

        for (var i = 0; i < result.length; i++) {
          var gifDiv = $("<div>");

          var rating = result[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var gifImage = $("<img>");
          gifImage.attr("src", result[i].images.original_still.url);
          gifImage.attr("data-still", result[i].images.original_still.url);
          gifImage.attr("data-animate", result[i].images.original.url);
          gifImage.attr("data-state", "still");
          gifImage.attr("class", "gif");

          gifDiv.append(gifImage);
          gifDiv.append(p);

          $("#giphy-panel").prepend(gifDiv);
        }

        // include an on-click event to click-on, click-off GIPHY animation
        // use pausing-gifs.html as a template

        $(".gif").on("click", function() {
          var state = $(this).attr("data-state");

          if (state === "still") {
            var animateURL = $(this).attr("data-animate");
            $(this).attr("src", animateURL);
            $(this).attr("data-state", "animate");
          }

          if (state === "animate") {
            var stillURL = $(this).attr("data-still");
            $(this).attr("src", stillURL);
            $(this).attr("data-state", "still");
          }
        });
      });
    });
  });

  // Create an on click event for the buttons

  $(".term-button").on("click", function() {
    // empty the giphy-panel div of previous content
    // $("#giphy-panel").empty();
    // create a url
    var searchItem = $(this).attr("data-term");

    var searchURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      searchItem +
      "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    // Create API request
    $.ajax({
      url: searchURL,
      method: "GET"

      // THEN, create a request for rating, image and display 10 images
      // ****** I thought this was random before, but here the same 10 images are returned every time.... May want to troubleshoot
      // used our activity button-triggered-ajax.html as a template
    }).then(function(response) {
      var result = response.data;

      for (var i = 0; i < result.length; i++) {
        var gifDiv = $("<div>");

        var rating = result[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var gifImage = $("<img>");
        gifImage.attr("src", result[i].images.original_still.url);
        gifImage.attr("data-still", result[i].images.original_still.url);
        gifImage.attr("data-animate", result[i].images.original.url);
        gifImage.attr("data-state", "still");
        gifImage.attr("class", "gif");

        gifDiv.append(gifImage);
        gifDiv.append(p);

        $("#giphy-panel").prepend(gifDiv);
      }

      // include an on-click event to click-on, click-off GIPHY animation
      // use pausing-gifs.html as a template

      $(".gif").on("click", function() {
        var state = $(this).attr("data-state");

        if (state === "still") {
          var animateURL = $(this).attr("data-animate");
          $(this).attr("src", animateURL);
          $(this).attr("data-state", "animate");
        }

        if (state === "animate") {
          var stillURL = $(this).attr("data-still");
          $(this).attr("src", stillURL);
          $(this).attr("data-state", "still");
        }
      });
    });
  });
});
