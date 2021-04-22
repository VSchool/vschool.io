import React from 'react'
import FormSlice from './FormSlice'

export default function GiBillPage() {
    return (
        <>
            <FormSlice 
                sliceHeader={{heading: 'Online Coding Bootcamp for Veterans', subHeading: 'VA Approved'}}
                formHeading={'Use your G.I Bill benefits to learn to code and land a job in tech. Fill out the form to learn more!'}
                buttonText={'Request Information'}
                image={{url: 'https://images.unsplash.com/photo-1602640557390-88800eee460f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', alt:'alt text here'}}
            />
        </> 
    )
}
