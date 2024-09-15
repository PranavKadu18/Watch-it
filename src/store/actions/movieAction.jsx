import axios from "../../utils/Axios"
import { setMovie } from "../reducers/movieReducer";



export const asyncgetmovie = (id) => async(dispatch,getState) => {
    const details = await axios.get(`movie/${id}`);
    const external_id = await axios.get(`movie/${id}/external_ids`);
    const recomend = await axios.get(`movie/${id}/recommendations`);
    const similar = await axios.get(`movie/${id}/similar`);
    const videos = await axios.get(`movie/${id}/videos`);
    const watchprovider = await axios.get(`movie/${id}/watch/providers`);

    const obj = {
        details : details.data,
        external_id : external_id.data,
        recommendations : recomend.data.results,
        similar : similar.data.results,
        videos : videos.data.results.filter((elem) => elem.name === 'Official Trailer'),
        watchprovider : watchprovider.data.results.IN
    };

    dispatch(setMovie(obj));
}