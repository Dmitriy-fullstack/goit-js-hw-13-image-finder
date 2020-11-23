
import './style.scss';
import NewApiService from "./ApiService";
import galleryTpl from './templates/gallery.hbs';
// import { search } from 'core-js/fn/symbol';


// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/Material.css';
// import 'material-design-icons/iconfont/material-icons.css';
// defaults.styling = 'material';

 
// defaults.icons = 'material';
// defaults.width = '360px';
// defaults.minHeight = '40px';
// defaults.delay = '1000'; 
// defaults.closer = false;
// defaults.sticker = false;
// defaults.addClass = 'error';


// import { error } from '@pnotify/core';

// import getRefs from './refs';
// import galleryTpl from './templates/gallery.hbs'




  const refs = {
  searchForm: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.loadMore__btn'),
  
  
} 

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

const newApiService = new NewApiService();

btnIsHiddenAdd ();
 
function onSearch (event) {
  
  event.preventDefault();
  newApiService.query = event.currentTarget.elements.query.value;
  clearCard();
  newApiService.resetPage();
  newApiService.getQuery().then(renderCard);
  btnIsHiddenRemove();
 
}

function onLoadMore() {
  newApiService.getQuery().then(renderCard);
  onScroll();
}

function btnIsHiddenAdd () {
  refs.loadMoreBtn.classList.add('is-hidden')
}
function btnIsHiddenRemove() {
  refs.loadMoreBtn.classList.remove('is-hidden')
}

function renderCard (hits) {
  refs.gallery.insertAdjacentHTML('beforeend', galleryTpl(hits));
}

function clearCard () {
  refs.gallery.innerHTML = '';
}
function onScroll() {
  let height = document.body.scrollHeight - 400;
  setTimeout(() => {
   window.scrollTo({
     top: height,
     left: 0,
     behavior: 'smooth',
   });
 }, 100);
}







// function notifyError(err) {
//   error({
//   text:`${err}`,
//   type: 'info',
//   hide: false,
//   });
// }


 
// const refs = {
//   input: document.querySelector('.js-search'),
//   cardContainer: document.querySelector('.cardContainer')
// }

// refs.input.addEventListener('input', debounce(onSearch, 500));

// function clearResult() {
//   refs.input.value = '';
//   refs.cardContainer.innerHTML = '';
// }

// const markup = '';

// function renderCountryCards(country) {
//   console.log(country);
//   const { length } = country;
//     if (length === 1) {
//     renderCountry(country);
//   }
//     if (length > 2 & country.length < 10) {
//       renderCountriesList(country);
//   }
//     if (length > 10) {
//       notifyError('Конкретизируйте ввод, слишком мало букв для поиска');
      
//   }
//   console.log(markup);
// }


  // function renderCountry(country) {
  // const markup = countryCardTpl(country);
  //  refs.cardContainer.innerHTML = markup;
  // }

  // function renderCountriesList(country) {
  // const markup = countryListTpl(country);
  //  refs.cardContainer.innerHTML = markup;
  // }



// function onSearch(Event) {
//   Event.preventDefault();

//   const countryName = Event.target.value.trim();

//   if (countryName.length === 0) return clearResult();
  
//   fetchCountries(countryName)
//    .then(data => renderCountryCards(data))
//    .catch(error => { console.log(error) })
 
// } 


