import React from 'react';
import './coursePage.css';
import CourseComponent from "../../components/courseComponent";

const CoursePage = ()=> {
    return(
       <section className='course-sec'>
           <h2> Դասընթացներ </h2>
          <CourseComponent/>
       </section>
    )
};

export default CoursePage;