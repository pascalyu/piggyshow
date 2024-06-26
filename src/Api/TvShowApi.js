import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3";
export const BACKDROP_URL = "https://image.tmdb.org/t/p/";
export class TvShowApi{

    static async fetchPopularTvShow(){
        try{
            const response = await axios.get(`${BASE_URL}/tv/popular?api_key=${process.env.REACT_APP_API_KEY_PARAM}`)
            return response.data.results;
        }
        catch (e) {
            console.log(e);
        }
    }

    static async fetchRecommendedTvShow(serieId){
        try{
            const response = await axios.get(`${BASE_URL}/tv/${serieId}/recommendations?api_key=${process.env.REACT_APP_API_KEY_PARAM}`)
            return response.data.results;
        }
        catch (e) {
            console.log(e);
        }
    }


    static async fetchTvShowFromName(name){
        try{
            const response = await axios.get(`${BASE_URL}/search/tv?query=${name}&api_key=${process.env.REACT_APP_API_KEY_PARAM}`)
            return response.data.results;
        }
        catch (e) {
            console.log(e);
        }
    }
}