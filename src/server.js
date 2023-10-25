import axios from "axios";
const API_KEY = '3adf267fe0a1563566a3d2bb402e6628';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovie = async () => {
  const responce = await axios.get('trending/movie/day', {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

 return responce.data;
};

export const searchMovie = async (query) => {
    const data = await axios.get(`search/movie`,{
        params: {
            query:query,
            include_adult: false,
             api_key: API_KEY,
            language: 'en-US',
      page:1,
            
}
    })
    console.log(data)
}