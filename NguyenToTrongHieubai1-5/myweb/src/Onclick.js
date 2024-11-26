import React, { useState } from 'react';
const ClickButton = () => {
// Sử dụng state để theo dõi số lần button được click
const [count, setCount] = useState(0);
// Arrow function để xử lý sự kiện onClick
const handleClick = () => {
setCount(count + 1);
console.log('Button đã được click ${count + 1} lần!');
};
return (
<div>
<p>Bạn đã click {count} lần</p>
<button onClick={handleClick}>Nhấn vào đây</button>
</div>
);
};
export default ClickButton;