import React from 'react'
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll'

const Separater = ({ name }) => {
  return (
    <Element
      name={name}
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
