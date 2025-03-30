import { useState } from 'react'
import React from 'react'


export default function ColorConverter() {
  const [color, setColor] = useState("color RGB");

  const hexToRgb = (hex: string) => {
    // Убираем # из начала строки, если он есть  
    hex = hex.replace(/^#/, '');

    // Преобразуем HEX в RGB  
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return `RGB(${r}, ${g}, ${b})`;
  };

  const handleColorCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hex = e.target.value;

    // Проверяем, что введен правильный HEX код  
    if (/^#[0-9A-F]{6}$/i.test(hex)) {
      const rgbColor = hexToRgb(hex);
      setColor(rgbColor);
      // Изменяем фон страницы  
      document.body.style.backgroundColor = hex;
    } else {
      setColor("Введите корректный HEX код");
    }
  };

  return (
    <>
      <form className='form' action="">
        <input 
          className='color-input' 
          onChange={handleColorCheck} 
          type="text" 
          maxLength={7} 
          placeholder='color HEX #' 
        />
        <div className="color-out" >{color}</div>
      </form>
    </>
  );
}