import React from "react";
import ReactDOM from 'react-dom';
// import VideoJS from './VideoJS.js'
import { useNavigate } from 'react-router-dom';

function Project(props) {
    
    let navigate = useNavigate();
    return (
        <div id={props.name} className="project" onClick={() => {navigate("/ProjectPage"+"/"+props.id)}}>
            <img className = "projectImage" src={props.image} alt={props.name}></img>
            {/* <VideoJS src={"videos/" + props.name +".mp4"} poster={"images/" + props.name + ".jpg"} /> */}

            <h3 id="projectTintle">{props.name}</h3>
            <p className="projectDescription">
                {props.description}
            </p>
            {
            // This method below will check to see how many languages have been entered, and set a comma on each except the last one 
            }
            <p>languages : {
            
            props.languages.map(language => {
                if(props.languages.indexOf(language) === props.languages.length - 1) {
                    return language;
                }
                else {
                    return language + ", ";
                }
            })
            
            }</p>
            <p>Required programs: {
            
            props.programs.map(program => {
                if(props.programs.indexOf(program) === props.programs.length - 1) {
                    return program;
                }
                else {
                    return program + ", ";
                }
            })
            
            
            }</p>
            <p>Platforms: {
            
            props.platforms.map(platform => {
                if(props.platforms.indexOf(platform) === props.platforms.length - 1) {
                    return platform;
                }
                else {
                    return platform + ", ";
                }
            })
            
            
            }</p>
        </div>
    );
    
    
}

function displayList(itemList) {
        itemList. map(item => {
            if(itemList.indexOf(item) === itemList.length - 1) {
                return item;
            }
            else {
                return item + ", ";
            }
    })
}

    export default Project;