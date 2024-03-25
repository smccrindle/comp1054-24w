// Grab all the tabs
const tabs = document.querySelectorAll('ul[role="tablist"] a');
console.log(tabs);

// Loop through all the tabs and add an event listener
tabs.forEach((tab) => {
    tab.addEventListener("click", addActiveState);
});

function addActiveState(event) {
    // the event.target is the actual <a> that the user clicked
    console.log(event.target);
    // stop the link from jumping to the href location
    event.preventDefault();
    // add "active" class to the <a> element
    event.target.classList.add("active");
}