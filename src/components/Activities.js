import React from "react";
import { useHistory } from "react-router-dom";
import Activity from "./Activity"

function Activities({ activities }) {
    const history = useHistory()

    function handleClick() {
        history.push("/activities/add")
    }

    return (
        <div className="activities">
            <button onClick={handleClick}>Add Activity</button>
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