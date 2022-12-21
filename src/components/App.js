import React, { useState, useEffect } from "react";
function App() {
  const [images, setImages] = useState([])

  // grab 50 random images from dog ceo api
  // useEffect(() => {
  //   fetch("https://dog.ceo/api/breeds/image/random/50")
  //   .then(res => res.json())
  //   .then(data => {
  //     data.message.forEach(dog => {
  //       const newObj = {
  //         image: dog
  //       }

  //       fetch("http://localhost:4000/images", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(newObj)
  //       })
  //     })
  //   })
  // }, [])
    
  return (
    <div className="App">

    </div>
  );
}

export default App;
