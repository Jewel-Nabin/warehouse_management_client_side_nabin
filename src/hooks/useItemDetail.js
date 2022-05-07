import { useEffect, useState } from "react"

const useItemDetail = itemId => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = ``;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [setItem]);
    return (item);
};

export default useItemDetail;