import React from 'react'

const Separater = ({ id }) => {
  return (
    <div
      id={id}
      style={{
        width: '50%',
        height: '5px',
        backgroundColor: 'hsl(228, 14%, 79%)',
        // marginBottom: '250px',
        // marginTop: '200px',
      }}
    />
  )
}

export default Separater
