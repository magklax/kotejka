'use strict';

(() => {
  const sliderTwo = new Siema({
    selector: '#slider-2',
    perPage: {
      768: 1.5,
      1366: 2.5,
    },
    multipleDrag: true
  });

  const prev = document.querySelector('#prev-2');
  const next = document.querySelector('#next-2');

  prev.addEventListener('click', () => sliderTwo.prev());
  prev.addEventListener('keydown', () => window.utils.isEnterKeycode(sliderTwo.prev));
  next.addEventListener('click', () => sliderTwo.next());
  next.addEventListener('keydown', () => window.utils.isEnterKeycode(sliderTwo.next));

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

  Siema.prototype.addInnerClasses = function() {
    const wrapper = this.selector.querySelector('div');
    wrapper.classList.add('slider__wrapper');

    const items = wrapper.childNodes;

    for (let i = 0; i < items.length; i++) {
      items[i].classList.add('item');
    }
  };

  sliderTwo.addPagination();
  sliderTwo.addInnerClasses();
})();