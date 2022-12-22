import React from "react";

function Dog({ image }) {
    return (
      <div id={image.id} >
        <h2 className="dog-header">{image.name}</h2>
        <img className="dog-image" src={image.image} alt={image.description} />
    </div>
    )
  }

export default Dog;