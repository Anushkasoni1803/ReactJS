import React from "react"
import ReactDOM from "react-dom/client";

// const heading = React.createElement(   
//     "h1",
//     { id: "heading"},
//     "Hello world using React")

const heading=()=>(
    <h1>Namaste</h1>
)
const num=10000;
const Heading = () =>(
    <div>
        <heading/>
        {num}
        <h2>{num+2000}</h2>
        <h1>Hello world using functional component</h1>
    </div>
)

const root= ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading)
root.render(<Heading/>)





