import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDY0ODFkNGE5NmU2NDY2MDgwOWJhZmUzMjU0ODU4MyIsIm5iZiI6MTcyNTkxNDIzOC4xMTg1MSwic3ViIjoiNjZkZjQ4NTFiNzBjYzdmNmZkNzhhN2U3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.AH9MhoFGqWHRKMH8Lmemhxulk20ZVmS5jHj5-0F27-k' 
    }
})

export default instance;