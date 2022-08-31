// Modal
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtnO: document.querySelector('[data-modal-offerings]'),
    openModalBtnH: document.querySelector('[data-modal-header]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnO.addEventListener('click', toggleModal);
  refs.openModalBtnH.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('backdrop--is-hidden');
  }
})();
