import React from 'react'
import avatar from "../../img/avatar.jpg";
import WorkEntry from "./WorkEntry";

export default function Work (props) {
    return (
        <div className='uk-container uk-position-center uk-text-right uk-width-3-5'>
            <WorkEntry time={`present`}
                       description={`A project on digitization of the memoirs of the Moravians. The link above is the old interface of the project, which is being redesigned and improved.`}
                       position='project developer'
                       title='moravian lives'
                       link={`http://moravianlives.org/`}/>

            <WorkEntry time={`spring 2018`}
                       link={`https://lak231.github.io/us-fulltime-college-students-timeuse/`}
                       description={`Interactive data visualizations on U.S. full-time college students' time use.`}
                       position='writer & programmer'
                       title={`U.S. FULL-TIME COLLEGE STUDENTS' TIME USE`}/>

            <WorkEntry time={`fall 2017`}
                       link={`https://patricknewhart.github.io/Antigua/`}
                       description={`An interactive map of Antigua and its sugar mills. The sugar mills on the island are remnants of an era of slavery, thus an integral part of the island's history.`}
                       position='front-end developer'
                       title='antigua sugar mills'/>

            <WorkEntry time={`fall 2017`}
                       link={`https://medium.com/@le.anh.khoi/design-manifesto-8e4283730779`}
                       description={`A manifesto/reflection on human-centered design
                                    processes and principles used in 6 short design sprints for
                                    Human-Computer Interaction course.`}
                       position='writer & programmer'
                       title='Design Manifesto'/>

            <WorkEntry time={`summer 2017`}
                       link={`https://bucknell-hci.github.io`}
                       description={`A website that presents viewers with a series of viewing tasks and tracks their eye-movement using Webgazer, a webcam-based eye-tracking library developed by researchers at Brown University.`}
                       position='researcher'
                       title='Viability of Webcam-based Eye-tracking Method​'/>
        </div>
    )
}