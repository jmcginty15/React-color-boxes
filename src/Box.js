import './Box.css';
import { useState } from 'react';

const Box = ({ defaultColor, id }) => {
    const [color, setColor] = useState(defaultColor);

    return (
        <div className="Box" id={id} style={{ backgroundColor: color }}></div>
    )
}

export default Box;