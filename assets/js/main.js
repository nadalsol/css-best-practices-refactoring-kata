////////////////////////////////////////////////////////////////////////////////
//                                                                            //
// The document ready event executes already when the HTML-Document is loaded //
// and the DOM is ready, even if all the graphics haven't loaded yet.         //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  /**
   * Toggle `back-to-top` button visibility, on scroll
   */
  var backToTopButton = document.getElementById("back-to-top");

  function toggleBackToTopVisibility() {
    var scrollTop = window.scrollY;

    if (scrollTop > 0) {
      backToTopButton.classList.remove("is-invisible");
    } else {
      backToTopButton.classList.add("is-invisible");
    }
  }

  window.onscroll = function () {
    toggleBackToTopVisibility();
  };
});
