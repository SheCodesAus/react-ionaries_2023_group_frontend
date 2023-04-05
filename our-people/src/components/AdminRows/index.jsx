import React from "react";
// import "./ProjectCard.css";

function ApprovalRow(props) {
    const { userData } = props;

    return (
        <div>
            <div>
                    <div id="user-details">
                        <p>{userData.first_name} {userData.last_name}</p>
                        <p>{userData.last_name}</p>
                        <p>{userData.email}</p>
                        <button>Approve</button>
                    </div>
            </div>
        </div>

    )
};

export default ApprovalRow;