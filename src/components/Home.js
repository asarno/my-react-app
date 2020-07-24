import React, { useEffect, useContext } from 'react';
import { GlobalContext } from "../utils/context/GlobalState";

function Home() {
    const { items, getItems } = useContext(GlobalContext);

    useEffect(() => {
        if (items.length === 0) {
            getItems();
        }
    });

    return (
        <div className="flex-column">
            home page
        </div>
    );
}

export default Home;