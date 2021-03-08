const openButton = document.querySelector('.search-for-hotels-button');
const form = document.querySelector('.search-form');
const dateIn = form.querySelector('[name=date-in]');
const dateOut = form.querySelector('[name=date-out]');
const adults = form.querySelector('[name=adults]');
const children = form.querySelector('[name=children]');
const searchButton = form.querySelector('.search-button');

let isStorageSupport = true;
let storageAdults = "";
let storageChildren = "";

try {
  storageAdults = localStorage.getItem('adults');
  storageChildren = localStorage.getItem('children');
} catch (err) {
  isStorageSupport = false;
}

openButton.addEventListener('click', function(evt){
  evt.preventDefault();
  form.classList.remove('form-error');
  form.classList.toggle('show-form');
  form.classList.toggle('hidden-form');
})

openButton.addEventListener('mousedown', function(evt){
    evt.preventDefault()
});

searchButton.addEventListener('mousedown', function(evt){
    evt.preventDefault()
});

if(storageAdults) {
  adults.value = storageAdults;
}

if (storageChildren) {
  children.value = storageChildren;
}

form.addEventListener('submit', function(evt) {
  if(!dateIn.value || !dateOut.value || !adults.value || !children.value) {
    evt.preventDefault();
    form.classList.remove('form-error');
    form.offsetWidth = form.offsetWidth;
    form.classList.add('form-error');
  } else {
      if (isStorageSupport) {
        localStorage.setItem('adults', adults.value);
        localStorage.setItem('children', children.value);
      }
    }
});
