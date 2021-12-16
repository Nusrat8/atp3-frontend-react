import { useEffect } from "react";

export const UseFetch = (url, callback) => {

    const getUserdata = async () => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    useEffect(() => {
        const getJsonData = async () => await getUserdata();
        getJsonData().then(data => callback(data));
    }, []);
}