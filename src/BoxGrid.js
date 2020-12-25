import './BoxGrid.css';
import './BoxGrid.css';
import './Box.css';
import { getRandom } from './helpers';
import colorList from './colorList';
import boxes from './boxes';
import { useState } from 'react';

const BoxGrid = ({ colors = colorList, boxList = boxes, children }) => {
    const [lastChanged, setLastChanged] = useState(null);

    return (
        <div className="BoxGrid">
            <div className="BoxGrid-container">
                {children}
            </div>
            <button onClick={handleClick}>Change</button>
        </div>
    )

    function handleClick() {
        if (lastChanged != null) document.getElementById(lastChanged).textContent = '';

        const boxKey = getRandom(boxList);
        const newColor = getRandom(colors);

        const changedBox = document.getElementById(boxKey);
        changedBox.style.backgroundColor = newColor;
        changedBox.textContent = 'Changed!';

        setLastChanged(boxKey);
    }
}

export default BoxGrid;