import React from 'react';
import splashImage from './picture/mythology.png';


function SplashPage() {
  return (
    <div>
      <img src={splashImage} alt="Mythology app splash" />
      <h2>I am the splash page</h2>
    </div>
  );
}

export default SplashPage;