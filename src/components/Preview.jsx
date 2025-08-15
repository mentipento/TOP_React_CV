import { useState } from "react";

export default function Preview ({firstName, lastName}) {
    return (
        <>
            <div className="preview">

                <div className="preview__personal">
                    <h2>Personal Information</h2>
                    <div className="preview__name">Name: {firstName} {lastName}</div>
                    <div className="preview__mail">Email: peter.parker@gmail.com</div>
                    <div className="preview__phone">Phone: +90 459 4967 32</div>
                    <div className="preview__address">1000 5th Avenue, New York City</div>
                    <div className="preview__social flex">
                        <div className="">LinkedIn</div>
                        <div className="">GitHub</div>
                    </div>
                </div>
                <hr />

                <div className="preview__education">
                    <h2>Education</h2>
                    <div className="flex">
                        <div className="preview__institution">Humboldt University - Berlin</div>
                        <div className="preview__institution-from">09/16 - </div>
                        <div className="preview__institution-to">08/19</div>
                    </div>
                </div>
                <hr />
                <div className="preview__work">
                    <h2>Work experience</h2>
                    <div className="flex">
                        <div className="preview__institution">Whatever company Ltd. - London</div>
                        <div className="preview__institution-from">09/19 - </div>
                        <div className="preview__institution-to">today</div>
                    </div>
                </div>
            </div>
        </>
    )
}