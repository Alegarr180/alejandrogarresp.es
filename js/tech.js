
  document.addEventListener('DOMContentLoaded', function () {
    var techImages = document.querySelectorAll('.inner-tech img');
    var techDescription = document.querySelector('#tech td[colspan="4"] p');

    techImages.forEach(function (img) {
      img.addEventListener('mouseover', function () {
        var altText = img.alt;
        techDescription.textContent = altText;
      });

      img.addEventListener('mouseout', function () {
        techDescription.textContent = "‎";
      });
    });
  });


