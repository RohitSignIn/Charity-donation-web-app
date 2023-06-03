import React from 'react'

const FlipCon = ({image, content, flip}) => {

  return (
    <div>
      {!flip && <img src={image} alt='charity gallery' />}
      {!flip && <div>
        {content.map((val) => {
          return (
            <p fontSize={"1.3rem"} marginBottom={"1rem"}>{val}</p>
            );
        })}
    </div>}

  {flip && 
  <div>
    {content.map((val) => {
      return (
        <p fontSize={"1.3rem"} marginBottom={"1rem"}>{val}</p>
      );
    })}
  </div>
  }
  
  {flip && <img src={image} alt="Charity gallery" />}

    </div>
  )
}

export default FlipCon