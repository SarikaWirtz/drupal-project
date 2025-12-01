document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hero-slider-component').forEach(slider => {
    const options = slider.dataset.heroSliderOptions
      ? JSON.parse(slider.dataset.heroSliderOptions)
      : {};
    // Initialize Splide
    const splide = new Splide(slider, Object.assign({
      type        : 'loop',
      autoplay    : true,
      pauseOnFocus: true,
      interval    : 5000,
      speed       : 600,
      rewind      : true,
      pauseOnHover: true,
      arrows      : true,
      pagination  : true,
      a11y        : true,  // Enable ARIA support
      lazyLoad    : 'nearby',
    }, options))
    splide.mount();
  });
});
