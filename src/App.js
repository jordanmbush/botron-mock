import React, { Component } from 'react';
import PageTemplate from './components/PageTemplate';
import PageBody from './components/PageBody';
import SideBar from './components/sideBar';
import Content from './components/content';

import './App.css';
import './styles/reset.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      content: [
        {imgUrl: 'https://www.botron.com/wp-content/uploads/2015/03/omni-front-page.jpg', imgAlt: 'view-more', btnUrl: 'https://www.botron.com/wp-content/uploads/2007/10/view-more.png', buttonText: 'View More', top: 150, left: 100},
        {imgUrl: 'https://www.botron.com/wp-content/themes/Cutline/Cutline%201.1/images/groundhog-monitor.jpg', imgAlt: 'view-more', btnUrl: 'https://www.botron.com/wp-content/uploads/2007/10/view-more.png', buttonText: 'View More', top: 150, left: 100},
        {imgUrl: 'https://www.botron.com/wp-content/uploads/2015/03/omni-front-page.jpg', imgAlt: 'view-more', btnUrl: 'https://www.botron.com/wp-content/uploads/2007/10/view-more.png', buttonText: 'View More', top: 150, left: 100},
        {imgUrl: 'https://www.botron.com/wp-content/uploads/2015/03/omni-front-page.jpg', imgAlt: 'view-more', btnUrl: 'https://www.botron.com/wp-content/uploads/2007/10/view-more.png', buttonText: 'View More', top: 150, left: 100},
        {imgUrl: 'https://www.botron.com/wp-content/uploads/2015/03/omni-front-page.jpg', imgAlt: 'view-more', btnUrl: 'https://www.botron.com/wp-content/uploads/2007/10/view-more.png', buttonText: 'View More', top: 150, left: 100},
      ]
    }
  }

  render() {
    return (
      <div className='App'>
        <PageTemplate>
          <PageBody>
            <SideBar />
            <Content content={this.state.content} />
          </PageBody> 
        </PageTemplate>
      </div>
    );
  }
}

export default App;
