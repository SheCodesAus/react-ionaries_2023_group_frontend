import React, { useState } from "react";

function NewProject() {
    const token = localStorage.getItem('token')
    const [project, setProject] = useState({
        title: true,
        image: "",
        description: "",
        url: "",
    });

    const handleChange = (event) => {
        setProject({ ...project, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (project.title) {
            postData().then((response) => {
                console.log(response)
            })
        }  
    };


    const postData = async () => {
        const token = window.localStorage.getItem("token");
        const response = await fetch(`${import.meta.env.VITE_API_URL}project/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "authorization": `token ${token}`
            },
            body: JSON.stringify(project)
        })
    return response.json();
}   
    
    return (
        <form className='form' id="profile-form">
            <h3>Project</h3>
            <div> 
                <label htmlFor='projectTitle'>Project Title:</label>
                <input onChange={handleChange} type="text" id='projectTitle' name='title'></input>
            </div>

            <div>
                <label htmlFor='projectImage'>Project Image:</label>
                <input onChange={handleChange} type="url" id='projectImage' name='image'></input>
            </div>

            <div>
                <label htmlFor='projectDescription'>Project Description:</label>
                <input onChange={handleChange} type="text" id='projectDescription' name='description'></input>
            </div>

            <div>
                <label htmlFor='projectLink'>Project Link:</label>
                <input onChange={handleChange} type="url" id='projectLink' name='url'></input>
            </div>

            <button class="primary" type="submit" onClick={handleSubmit}>Save Project</button>
    </form>
    )
}

export default NewProject;