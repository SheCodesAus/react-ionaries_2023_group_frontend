import React from "react";
// import "./ProjectCard.css";

function ApprovalRow(props) {
    const { userData } = props;

    return (
        <div>
            <div>
                    <div id="user-details">
                        <p>{userData.first_name} {userData.last_name}</p>
                        <p>{userData.email}</p>
                        <p>{userData.is_approved}</p>
                        <button>Approve</button>
                    </div>
            </div>
        </div>

    )
};

export default ApprovalRow;