import axios from 'axios';

const getResults = async (query) => {
    const proxy='https://cors-anywhere.herokuapp.com/';
    const key = 'a8d702b85cd80721eec3c3597c76b163';
    const res = axios.get(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
    console.log(res);
}

getResults('pizza')