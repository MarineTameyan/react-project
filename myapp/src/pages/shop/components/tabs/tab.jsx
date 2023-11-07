import React, { useState } from 'react';
import "./tab.scss"

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Description', 'Information', 'Review'];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return <div>
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={index === activeTab ? 'active' : 'hidden'}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">
          <p>
            Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.
            </p>
    
      </div>
    </div>
  
}


