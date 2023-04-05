import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ApprovalRow from "../components/AdminRows";


function AdminPage() {
    const [approvalList, setApprovalList] = useState([]);
    const [isAdmin, setIsAdmin] = useState({});
    const [error, setError] = useState([]);

    const fetchUsers = async () => {
        let response;
        try {
            response = await fetch(`${import.meta.env.VITE_API_URL}users/admin-user`);
            } catch (error) {
            setError(error);
            console.log(error)
            }
        
            return (
                error ? (
                    <div>
                        <p>{error.detail}</p>
                    </div>
                ) : 
                    <div>admin</div>
                )
        };
        //rendering, if admin is present, //error.detail to pass in string not and object
        //conditional error - show this, turnery 

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        const headers = { 'Authorization': `token ${token}` };
        fetch(`${import.meta.env.VITE_API_URL}users/admin-user`, { headers })
        // fetchUsers()
        .then((results) => {
            return results.json();
        })
            .then((data) => {
            setApprovalList(data);
            console.log(data)
        });
        console.log(approvalList)
        console.log(error)
}, []);

        // fetch(`${import.meta.env.VITE_API_URL}users/`, { headers })
        
        
    // }, []);

    return (
        <div>
            <div>
                <div id="column-headers">
                    <h2>Name</h2>
                    <h2>LinkedIn url</h2>
                    <h2>GitHub url</h2>
                    <h2>approval status</h2>
                </div>
                <div>
                    {/* {approvalList.map((userData, key) => {
                        return <ApprovalRow key={key} userData={userData} />; */}
                    {approvalList.map((userData, key) => {
                        return <ApprovalRow key={key} userData={userData} />;
                    })}
                </div>
                {/* <p>{userData.first_name}</p> */}
            </div>
        </div>
    )

//To confirm logged in user is an admin
//in useEffect
// useEffect(() => {
//     const token = window.localStorage.getItem("token");
//     const headers = { 'Authorization': `token ${token}` };
//     // fetch(`${import.meta.env.VITE_API_URL}users/`, { headers })
//     // fetch(`${import.meta.env.VITE_API_URL}users/user-admin`, { headers })
//     fetch(`${import.meta.env.VITE_API_URL}users/whoami`, { headers })        
//     .then((results) => {
//         return results.json();
//     })
//     .then((data) => {
//         setIsAdmin(data.is_staff);
//         console.log(isAdmin)       
//     });
// }, []);


    

};

export default AdminPage;





