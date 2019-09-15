import Search from './models/Search';
import {elements} from './views/base'

const state={};

const controlSearch = async ()=>{
    const query='pizza';
    if(query){
        state.search=new Search(query);
        await state.search.getResults();
        console.log(state.search.result);

    }
}

elements.searchForm.addEventListener('submit', e=>{
    e.preventDefault();
    controlSearch();
})



