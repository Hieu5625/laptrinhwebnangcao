import React, { useState } from 'react';

function Greeting() {
// Khai báo một state để lưu trữ tên

const [name, setName] = useState('');

//Hàm để cập nhật state khi người dùng nhập tên 
const handleInputChange = (event) => {
    setName(event.target.value);
};

return (
    <div>
        <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleInputChange}
            
    />
        <p>Hello, {name}!</p>
    </div>
);
}

export default Greeting;