import React from 'react';
import LeftData from '../Data-whatsapp/Data';
import { useSearch } from '../Searchcontext'; // Import the custom hook
import './Left.css';

function LeftMassage() {
  const { searchTerm, filter } = useSearch(); // Get searchTerm and filter from context

  // Filter the data based on the search term and filter
  const filteredData = LeftData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filter === 'All' || (filter === 'Unread' && item.messageNumber > 0))
  );

  return (
    <div className="Main-Massage">
      {filteredData.length > 0 ? (
        filteredData.map((item) => (
          <div key={item.id} className="message-item">
            <img src={item.img} alt={item.title} className="message-avatar" />
            <div className="message-info">
              <div className="right-item">
                <div className="message-title">{item.title}</div>
              </div>
              <div className="left-item">
                <div className="message-time">{item.time}</div>
                <div className="message-number" style={{ display: item.messageNumber ? 'block' : 'none' }}>{item.messageNumber}</div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p style={{color:'white',textAlign:'center'}}>No messages found.</p>
      )}
    </div>
  );
}

export default LeftMassage;
