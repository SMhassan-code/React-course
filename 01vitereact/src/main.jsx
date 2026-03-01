import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Custom React !</h1>
        </div>
    )
}

// const reactElement = {
//     type: "a",
//     props: {
//         href: "https://google.com",
//         target: "_blank"
//     },
//     children: "Click to visit google"
// }

const anotherElement = (
    <a href='https://google.com' target='_blank'>Visit google</a>
)

const username = "Heisenburg"

const reactElement = React.createElement(
    "a",
    {href: "https://google.com", target: "_blank"},
    "Click to visit google ",
    username
)

createRoot(document.getElementById('root')).render(
  
    reactElement
  
)