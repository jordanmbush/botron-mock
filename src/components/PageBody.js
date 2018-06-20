import React from 'react';
import '../styles/page-body.css';

const PageBody = (props) => {

  return (
    <div className='body'>
        {React.Children.map(props.children, (child) => child)}
    </div>
  )
}

export default PageBody;