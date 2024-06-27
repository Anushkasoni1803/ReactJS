# Namaste React 
react:
npm:
parcel:

CODE1:
const heading = React.createElement(   
    "h1",
    { id: "heading"},
    "Hello world using React")
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)

EXPLANATION:
React.createElement is an object placed in the heading, when we render this element onto the DOM then it becomes an HTML Element
To Render, first, create root using reactDOM and then render the heading
root.render takes the heading, converts it to html element and push to the browser.
this will replace the existing "namaste react " in the .html file for the same div/id. 
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)

NEED OF JSX:
In HTML:
<div id="root">
        <h1 id = "heading"> "namaste react" </h1>
</div>

Same In React:
const heading = React.createElement(   
    "h1",
    { id: "heading"},
    "Hello world using React"
)
In the above code while making a h1 tag it looks too complex to make n no. of times. 
It looks as if we are trying to write HTML in React.
Infact looking at the comparison writing in HTML vs React, its easier to write in HTML, thats why
Here comes the need of JSX

JSX:
JavaScript Syntax extension or JavaScript XML
Below is a JSX Example:
const heading= <h1>Hello world using JSX</h1>
Warning:
1. JSX is not a part of React. React Apps can be build een without JSX but it is not developer friendly.
2. JSX is HTML-like or XML-like syntax
3. It uses camel Case
4. It is not HTML inside JavaScript.
5. JavaScript engine cannot understand JSX as it only understands ECMAScript

Since the JavaScript engine cannot understand JSX as it only understands ECMAScript,
Here comes the role of Babel which helps us out here. The process is TRANSCOMPILATION or TRANSPILATION
Transpilation ⇒ Converting the code in such a format that the browsers can understand.

HOW-
Parcel(an amazing package of npm) Before the code gets to JS Engine it is sent to Parcel and
Transpiled there. Then after transpilation, the browser gets the code that it can understand.
Parcel is like a manager who gives the responsibility of transpilation to a package called Babel.
Babel is a package that is a compiler/transpiler of JavaScript that is already present inside ‘node-modules’. It takes JSX and converts it into the code that browsers understand, as soon as
we write it and save the file. 

JSX (transpiled by Babel) ⇒ React.createElement ⇒ ReactElement
⇒ JS Object ⇒ HTML Element(render)
Learn more about Babel on babeljs.io

Advantages of using JSX.
1) Sanitizes the data
If someone gets access to your JS code and sends some malicious
data which will then get displayed on the screen, that attack is
called cross-site scripting.
It can read cookies, local storage, session storage, get
cookies, get info about your device, and read data. JSx takes
care of your data.
If some API passes some malicious data JSX will escape it. It
prevents cross-site scripting and sanitizes the data before
rendering
2) Makes code readable
JSX makes it easier to write code as we are no longer creating
elements using React.createElement()
3) Makes code simple and elegant
4) Show more useful errors and warnings
5) JSX prevents code injections (attacks)


COMPONENTS: 
"Everything inside React is a component."
Components are of 2 types: Class Based- old fashioned and rarely used and Functional Components - A new way of writing code, most commonly used.

What is the difference between React Element and React Functional component
React Element: 
const heading= <h1>Hello world using JSX</h1>

React Functional Component:
1. It is a Normal JS function 
2. Use First Letter Capital for Name eg: H in Head
3. Must return some JSX or a react Element

The main difference is how you render this functional component and It must return some JSX or a react Element


const Head = () => (
    <h1> Hello World as React Component </h1>
) 
or 
const Head = function(){
    return <h1> Hello World as React Component </h1>
}

Note: Using Arrow functions is industry-wise standard for react functional component

Are React function component rendered the same way as others?
No, to render functional component using Angular brackets as shown
root.render(<Head />) 

What is Component Composition -
It is nothing but nested components or components inside components.
const heading=()=>(
    <h1>Namaste</h1>
)
Below is component composition
const Heading = () =>(
    <div>
        <heading/>
        <h1>Hello world using functional component</h1>
    </div>
)



