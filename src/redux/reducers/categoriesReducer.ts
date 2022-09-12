import { getCategories } from "../../Apis/categoryAPI";
import { ICategoryCat } from "../../Models/CategoryModel";

export function categoriesReducer(state: Array<any> = [], action: any) {

    if (action.type === "get-cat-categories") {
        return action.payload.data;
    };

    return state;
}

export const initialCategories: Array<ICategoryCat> = [];

export function getCategory(state: any) {
    return state.categories;
}

// action creator
export function setData(newData: Array<ICategoryCat>) {
    return {
        type: "get-cat-categories",
        payload: {
            data: newData
        }
    }
}

export function loadCategories() {
    return (dispatch: any, getState: any) => 
        getCategories().then((categoryData: Array<ICategoryCat>) => {
            dispatch(setData(categoryData));
        })
}