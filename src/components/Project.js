import React from 'react'
import { ShowCard } from './ShowCard'
//  images
import Project1 from "../images/Proj1.JPG"
import Project2 from "../images/Proj2.gif"
import Project3 from "../images/Proj3.JPG"


export const Project = () => {
    const Data = [
        {
            venue: "Project 1 - City Scan",
            venueImg: Project1,
            desc: "This was my first TEAM project. City-Scan allows users to search COVID-related data on a state level, while evaluating quality of life data such as healthcare, commute and cost of living of specific cities within the state. ",
            id: "1",
        },
        {
            venue: "Project 2 - Work Day Scheduler",
            venueImg: Project2,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia distinctio quisquam, perspiciatis consequuntur odio sapiente rem! Ratione harum magni, neque laboriosam natus omnis officia aspernatur corrupti quidem, aut sapiente cum iure dolore ullam. Laborum perspiciatis delectus iure consectetur vel porro modi numquam vero dignissimos eveniet!",
            id: "2",
        },
        {
            venue: "Project 3 - Weight Tracker",
            venueImg: Project3,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia distinctio quisquam, perspiciatis consequuntur odio sapiente rem! Ratione harum magni, neque laboriosam natus omnis officia aspernatur corrupti quidem, aut sapiente cum iure dolore ullam. Laborum perspiciatis delectus iure consectetur vel porro modi numquam vero dignissimos eveniet!",
            id: "3",
        },
        {
            venue: "TBA",
            venueImg: Project1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia distinctio quisquam, perspiciatis consequuntur odio sapiente rem! Ratione harum magni, neque laboriosam natus omnis officia aspernatur corrupti quidem, aut sapiente cum iure dolore ullam. Laborum perspiciatis delectus iure consectetur vel porro modi numquam vero dignissimos eveniet!",
            id: "4",
        },
    ]

    return (
        //Set container we want the showcard to be nested in
        <section id="projects" class="section bg-light">
            <div class="container">
                    <div>
                        <h1 className="text-large bg-dark rounded">Highlighted Projects</h1>
                    </div>
                <div className="projects">
                {/* Grabbing the show info and mapping through */}
                {Data.map((project) => (
                    // placing each set of show info into its own ShowCard
                    <ShowCard 
                    venue={project.venue}
                    venueImg={project.venueImg}
                    desc={project.desc}
                    key={project.id}
                    />
                ))}
                </div>
            </div>
        </section>
    )
}