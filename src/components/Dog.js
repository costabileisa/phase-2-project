import React from "react";

function Dog({ image }) {
    return (
      <div className="dog-image column" id={image.id} >
        <h2 className="dog-header">{image.name}</h2>
        <img src={image.image} alt={image.description} />
    </div>
    )
  }

export default Dog;