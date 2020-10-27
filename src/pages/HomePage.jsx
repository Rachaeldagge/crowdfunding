import React, { useState, useEffect } from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import ProjectForm from "../components/Projectcreationform/ProjectCreationForm";

function HomePage() {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/`).then((results) => {
      return results.json();
    })
    .then((data) => {
    setProjectList(data)
    });
  }, []);

  return (
    <div id="project-list"> 
    <ProjectForm /> 
    {projectList.map((projectData, key) => {
    return <ProjectCard key={key} projectData={projectData} />
    })}
    </div>
    ); 
}

export default HomePage;
