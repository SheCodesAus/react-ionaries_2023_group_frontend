import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function AdminPage() {
    const [approvalList, setApprovalList] = useState([]);
    const [profileLinks, setProfileLinks] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}users`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setApprovalList(data);
        });
    }, []);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}profile`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProfileLinks(data);
        });
    }, []);

    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>LinkedIn url</th>
                    <th>GitHub url</th>
                </tr>
            {/* <h3>Users to be approved:</h3> */}
            {/* <p>{profileLinks.bio}</p>             */}
                {approvalList.map((approvalList, key) => {
                    return <tr key={key} approvalList={approvalList}>
                        <td>{approvalList.first_name} {approvalList.last_name}</td>
                        {/* <td>{profileLinks.linkedin_url}</td>
                        <td>{profileLinks.github_url}</td>  */}
                        </tr>
                    })}
            </table>
                {approvalList.map((approvalList, key) => {
                    return <li key={key} approvalList={approvalList}>

                    </li>
                })}
            <button>Approve</button>
        </div>
        )
};

export default AdminPage;

