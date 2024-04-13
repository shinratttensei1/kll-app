// src/components/CourseNav.js
import React from 'react';

function CourseNav() {
    return (
        <div className="course-nav">
            <h3>Courses</h3>
            <ul>
                <li><a href="#intro">Introduction</a></li>
                <li><a href="#reading">Reading Practice</a></li>
                <li><a href="#writing">Writing Skills</a></li>
                {/* Add other course links as necessary */}
            </ul>
        </div>
    );
}

export default CourseNav;
