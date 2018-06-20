import React from 'react';
import '../styles/content.css';

const Content = (props) => {

  const parsedContent = props.content.map( obj => {
    let style = {

      position: 'absolute',
      top: obj.top,
      left: obj.left,
    }
    return (
    <div className='content' style={{position: 'relative'}}>
      <img src={obj.imgUrl} alt={obj.imgAlt} />
      <img src={obj.btnUrl} alt={obj.imgAlt} style={style}/>
    </div>
    )
  })

  return (
    <div className='content-container'>
      {parsedContent}
    </div>
  )
}

export default Content;