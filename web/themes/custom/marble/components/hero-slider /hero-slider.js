console.log("i am from component");
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hero-slider-component').forEach(slider => {
    const options = slider.dataset.heroSliderOptions
      ? JSON.parse(slider.dataset.heroSliderOptions)
      : {};

    new Splide(slider, Object.assign({
      type: 'loop',
      autoplay: true,
      interval: 5000,
      speed: 600,
      rewind: true,
      pauseOnHover: true,
      arrows: true,
      pagination: true,
    }, options)).mount();
  });
});

