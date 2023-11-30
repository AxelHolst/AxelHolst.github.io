document.addEventListener('scroll', function() {
    var scrollTop = document.documentElement.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercentage = scrollTop / scrollHeight;
    // Adjust the background position based on the scroll.
    document.body.style.backgroundPosition = '0% ' + (scrollPercentage * 100) + '%';
  });
  