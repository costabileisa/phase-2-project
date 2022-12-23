import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function AddActivity({ onFormSubmit }) {
    const [formData, setFormData] = useState({
        activity: "",
        energy: "high"
    })
    const [valid, setValid] = useState(true)

    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault();

        if (formData.activity === "") return setValid(false)
            
        fetch("http://localhost:4000/activities", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => onFormSubmit(data))

        history.push("/activities");
    }

    function handleChange(e) {
        let data;
        if (e.target.name === "activity") {
            data = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
        } else {
            data = e.target.value.toLowerCase()
        }
        const newData = {
            ...formData,
            [e.target.name]: data
        }
        setFormData(newData)
        if (e.target.value !== "") setValid(true)
    }

    function handleGoBack() {
        history.push("/activities")
    }

    return (
        <div className="add-activity">
            <form onSubmit={handleSubmit} className="activity-form">
                <label>Activity:</label>
                <input onChange={handleChange} name="activity" type="text" value={formData.activity} />
                <label>Energy level:</label>
                <select onChange={handleChange} name="energy" value={formData.energy}>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>
                <input className="submit-button" type="submit" />
                <br></br>
                {valid ? null : <span style={{color: "red"}}>Activity can't be empty!</span>}
                </form>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    )
}

export default AddActivity