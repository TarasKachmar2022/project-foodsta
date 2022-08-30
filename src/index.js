// Swiper

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper__btn--next',
    prevEl: '.swiper__btn--prev',
  },
});

// Mobile
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

// Modal
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('backdrop--is-hidden');
  }
})();

// modal for offerings

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-opens]'),
     modal: document.querySelector('[data-modals]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  
  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('backdrop--is-hidden');
  }
})();

// Validation

let validation = new JustValidate('#form', {
  errorLabelStyle: {
    color: '#FF705D',
  },
});

let selector = document.querySelector('#phone');
let im = new Inputmask('+38(09)999-99-99');
im.mask(selector);

validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'The name must be between 3 and 25 characters',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'The name must be between 3 and 25 characters',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Please enter a valid email address',
    },
    {
      rule: 'email',
      errorMessage: 'Please enter a valid email address',
    },
  ])
  .addField('#phone', [
    {
      validator: value => {
        const phone = selector.inputmask.unmaskedvalue();
        return Boolean(Number(phone) && phone.length > 0);
      },
      errorMessage: ' This phone must be in the format  099 000 00 00',
    },
    {
      validator: value => {
        const phone = selector.inputmask.unmaskedvalue();
        return Boolean(Number(phone) && phone.length === 11);
      },
      errorMessage: ' This phone must be in the format  099 000 00 00',
    },
  ]);
