import React from "react";
import Link from "./Link"

function About(props) {
  console.log(props.links)
  return (
    <div id="about">
      <h2>About Me</h2>
      {!!props.bio && props.bio!="" && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h3>Links</h3>
      <Link name={"GitHub"} link={props.links.github}/>
      <Link name={"LinkedIn"} link={props.links.linkedin} />
    </div>
  );
}

export default About;
