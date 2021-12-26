// Remove the transition class
const arrow = document.querySelector('.arrow');
arrow.classList.remove('arrow-transition');

// Create the observer, same as before:
const observerArrow = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      arrow.classList.add('arrow-transition');
      return;
    }

    arrow.classList.remove('arrow-transition');
  });
});

observerArrow.observe(document.querySelector('.arrow-wrapper'));