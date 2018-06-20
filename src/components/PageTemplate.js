import React from 'react';
import Header from './Header';
import '../styles/page-template.css';

const PageTemplate = (props) => {

  return (
    <div className='frame'>
      <div className='page'>
        <Header />
        {React.Children.map(props.children, (child) => child)}
      </div>
    </div>
  )
}

export default PageTemplate;