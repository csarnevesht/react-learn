import React from "react"

function ImageData(props) {
    return (
        <div className="img">
            <img src={props.url} alt="" />
            <h2 className="top">{props.name}</h2>
        </div>
    )
}

export default ImageData