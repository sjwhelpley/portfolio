// Show an element
var show = function (elem) {
    // Get the natural height of the element
    var getHeight = function () {
      elem.style.display = 'block'; // Make it visible
      var height = elem.scrollHeight + 'px'; // Get it's height
      elem.style.display = ''; //  Hide it again
      return height;
    };

    var height = getHeight(); // Get the natural height
    elem.classList.add('active'); // Make the element visible
    elem.style.height = height; // Update the max-height

    // Once the transition is complete, remove the inline max-height so the content can scale responsively
    window.setTimeout(function () {
      elem.style.height = '';
    }, 350);
  };

  // Hide an element
  var hide = function (elem) {
    // Give the element a height to change from
    elem.style.height = elem.scrollHeight + 'px';

    // Set the height back to 0
    window.setTimeout(function () {
      elem.style.height = '0';
    }, 1);

    // When the transition is complete, hide it
    window.setTimeout(function () {
      elem.classList.remove('active');
    }, 350);
  };

  // Toggle element visibility
  var toggle = function () {
    var elem = document.getElementById("mobile-nav-bar");
    // If the element is visible, hide it
    if (elem.classList.contains('active')) {
      hide(elem);
      return;
    }

    // Otherwise, show it
    show(elem);
};