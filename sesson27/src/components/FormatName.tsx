import React from 'react';

interface User {
  firstName: string;
  lastName: string;
}

function formatName(user: User): string {
  return `${user.firstName} ${user.lastName}`;
}

const FormatName: React.FC = () => {
  // Example user object
  const user: User = {
    firstName: 'Nguyễn Văn',
    lastName: 'Nam'
  };

  const fullName = formatName(user);

  return (
    <div>
        <h1>Bài 6</h1>
        <h3>Họ và tên: {fullName}</h3>
    </div>
  );
}

export default FormatName;
