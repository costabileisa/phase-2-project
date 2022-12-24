import React, {useState} from "react"

function Activity({ act }) {
    const { activity, energy } = act;
     const [upvote, setUpvote] = useState(0)

    function handleClick() {
        setUpvote(current => current + 1)
    }

    // make a button that holds upvotes
    // state for upvote
    // create button for each activity
    // on button click update state
    return (
        <tr className="activity-row">
            <td className="activity-data">
                {activity}
                </td>
            <td className="activity-data">{energy}</td>
        </tr>
    )
}

export default Activity;