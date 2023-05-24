import axios from "axios";

export const fetchProducts = async cb => {
    try {
        const { data } = await axios.get("http://localhost:5000/api/product");
        console.log(data);
        cb(() => data.data);
    } catch (error) {
        console.log(error);
    }
};
