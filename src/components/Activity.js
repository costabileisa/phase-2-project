import React from "react"

function Activity({ act }) {
    const { activity, energy } = act;

    return (
        <tr className="activity-row">
            <td className="activity-head">{activity}</td>
            <td className="activity-head">{energy}</td>
        </tr>
    )
}

export default Activity;