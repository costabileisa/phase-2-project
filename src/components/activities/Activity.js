import React from "react"

function Activity({ act }) {
    const { activity, energy } = act;

    return (
        <tr className="activity-row">
            <td className="activity-data">{activity}</td>
            <td className="activity-data">{energy}</td>
        </tr>
    )
}

export default Activity;