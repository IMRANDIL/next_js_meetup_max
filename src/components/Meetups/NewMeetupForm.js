import React from 'react';
import { useRef } from 'react';
import Card from '../UI/Card';
import classes from './NewMeetupForm.module.css'

const NewMeetupForm = (props) => {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();



        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;


        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }

        props.onAddMeetup(meetupData)
    }



    return (
        <Card>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id='title' ref={titleInputRef} autoComplete='off' />
                </div>



                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id='image' ref={imageInputRef} autoComplete='off' />
                </div>


                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" required id='address' ref={addressInputRef} autoComplete='off' />
                </div>

                <div className={classes.control}>
                    <label htmlFor="desc">Description</label>
                    <textarea id="desc" rows="5" required ref={descriptionInputRef} />
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
};

export default NewMeetupForm;
