import React, { useState, useEffect } from "react";
import Dog from "./Dog"

function DogImages() {
    const [images, setImages] = useState([])

    // grab 10 random images from dog ceo api
    useEffect(() => {
        // delete any current data
        fetch("http://localhost:4000/images")
        .then(res => res.json())
        .then(data => {
            if (data.length === 0) return;
            data.forEach(dog => {
            fetch(`http://localhost:4000/images/${dog.id}`, {
                method: "DELETE"
            })
            })
        })

        // get dog ceo images
        fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(res => res.json())
        .then(async (data) => {
  
        // post new dog ceo images to json file
        data.message.map(link => {
            const dogNameArray = link.split("/")[4].split("-")
            const reversed = [];
            for (const i in dogNameArray) {
                const capitalized = dogNameArray[i].toUpperCase().slice(0, 1) + dogNameArray[i].toLowerCase().slice(1)
                reversed.unshift(capitalized)
            }
            const dogName = reversed.join(" ")
            const desc = "Random picture of " + dogName
  
            const dogObj = {
              image: link,
              name: dogName,
              description: desc
            }
            
            fetch("http://localhost:4000/images", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dogObj)
          })
        })})

        // add dog objects to state
        fetch("http://localhost:4000/images")
        .then(res => res.json())
        .then(data => setImages(data))
    }, [])

    // create a Dog component for each image
    const displayImages = images.map(image => {
        return (
            <Dog key={image.id} image={image} />
        )
    })

    return (
        <div className="dog-container">
            {displayImages}
        </div>
    )
}

export default DogImages;