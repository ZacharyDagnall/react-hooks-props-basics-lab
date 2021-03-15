import React from "react";

function Link(props){
return <div className="link">
            <a href={props.link}>{props.name}</a>
        </div>
}

export default Link

//this is different than the test expected it but i think it's an alternative and equally good solution