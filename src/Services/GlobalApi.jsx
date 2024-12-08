import axios from 'axios';

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "3cd7b55643c093b38ac0adcfca7cd455";
const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=3cd7b55643c093b38ac0adcfca7cd455';

// Gửi yêu cầu HTTP GET đến API
const getTrendingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);

// Sửa hàm để trả về kết quả từ axios
const getMovieByGenreId = (id) => {
    return axios.get(movieByGenreBaseURL + "&with_genres=" + id);  
}

export default {
    getTrendingVideos,
    getMovieByGenreId
}
