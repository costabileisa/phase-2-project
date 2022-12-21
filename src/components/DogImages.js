import React, { useState, useEffect } from "react";
import Dog from "./Dog"

function DogImages() {
    const [images, setImages] = useState([])

    // grab 10 random images from dog ceo api
    useEffect(() => {
        // get dog ceo images
        fetch("https://dog.ceo/api/breeds/image/random/5")
        .then(res => res.json())
        .then(async (data) => {
                
        // delete any current data
        await fetch("http://localhost:4000/images")
        .then(res => res.json())
        .then(data => {
          if (data.length === 0) return;
          data.forEach(dog => {
            fetch(`http://localhost:4000/images/${dog.id}`, {
              method: "DELETE"
            })
          })
        })
  
        // post new dog ceo images to json file
        data.message.map(link => {
            const dogName = link.split("/")[4].split("-").join(" ");
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
        <div>
            {displayImages}
        </div>
    )
}

export default DogImages;