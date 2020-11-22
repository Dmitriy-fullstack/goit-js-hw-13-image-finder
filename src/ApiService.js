

// import { error } from '@pnotify/core';
// import { from } from "core-js/fn/array";

// import galleryTpl from './templates/gallery.hbs'
export default class ApiService {
    constructor() {
        this.searchQuery = '',
        this.page = 1
    }

    getQuery (searchQuery) {
        
    const key = '19196352-c8b59687c9ebaed16cee14214';
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${key}`;

    fetch(url)
        .then(resronce => resronce.json)
        .then(data => {
            console.log(data);
            this.increment();
            
        }).then(data => data.hits)
        .catch (error => console.log('idi v les'))
    }

    get query(){
        return this.searchQuery
    }
    set query(newQuery){
        return this.searchQuery = newQuery;
    }

    increment() {
        this.page += 1;
    }
    resetPage() {
        this.page = 1;
    }

}
//     
//     return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.key}`)
//     .then(response => response.json())
//     .then(e => e.hits)
//     .catch(console.log('idi v les, srabotal catch)')); 
        
// }
//     get inputQuery() {
//      return this.searchQuery; 
//     }

//     set inputQuery(newInputQuery) {
//         this.searchQuery = newInputQuery;
//     }

//     incPage() {
//     this.page += 1;
// }
//     resetPage() {
//     this.page = 1;
// }












