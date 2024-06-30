
import axios from 'axios';
const instance  =axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers:{
        accept:"application/json",
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjk2MWM1MzgzNmVkZmNiOTNhZTI1NGQ3ZTAzYzMxMSIsInN1YiI6IjY2NzI3OTJiNDIzNGUyZDBlNTM0NWU5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vza0bRveVz2JxiTTE5zv4DZtW8dZcRnoCes7lXmqrno"
    },
});
export default instance;