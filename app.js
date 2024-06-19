const heading = React.createElement(
    "h1",
    { id: "heading"},
    "Hello world using React")
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)

const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div",
    {id:"child" },
    [React.createElement("h1",{},"I'm H1 Tag"),
    React.createElement("h1",{},"I'm H1 Tag")])
)
const root1= ReactDOM.createRoot(document.getElementById("root1"));
root1.render(parent)
