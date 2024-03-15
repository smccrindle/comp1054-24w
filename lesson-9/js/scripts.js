// STEP 2: Build out script to control visibility of persistent navigation based on the scrolling position
// STEP 2a: Grab the #floatingbar as a const
const nav = document.querySelector("#floatingbar");
// STEP 2b: Determine how far down the top of the #floatingbar is from the top of the viewport and capture it with a variable called navTop
let navTop = nav.offsetTop;
// STEP 4a: Get the 'Back to top' button from the DOM with a const topButton
const topButton = document.querySelector("footer a.top");
// STEP 8a: Assign any and all elements with the class="pullquote" to the const pullQuote
const pullQuote = document.querySelectorAll(".pullquote");
// STEP 2c: Build an event listener for the scroll event (https://developer.mozilla.org/en-US/docs/Web/Events/scroll)
window.addEventListener("scroll", function() {
//console.log("Scrolled!");
// STEP 2d: Check if the scroll position is further down than the top of the navbar...
if (window.pageYOffset > navTop) {
    //console.warn("You've scrolled past the nav element!");
    // STEP 2e: Automatically add the class="floater" to enable the persistent navigation styles we built out in STEP 1
    nav.classList.add("floater");
    // STEP 4b: Set the sticky footer 'Back to top' button to display 'block' as the user has scrolled down the page somewhat
    // topButton.style.display = "block";
    topButton.style.visibility = "visible";
} else {
    // STEP 2f: The user is pretty close to the top of the page, so remove the class="floater" and display the regular tab-based navigation
    nav.classList.remove("floater");

    // STEP 4c: The user doesn't need the 'Back to top' button - they are at the top of the page, so set it to display 'none'
    //topButton.style.display = "none";
    topButton.style.visibility = "hidden";
}		
});

// STEP 6a: Attach event listener to 'Back to top' button that calls the scrollToTop function built in STEP 5
topButton.addEventListener("click", function(event) {
    // STEP 6b: Prevent the default action of the anchor
    scrollToTop();
    event.preventDefault();
});
// STEP 5a: Build out Scroll-To-Top function
function scrollToTop() {
    // STEP 5b: Use the scrollBy() or the scroll() method to scroll the browser back up to the top of the page (https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy)
    //console.log(window.pageYOffset);
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}
// STEP 8b: Write a forEach loop to duplicate the pullquote text and insert it into the page
pullQuote.forEach(function(element) {
    // STEP 8c: Get the parent element
    const parentElem = element.parentNode;
    // STEP 8d: Clone the element (https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode)
    const clone = element.cloneNode(true);
    // STEP 8e: Add a special class to the cloned SPAN element
    clone.classList.add("pullquote2");
    // STEP 8f: Insert cloned element into the DOM
    parentElem.prepend(clone);
});
// STEP 9a: Move this entire JavaScript into an external file and put it into the /js folder
/* Animated scrolling of page to top function inspired by the great tutorial at https://dzone.com/articles/back-to-top-pure-javascript and the MDN page about scrollBy() at https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy */
