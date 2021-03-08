const openButton = document.querySelector('.search-for-hotels-button');
const form = document.querySelector('.search-form');
const dateIn = form.querySelector('[name=date-in]');
const dateOut = form.querySelector('[name=date-out]');
const adults = form.querySelector('[name=adults]');
const children = form.querySelector('[name=children]');


openButton.addEventListener('click', function(evt){
  evt.preventDefault();
  form.classList.toggle('show-form');
  form.classList.toggle('hidden-form');
})

openButton.addEventListener('mousedown', function(evt){
    evt.preventDefault()
});

form.addEventListener('submit', function(evt) {
  if(!dateIn.value || !dateOut.value || !adults.value || !children.value) {
    evt.preventDefault();
    form.classList.add('form-error');
    form.offsetWidth = form.offsetWidth;
    form.classList.remove('form-error');
  }
});
