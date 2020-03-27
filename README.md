# Giphy Info Widget

A panel of nature themed search terms are populated as buttons by writing the array values to buttons on the page. A form allows the user to add a search term. A on click event on the submit button adds the user term to that array, clears the button panel and re-adds all the values of the array. The user just sees their search term added to the button panel. When a button is clicked, the GIPHY API is queried through it's value, which is saved as a data attribute. Ten giphy are displayed on the page as still photos along with thieir ratings, with their still and animated urls saved as data attributes. On click functions on each photos changes the photos url from the 'still' image query to the animated giphy query. You can also click the giphy to make it still again, as the on click function checks what state the photo url is in and reverses it. If you click another button, another 10 photos are prepended to the search results. This was a UC Berkeley Extension full stack bootcamp assignment.

## Built With

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - HyperText Markup Language used for structure
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Cascading Style Sheets used for styling
- [Javascript](https://www.javascript.com) - code language used for interactive websites
- [JQuery](https://jquery.com) - a JavaScript library
- [GIPHY API](https://developers.giphy.com) - Application Processing Interface to query a giphy database

## Authors

- **Kate Jamboretz** - _Initial work_ - [katejamboretz](https://github.com/katejamboretz)

## Acknowledgments

- UC Berkeley Extension Full Stack Development 2020 Instructor, TAs and classmates
- [PurpleBooth README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
