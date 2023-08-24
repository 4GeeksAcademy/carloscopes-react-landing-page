import React from "react";

const Jumbotron = () => {
    return(
        <div className="mt-2 mx-4 p-4 bg-light text-dark rounded">
            <h1>Landing Page with React</h1>
            <p>I am learning React, a popular JavaScript library for building user interfaces. React allows me to create reusable components that can render dynamic data and handle user interactions. I am following the official documentation and some online tutorials to learn the basics of React, such as JSX, props, state, hooks, and lifecycle methods.</p>
            <button type="button" className="btn btn-primary">Learn React with me</button>
        </div>
    )
}

export default Jumbotron;