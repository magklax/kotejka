'use strict';

(() => {
  const sliderOne = new Siema({
    selector: '#slider-1',
    perPage: 1,
    multipleDrag: true
  });

  const prev = document.querySelector('#prev-1');
  const next = document.querySelector('#next-1');

  prev.addEventListener('click', () => sliderOne.prev());
  prev.addEventListener('keydown', () => window.utils.isEnterKeycode(sliderOne.prev));
  next.addEventListener('click', () => sliderOne.next());
  next.addEventListener('keydown', () => window.utils.isEnterKeycode(sliderOne.next));

  Siema.prototype.addPagination = function() {
    const slider = this;
    const dots = slider.selector.parentElement.querySelector('.slider__dots');

    for (let i = 0; i < slider.innerElements.length; i++) {
      const dot = document.createElement('li');
      dot.classList.add('slider__dot');
      if (i === 0) {
        dot.classList.add('active');
      }
      dot.dataset.index = i;
      dots.appendChild(dot);
    }

    dots.addEventListener('click', function (evt) {
      const target = evt.target;
      if (target.tagName === 'LI') {
        slider.goTo(target.dataset.index);
        dots.querySelectorAll('li').forEach((el) => el.classList.remove('active'));
        target.classList.add('active');
      }
    });
  };

  sliderOne.addPagination();
})();