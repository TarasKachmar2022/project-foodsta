// Swiper

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper__btn--next',
    prevEl: '.swiper__btn--prev',
  },
});

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
