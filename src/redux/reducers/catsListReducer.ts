import { getCatList } from "../../Apis/catListAPI";
import { ICat } from "../../Models/CatListModel";

export function catsListReducer(state: Array<any> = [], action: any) {

    if (action.type === "get-cat-list") {
        return [...action.payload.data];
    };

    return state;
}

export const initialCatsList: Array<ICat> = [];

export function getListCat(state: any) {
    return state.catsList;
}


export function setData(newData: Array<ICat>) {
    return {
        type: "get-cat-list",
        payload: {
            data: newData
        }
    }
}

export function loadCatList(page?: number, categoryId?: number ) {
    return (dispatch: any, getState: any) => 
        getCatList(page, categoryId).then((catListData: Array<ICat>) => {
            dispatch(setData(catListData));
        })
}