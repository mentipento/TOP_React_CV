import { useState } from 'react'

export default function Personal () {
    return (
        <>
            <div className="personal">
                <h2>Personal Information</h2>
                <form action="">
                    <label htmlFor="first-name">First Name: </label>
                    <input type="text" id='first-name' />
                    <label htmlFor="last-name">Last Name: </label>
                    <input type="text" id='last-name' />
                    <label htmlFor="email">Email: </label>
                    <input type="text" id='email' />
                    <label htmlFor="phone">Phone: </label>
                    <input type="text" id='phone' />
                    <label htmlFor="address">Address: </label>
                    <input type="text" id='address' />
                    <label htmlFor="linkedin">LinkedIn: </label>
                    <input type="text" id='linkedin' />
                    <label htmlFor="github">GitHub: </label>
                    <input type="text" id='github' />
                    <button type='submit'>Save</button>
                </form>
            </div>
            <div className="education">
                <h2>Education</h2>
                <label htmlFor="institution">Institution: </label>
                <input type="text" id='institution' />
                <label htmlFor="institution-start">Start</label>
                <input type="month" id='institution-start' />
                <label htmlFor="institution-end">End</label>
                <input type="month" id='institution-end' />
            </div>
                <div className="work">
                <h2>Work Experience</h2>
                <label htmlFor="company">Company: </label>
                <input type="text" id='company' />
                <label htmlFor="company-start">Start</label>
                <input type="month" id='company-start' />
                <label htmlFor="company-end">End</label>
                <input type="month" id='company-end' />
            </div>
        </>
    )
}