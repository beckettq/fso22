import React from 'react'

let makeli = (part) => {
    return <p key = {part.id}>{part.name} {part.exercises}</p>
}


const Course = ({ course }) => {
    const exerciseCount = course.parts.reduce((prev, curr) => {return prev + curr.exercises}, 0)
    return (
        <div>
            <h1>{course.name}</h1>
            <div>
                {course.parts.map(makeli)}
            </div>
            <p>total of {exerciseCount} exercises</p>
        </div>

        
    )
}

export default Course