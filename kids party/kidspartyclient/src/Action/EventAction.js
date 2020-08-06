import {
    GET_ALL_EVENT,
    ADD_EVENT,
    DELETE_EVENT,
    MODIF_EVENT,
} from "./Types";
import Axios from "axios";

// Get all Product from Api to Store
export const getAllevents = (payload) => ({
    type: GET_ALL_EVENT,
    payload,
});
export function getEventsFromApi() {
    return (dispatch) =>
        Axios.get("http://localhost:3001/Evenement").then(
            (res) => {
                console.log('ee' + res.date)
                dispatch(getAllevents(res.data));
            }
        );
}