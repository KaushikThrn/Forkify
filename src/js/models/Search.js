import axios from 'axios';
import { throws } from 'assert';

export default class Search{
    constructor(query){
        this.query=query;
    }
    async getResults(){
        const proxy='https://cors-anywhere.herokuapp.com/';
        const key = 'a8d702b85cd80721eec3c3597c76b163';
        try {
            const res = await axios.get(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            console.log(res);
            this.result=res.data.recipes;
        }
        catch (err){
            console.log(err)
        }
    
    }

}

