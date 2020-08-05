import { combineReducers } from "redux";
import EventReducer from "./EventReducer";
import ProfessionnelReducer from "./ProfessionnelReducer";
import CategorieReducer from "./CategorieReducer";
import CommentaireReducer from "./CommentaireReducer";
import VisiteurReducer from "./VisiteurReducer";
import AdministrateurReducer from "./AdministrateurReducer";


const allReducers = combineReducers({
    event: EventReducer,
    administrateur: AdministrateurReducer,
    professionnel: ProfessionnelReducer,
    categorie: CategorieReducer,
    commentaire: CommentaireReducer,
    visiteur: VisiteurReducer,

});

export default allReducers;