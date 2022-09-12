import { createStore, combineReducers, applyMiddleware } from "redux";
import {categoriesReducer, initialCategories} from "./reducers/categoriesReducer";
import {catsListReducer, initialCatsList} from "./reducers/catsListReducer";
import thunk from "redux-thunk";

const store = createStore(combineReducers({
    categories: categoriesReducer,
    catsList: catsListReducer
}), {
    categories: initialCategories,
    catsList: initialCatsList
}, 
applyMiddleware(thunk))

export type AppDispatch = typeof store.dispatch

export default store;