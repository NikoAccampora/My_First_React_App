import React from "react";
//import 'bootstrap/dist/css/boopstrap.css'

function Message() {
    const name = 'Niko';
    if (name)
        return <h1>Hello, {name}!</h1>
    return <h1>Hello World!</h1>
}

export default Message;