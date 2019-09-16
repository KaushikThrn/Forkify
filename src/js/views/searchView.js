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

const createButtons = (page, type) =>`
    <button class="btn-inline results__btn--${type}" data-goto="${type === 'prev'? page-1: page+1}">
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type==='prev'? 'left':'right'}"></use>
        </svg>
        <span>Page ${type === 'prev'? page-1: page+1}</span>
    </button>
`;

const renderButtons = (page, numResults, recsPerPage) => {
    const pages = Math.ceil(numResults / recsPerPage);
    let button;
    if (page == 1 && pages > 1){
        button = createButtons(page, 'next')
    } else if (page<pages){
        button = `${createButtons(page, 'prev')}
                  ${createButtons(page, 'next')}
        `
    } else if (page === pages && pages >1) {
        button = createButton(page, 'prev')
    }
    elements.searchResPages.insertAdjacentHTML('afterbegin', button)
     
}

export const renderResults = (recipes, page = 1, recsPerPage = 10) => {
    const start = (page - 1) * recsPerPage;
    const end = start + recsPerPage;
    recipes.slice(start, end).forEach(renderReceipe);
    renderButtons(page, recipes.length, recsPerPage);
}

export const clearInput = () => {
    elements.searchInput.value='';
} 

export const clearResList = () => {
    elements.searchResList.innerHTML='';
    elements.searchResPages.innerHTML='';
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
