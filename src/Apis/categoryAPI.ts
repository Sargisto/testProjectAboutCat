import axios from "axios";

export const getCategories = async () => {
    const data = await axios.get(`https://api.thecatapi.com/v1/categories`)
        .then(res => {
            const newCategories = res.data;
            return newCategories;
        })

    return data;
}