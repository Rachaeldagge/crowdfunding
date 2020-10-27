// {
//     "title": "Project one",
//     "description": "The first project.",
//     "goal": 150,
//     "image": "https://via.placeholder.com/300.jpg",
//     "is_open": true,
//     "date_created": "2020-03-20T14:28:23.382748Z",
//     "owner": 1
//   }


import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function ProjectForm() {
    const [projectData, setProjectData] = useState({
        title: "",
        description: "",
        goal: "",
        image: "",
        is_open: "",
        date_created: "",
        owner: 1
    });
    const history = useHistory();

    const postData = async () => {
        console.log("hello")
        const response = await fetch(
        `${process.env.REACT_APP_API_URL}projects/`,
        {
        method: "post",
        headers: { 
            'Authorization': `Token ${window.localStorage.getItem('token')}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
        }
        );
        return response.json();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("goodbye", projectData)
        if (projectData.title && projectData.description && projectData.goal && projectData.image && projectData.is_open && projectData.date_created && projectData.owner) {
        postData();
        history.push("/");
        };

    };


    const handleChange = (e) => {
        const { id, value } = e.target;
        setProjectData((prevProjectData) => ({
        ...prevProjectData,
        [id]: value,
        }));
    };

    return (
        <form>
        <div>
        <label htmlFor="title">Title:</label>
        <input
            type="text"
            id="title"
            placeholder="Enter title"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="description">Description:</label>
        <input
            type="text"
            id="description"
            placeholder="description"
            onChange={handleChange}
        />
        </div>

        <div>
        <label htmlFor="goal">Goal:</label>
        <input
            type="text"
            id="goal"
            placeholder="goal"
            onChange={handleChange}
        />
        </div>

        <div>
        <label htmlFor="image">Image:</label>
        <input
            type="text"
            id="image"
            placeholder="image"
            onChange={handleChange}
        />
        </div>

        <div>
        <label htmlFor="is_open">Is the project open?</label>
        <input
            type="checkbox"
            id="is_open"
            placeholder="is_open"
            onChange={handleChange}
        />
        </div>

        <div>
        <label htmlFor="date_created">Date created:</label>
        <input
            type="text"
            id="date_created"
            placeholder="date_created"
            onChange={handleChange}
        />
        </div>

        <button type="submit" onClick={handleSubmit}>
        Submit
        </button>
        </form>
     );
}
export default ProjectForm;