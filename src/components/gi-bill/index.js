import React from 'react'
import FormSlice from './FormSlice'

export default function GiBillPage() {
    return (
        <>
            <FormSlice 
                sliceHeader={{heading: 'Online Coding Bootcamp for Veterans', subHeading: 'VA Approved'}}
                formHeading={'Use your G.I Bill benefits to learn to code and land a job in tech. Fill out the form to learn more!'}
                buttonText={'Request Information'}
            />
        </> 
    )
}
