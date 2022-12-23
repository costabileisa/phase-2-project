import React from "react";
import { useHistory } from "react-router-dom";
import Activity from "./Activity"
import Filter from "./Filter"

function Activities({ activities }) {
    const history = useHistory()

    function handleClick() {
        history.push("/activities/add")
    }

    function handleSearch(search) {
        console.log(search)
    }

    return (
        <div className="activities">
            <div className="activities-extras">
                <button className="add-activity-btn" onClick={handleClick}>Add Activity</button>
                <div className="filter activity-filter">
                    <label>Filter by energy level</label>
                    <Filter type="option" onSearch={handleSearch} />
                </div>
            </div>
            <table className="activity-table">
                <tbody>
                    <tr className="activity-row">
                        <th className="activity-head">Activity</th>
                        <th className="activity-head">Recommended Energy Level</th>
                    </tr>
                    {activities.map(activity => <Activity key={activity.id} act={activity} />)}
                </tbody>
            </table>
        </div>
    )
}

export default Activities;