import { createContext, useState } from "react";


const FavoritesContext = createContext({
    favourites: [],
    totalFavourites: 0
});


function FavoritesContextProvider(props) {
    const [userFav, setUserFav] = useState([])

    const context = {
        favourites: userFav,
        totalFavourites: userFav.length
    };



    return <FavoritesContextProvider value={context}>
        {props.children}
    </FavoritesContextProvider>
}