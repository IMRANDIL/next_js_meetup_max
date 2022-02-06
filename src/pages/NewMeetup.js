import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../components/Meetups/NewMeetupForm';

const NewMeetup = () => {
    const navigate = useNavigate()

    function handleAddMeetup(meetupData) {

        fetch(`https://nextjs-52506-default-rtdb.firebaseio.com/meetups.json`, {
            method: 'post',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'Application/json'
            }
        }).then(() => {
            navigate('/')
        })
    }




    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={handleAddMeetup} />
        </section>
    )
};

export default NewMeetup;
