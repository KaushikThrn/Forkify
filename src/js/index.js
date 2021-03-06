import Search from './models/Search';
import {elements} from './views/base'
import * as searchView from './views/searchView'

const state={};

const controlSearch = async ()=>{
    const query=searchView.getInput();
    if(query){
        searchView.clearInput();
        searchView.clearResList();
        state.search=new Search(query);
        await state.search.getResults();
        console.log(state.search.result);
        searchView.renderResults(state.search.result)


    }
}

elements.searchForm.addEventListener('submit', e=>{
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e=>{
    const btn = e.target.closest('.btn-inline');
    if(btn) {
        const goToPage =  parseInt(btn.dataset.goto, 10);
        searchView.clearResList();
        searchView.renderResults(state.search.result, goToPage); 
    }
});



