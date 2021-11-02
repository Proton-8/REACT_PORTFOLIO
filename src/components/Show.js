import React from 'react'
import { ShowCard } from './ShowCard'
//  images
import bar1 from "../images/Proj1.JPG"
import bar2 from "../images/Proj2.gif"
import bar3 from "../images/Proj3.JPG"


export const Show = () => {
    const Data = [
        {
            venue: "Project 1 - City Scan",
            venueImg: bar1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia distinctio quisquam, perspiciatis consequuntur odio sapiente rem! Ratione harum magni, neque laboriosam natus omnis officia aspernatur corrupti quidem, aut sapiente cum iure dolore ullam. Laborum perspiciatis delectus iure consectetur vel porro modi numquam vero dignissimos eveniet!",
            id: "1",
        },
        {
            venue: "Project 2 - Work Day Scheduler",
            venueImg: bar2,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia distinctio quisquam, perspiciatis consequuntur odio sapiente rem! Ratione harum magni, neque laboriosam natus omnis officia aspernatur corrupti quidem, aut sapiente cum iure dolore ullam. Laborum perspiciatis delectus iure consectetur vel porro modi numquam vero dignissimos eveniet!",
            id: "2",
        },
        {
            venue: "Project 3 - Weight Tracker",
            venueImg: bar3,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia distinctio quisquam, perspiciatis consequuntur odio sapiente rem! Ratione harum magni, neque laboriosam natus omnis officia aspernatur corrupti quidem, aut sapiente cum iure dolore ullam. Laborum perspiciatis delectus iure consectetur vel porro modi numquam vero dignissimos eveniet!",
            id: "3",
        },
        {
            venue: "TBA",
            venueImg: bar2,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia distinctio quisquam, perspiciatis consequuntur odio sapiente rem! Ratione harum magni, neque laboriosam natus omnis officia aspernatur corrupti quidem, aut sapiente cum iure dolore ullam. Laborum perspiciatis delectus iure consectetur vel porro modi numquam vero dignissimos eveniet!",
            id: "4",
        },
    ]

    return (
        //Set container we want the showcard to be nested in
        <section id="shows" class="section bg-light">
            <div class="container">
                    <div>
                        <h1 className="text-large bg-dark rounded">Highlighted Projects</h1>
                    </div>
                <div className="shows">
                {/* Grabbing the show info and mapping through */}
                {Data.map((show) => (
                    // placing each set of show info into its own ShowCard
                    <ShowCard 
                    venue={show.venue}
                    venueImg={show.venueImg}
                    desc={show.desc}
                    key={show.id}
                    />
                ))}
                </div>
            </div>
        </section>
    )
}