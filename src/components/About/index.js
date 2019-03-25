import React from 'react';

import avatar from '../../img/avatar.jpg'

export default function About() {
    return (
        <div className='uk-container uk-position-center uk-text-right uk-width-3-5'>
            <img alt="avatar" className="uk-border-circle" width="150" height="150" src={avatar}/>
            <p> Hi, my name is Khôi </p>
            <p> I'm from Hà Nội, Việt Nam </p>
            <p> I graduated from Bucknell University with a B.A. degree in Computer Science </p>
            <p> I'm currently working as a project developer for a Digital Humanities project at Bucknell University </p>
            <p> My interests include front-end development, UI/UX design, and data visualization </p>
            <p style={{'font-size': '0.85em'}}>
                le.anh.khoi.231@gmail.com / <a style={{'text-decoration': 'underline'}} href='https://www.linkedin.com/in/le-anh-khoi/'>linkedin</a> / <a style={{'text-decoration': 'underline'}} href='https://github.com/lak231/'>github</a> / <a style={{'text-decoration': 'underline'}} href='https://drive.google.com/open?id=1K2exlariN2hpKQLGvopXIYQIq_Uo9ziW'>resume</a></p>
        </div>
    )
}