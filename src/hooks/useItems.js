import { useEffect, useState } from "react"

const useItems = () => {
    const [items, setItem] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);
    return [items, setItem]
}

export default useItems;