import React, { useContext } from 'react';


import FavoritesContext from '../Store/favourites-context';

import MeetupList from '../components/Meetups/MeetupList';

const Favourites = () => {
    const favouriteCtx = useContext(FavoritesContext);

    let content;

    if (favouriteCtx.totalFavourites === 0) {
        content = <p>You Got No Favourites Yet. Start Adding Some..</p>
    } else {
        content = <MeetupList meetups={favouriteCtx.favourites} />
    }


    return <section>
        <h1>My favourites</h1>

        {content}
    </section>
};

export default Favourites;
