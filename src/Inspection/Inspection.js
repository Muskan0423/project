import React from 'react';
import './App.css'; // Create a CSS file to handle styles if necessary

const data = [
  {
    year: 1951,
    title: 'Our Journey',
    description: 'Birth of Jana Sangh: On 21 October 1951, Bharatiya Jana Sangh is formed in Raghomal Girls High School, Delhi with Dr. Syama Prasad Mookerjee as its first President.',
    image: '/files/history-of-the-party-images/shyama_prasad.jpg',
    name: 'Dr. Syama Prasad Mookerjee',
    info: 'Founder of the Bharatiya Jana Sangh',
    courtesy: 'Photo Division India',
  },
  {
    year: 1952,
    title: 'Our Journey',
    description: 'General Elections: In the 1951-1952 general elections to the Parliament of India, Bharatiya Jana Sangh wins 3 seats.',
    image: '/files/history-of-the-party-images/1952.jpg',
    courtesy: '',
  },
  // Add other data items similarly
];

const FullScreenBackgroundItem = ({ item }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${item.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
  };

  return (
    <div className="oj-item lozad-background gradiant-bg" style={backgroundImageStyle}>
      <div className="oj-item-content d-flex">
        <div className="left wow slideInDown">
          <h1 className="hidden-xs">{item.title}</h1>
          <span className="session">{item.year}</span>
          <p>{item.description}</p>
          {item.name && (
            <div className="profile">
              <div className="name">
                <span>{item.name}</span>
                <p>{item.info}</p>
              </div>
              <h1 className="visible-xs">{item.title}</h1>
            </div>
          )}
        </div>
        <div className="right">
          <p className="image-infomartion">{item.courtesy}</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="view-content">
      {data.map((item, index) => (
        <FullScreenBackgroundItem key={index} item={item} />
      ))}
      <div className="oj-slide-nav wow slideInUp">
        {data.map((item, index) => (
          <div className="oj-nav-item views-row" key={index}>
            <span>{item.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
