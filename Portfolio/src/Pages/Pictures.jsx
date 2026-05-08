import React from 'react';
import Pic1 from '../assets/Images/Pic1.jpg';
import Pic2 from '../assets/Images/Pic2.jpg';
import Pic3 from '../assets/Images/Pic3.jpg';
import Pic4 from '../assets/Images/Pic4.jpg';

const Pictures = () => {
  // Organizing images into an array of objects
  const activities = [
    { id: 1, src: Pic1, title: 'Notebook Activity 1' },
    { id: 2, src: Pic2, title: 'Notebook Activity 2' },
    { id: 3, src: Pic3, title: 'Notebook Activity 3' },
    { id: 4, src: Pic4, title: 'Notebook Activity 4' },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Notebook Activities</h1>
      <div style={styles.grid}>
        {activities.map((activity) => (
          <div key={activity.id} style={styles.card}>
            <img 
              src={activity.src} 
              alt={activity.title} 
              style={styles.image} 
            />
            <p style={styles.caption}>{activity.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Basic inline styling for layout
const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  header: {
    marginBottom: '30px',
    color: '#333',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  caption: {
    padding: '10px',
    fontWeight: 'bold',
  }
};

export default Pictures;