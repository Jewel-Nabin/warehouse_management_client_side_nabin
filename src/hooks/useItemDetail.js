import { useEffect, useState } from "react"

const useItemDetail = itemId => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://mysterious-fortress-67873.herokuapp.com/order`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [itemId]);
    return (item);
};

export default useItemDetail;