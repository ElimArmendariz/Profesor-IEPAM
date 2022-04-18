import React from "react";
import Course from "../Course";
import HeaderUser from "../HeaderUser";
import { useCoursesHooks } from "../../hooks/useCourseHooks";

import { Title, GridCourses } from "./Courses.styles";

const Courses = () => {
    
    let data = useCoursesHooks()
    if (data === "Loading...") return <div>Loading...</div>
    console.log(data);
    return (
        <>
            <HeaderUser/>
            <Title>TUS CURSOS</Title>
            <GridCourses>
                {data.courses.map((course :any)  => (
                    <Course
                        key = {course.id}
                        courseID = {course.id}
                        name = {course.name}
                        description = {course.description}
                    />
                ))}
            </GridCourses>
        </>
    );
};

export default Courses;
