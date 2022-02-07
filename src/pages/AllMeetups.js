import React, { useEffect } from 'react';
import { useState } from 'react';
import MeetupList from '../components/Meetups/MeetupList';





const AllMeetups = () => {
    const [loading, setLoading] = useState(true);
    const [loaddata, setData] = useState([]);

    useEffect(() => {
        setLoading(true)
        fetch(`https://nextjs-52506-default-rtdb.firebaseio.com/meetups.json`).then((response) => {
            return response.json()
        }).then((data) => {
            const meetups = [];
            for (const key in data) {

                const meetup = {
                    id: key,
                    ...data[key]
                }

                meetups.push(meetup)
            }

            setLoading(false);
            setData(meetups)
        });
    }, [])



    if (loading) {
        return <section>
            <p>Loading...</p>
        </section>
    }


    return <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={loaddata} />


    </section>;
};

export default AllMeetups;
