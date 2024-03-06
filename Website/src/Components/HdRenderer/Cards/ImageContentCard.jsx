import React from "react";
import Data from "./Data";
import ImageContent from "./ImageContent";
import "./card.css"

function ImageComponentCard() {
  console.log(Data);
  return (
    <div style={{marginBottom:'50px'}}>
        {Data.map((card, index) => (
          <ImageContent
              key={index}
              id={index}
              image={card.image}
              title={card.title}
              subtitle={card.subtitle}
            />
        
        ))}
      
    </div>
  );
}

export default ImageComponentCard;
