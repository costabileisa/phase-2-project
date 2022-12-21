import React from "react";

function Dog({ image }) {
    return (
      <div className="dog-image">
        <h1>{image.name}</h1>
        <small>{image.description}</small>
        <img src={image.image} alt={image.description} />
    </div>
    )
  }

export default Dog;