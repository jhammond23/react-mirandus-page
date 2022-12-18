import React from 'react';

const DisplayLore = ({exemplar}) => {

  return (
        <div style={{fontFamily: 'Iowan'}}>
            {exemplar.tavernTales}
        </div>
  )
}

export default DisplayLore