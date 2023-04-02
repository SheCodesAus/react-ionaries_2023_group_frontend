import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';

function ProjectEdit() {
    const token = localStorage.getItem('token')
    const { id } = useParams();
    const navigate = useNavigate();
    const [projectData, setProjectData] = useState([]);

    useEffect( () => {
        fetch(`${import.meta.env.VITE_API_URL}project/${id}`)
        .then ((results) => {
            return results.json();
        })
        .then ((data) => {
            setProjectData(data)
        });
    }, []);

    const handleChange = (event) => {
        setProfile({ ...profile, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        if (projectData.title) {
            postData().then((response) => {
                console.log(response)
                navigate(`/profile/${projectData.profile_id}`)
            })
        }  
    };

    const postData = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}project/${id}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(profile)
        })
        return response.json();
    }
    

    return (
        <div>
            <img src={projectData.image}></img>
            <h3>{projectData.title}</h3>
            <p>{projectData.description}</p>

            <div>
                <label htmlFor='projectTitle'>Title:</label>
                <input onChange={handleChange} type="text" id='projectTitle' name='title' value={projectData.title}></input>
            </div>

            <div>
                <label htmlFor='projectImage'>Project Image:</label>
                <input onChange={handleChange} type="url" id='projectImage' name='image' value={projectData.image}></input>
            </div>

            <div>
                <label htmlFor='projectDescription'>Description:</label>
                <input onChange={handleChange} type="text" id='projectDescription' name='description' value={projectData.description}></input>
            </div>

            <div>
                <label htmlFor='projectLink'>Project Link:</label>
                <input onChange={handleChange} type="url" id='projectLink' name='url' value={projectData.url}></input>
            </div>

            <div>
            <button class="primary" type="submit" onClick={handleSubmit}>Save</button>
            <Link to={`/profile/${projectData.profile_id}`}>
                <button class="secondary" type="button">Cancel</button>
            </Link>
            </div>

        </div>
    )

};

export default ProjectEdit;