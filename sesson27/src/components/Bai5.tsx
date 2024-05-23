import React from 'react';

interface Bai5Props {
  color: 'red' | 'blue' | 'green';
}

const Bai5: React.FC<Bai5Props> = ({ color }) => {
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
        <h1>Bai 5</h1>
        <div style={{position:'relative',width:'200px',height:'200px',backgroundColor:'red'}}>
        </div>
        <div style={{position:'relative',width:'200px',height:'200px',backgroundColor:'blue'}}>
        </div>
        <div style={{position:'relative',width:'200px',height:'200px',backgroundColor:'green'}}>
        </div>
      </div>
  );
};

export default Bai5;