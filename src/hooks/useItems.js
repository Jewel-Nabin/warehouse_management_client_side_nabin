import { useEffect, useState } from "react"

const useItems = () => {
    const [items, setItem] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-fortress-67873.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);
    return [items, setItem]
}

export default useItems;