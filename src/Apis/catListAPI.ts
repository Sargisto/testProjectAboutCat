import axios from "axios";

export const getCatList = async (page?: number, categoryId?: number) => {
    const data = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page  ? page : ''}&category_ids=${categoryId ?? ''}`)
        .then(res => {
            const newCateList = res.data;
            return newCateList;
        })

    return data;
}