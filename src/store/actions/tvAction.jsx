import axios from "../../utils/Axios"
import { settv } from "../reducers/tvReducer";



export const asyncgettv = (id) => async(dispatch,getState) => {
    const details = await axios.get(`tv/${id}`);
    const external_id = await axios.get(`tv/${id}/external_ids`);
    const recomend = await axios.get(`tv/${id}/recommendations`);
    const similar = await axios.get(`tv/${id}/similar`);
    const videos = await axios.get(`tv/${id}/videos`);
    const watchprovider = await axios.get(`tv/${id}/watch/providers`);

    const obj = {
        details : details.data,
        external_id : external_id.data,
        recommendations : recomend.data.results,
        similar : similar.data.results,
        videos : videos.data.results.filter((elem) => elem.name === 'Official Trailer'),
        watchprovider : watchprovider.data.results.IN
    };

    dispatch(settv(obj));
}