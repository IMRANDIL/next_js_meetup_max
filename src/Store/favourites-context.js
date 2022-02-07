import { createContext, useState } from "react";


const FavoritesContext = createContext({
    favourites: [],
    totalFavourites: 0
});


function FavoritesContextProvider(props) {
    const [userFav, setUserFav] = useState([]);



    function addFavHandler(favoriteMeetup) {
        setUserFav((prevUserFav) => {
            return prevUserFav.concat(favoriteMeetup)
        }) //concat returns a new array...
    }


    function removeFavHandler(meetupId) {
        setUserFav((prevUserFav) => {
            return prevUserFav.filter((meetup) => meetup.id !== meetupId)
        })
    }


    function itemIsFavHandler(meetupId) {
        return userFav.some((meetup) => meetup.id === meetupId)
    }


    const context = {
        favourites: userFav,
        totalFavourites: userFav.length
    };



    return <FavoritesContextProvider value={context}>
        {props.children}
    </FavoritesContextProvider>
}