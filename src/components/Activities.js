import React from "react";
import { Link } from "react-router-dom";
import Activity from "./Activity"

function Activities({ activities }) {
    return (
        <div className="activities">
            <Link to="/activities/add">
                Add Activity
            </Link>
            <table className="activity-table">
                <tr className="activity-row">
                    <th className="activity-head">Activity</th>
                    <th className="activity-head">Recommended Energy Level</th>
                </tr>
                {activities.map(activity => <Activity key={activity.id} act={activity} />)}
            </table>
        </div>
    )
}

export default Activities;