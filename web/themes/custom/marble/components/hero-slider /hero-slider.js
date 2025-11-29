(function (Drupal) {
  Drupal.behaviors.splideSlider = {
    attach: function (context) {
      document
        .querySelectorAll('.splide', context)
        .forEach(function (slider) {
          // Prevent double init
          if (slider.dataset.splideInitialized) return;

          new Splide(slider, {
            type: 'slide',
            perPage: 1,
            pagination: true,
            arrows: true,
            breakpoints: {
              768: {
                perPage: 1,
              },
            },
          }).mount();

          slider.dataset.splideInitialized = true;
        });
    }
  };
})(Drupal);
