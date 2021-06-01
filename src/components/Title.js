import React from "react";

const Title = (props) => {
    return (
        <>
            <h1>{props.titleText}</h1>
            <button onClick={props.onClickHandler}>Change App state</button>
        </>
    )
}

export default Title;