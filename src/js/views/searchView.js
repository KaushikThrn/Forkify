import {elements} from './base';

export const getInput = () => elements.searchInput.value;

const renderReceipe = receipe => {
    const markup = ` 
    <li>
        <a class="results__link" href="#${receipe.receipe_id}">
            <figure class="results__fig">
                <img src="${receipe.image_url}" alt="${receipe.title}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitReceipeTitle(receipe.title)}</h4>
                <p class="results__author">${receipe.publisher}</p>
            </div>
        </a>
    </li>`;
    elements.searchResList.insertAdjacentHTML('beforeend', markup)
}

export const renderResults = recipes => {
    recipes.forEach(renderReceipe);
}

export const clearInput = () => {
    elements.searchInput.value='';
} 

export const clearResList = () => {
    elements.searchResList.innerHTML='';
} 

const limitReceipeTitle = (receipeTitle, limit=17)=>{
    const receipeTitleArray = receipeTitle.split(" ");
    const newTitle = [];
    if(receipeTitle.length > limit){
        receipeTitleArray.reduce((acc, cur)=>{
            if(acc + cur.length <= limit){
                newTitle.push(cur);
                return acc + cur.length
            }
        }, 0)
        return `${newTitle.join(" ")}...`;
    }
    else return receipeTitle;
}
