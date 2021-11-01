
import React, { Fragment } from 'react';

// take our props(show)
export const ShowCard = (show) => {
    return (
        // Set up style and format for the card itself. 
        <Fragment>
            <figure>
                <img className="rounded" src={show.venueImg} alt="placeholder"></img>
            </figure>
            <div className="ml-25">
                <h2>
                    {show.venue}
                </h2>
                <p>
                    {show.desc}
                </p>
                <button className="btn btn-dark">Get Tickets</button>
            </div>
        </Fragment>
    )
}