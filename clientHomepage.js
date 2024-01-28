document.addEventListener('DOMContentLoaded', function() {
  var categorySelect = document.getElementById('category');
  var filterButton = document.getElementById('filter');
  var designersContainer = document.querySelector('.designers');
  var designers = document.querySelectorAll('.designer');

  filterButton.addEventListener('click', function() {
      var selectedCategory = categorySelect.value.toLowerCase();

      designers.forEach(function(designer) {
          var designPreferences = Array.from(designer.querySelectorAll('.specialty .preference')).map(function(pref) {
              return pref.textContent.toLowerCase();
          });
          var showDesigner = (selectedCategory === 'all' || designPreferences.includes(selectedCategory));
        
          designer.style.display = showDesigner ? 'block' : 'none';
      });
  });
});





document.addEventListener('DOMContentLoaded', function() {
  var totalImages = 3; // Set the total number of images you want to include

  // Select all slider wrappers and buttons
  var sliderWrappers = document.querySelectorAll('.slider-wrapper');
  var prevButtons = document.querySelectorAll('#prevBtn');
  var nextButtons = document.querySelectorAll('#nextBtn');
  var imageWidth = document.querySelector('.designer').offsetWidth;

  // Iterate over each slider
  sliderWrappers.forEach(function(sliderWrapper, index) {
    var currentIndex = 0;

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      updateSlider();
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalImages;
      updateSlider();
    }

    function updateSlider() {
      var newPosition = -currentIndex * imageWidth + 'px';
      sliderWrapper.style.transform = 'translateX(' + newPosition + ')';
    }

    // Add event listeners to slider buttons
    prevButtons[index].addEventListener('click', prevSlide);
    nextButtons[index].addEventListener('click', nextSlide);
  });
});