import axios from "../../utils/Axios"
import { setperson } from "../reducers/personReducer";

export const asyncgetperson = (id) => async(dispatch,getState) => {
    const details = await axios.get(`person/${id}`);
    const external_id = await axios.get(`person/${id}/external_ids`);
    const credits = await axios.get(`person/${id}/combined_credits`);
    const moviecredits = await axios.get(`person/${id}/movie_credits`);
    const tvcredits = await axios.get(`person/${id}/tv_credits`);
    
    
    var obj = {
        details : details.data,
        external_id : external_id.data,
        combcred : credits.data.cast,
        moviecredits : moviecredits.data.cast,
        tvcredits : tvcredits.data.cast
    };

   
    

    dispatch(setperson(obj));
    
}