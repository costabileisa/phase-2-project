import React from "react";
import { Link } from "react-router-dom";

function Activities() {
    return (
        <div className="activities">
            <Link to="/activities/add">
                Add Activity
            </Link>
        </div>
    )
}

export default Activities;