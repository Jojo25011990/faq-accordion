'use strict';
// The less JS, the better 😂
const faqButtons = document.querySelectorAll('.faq__btn');

faqButtons.forEach(faqButton => {
  faqButton.addEventListener('click', () => {
    const faq = faqButton.parentNode;
    faq.classList.toggle('active');
  });
});
