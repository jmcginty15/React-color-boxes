import './App.css';
import BoxGrid from './BoxGrid';
import Box from './Box';
import './Box.css';
import { getRandom } from './helpers';
import colorList from './colorList';
import boxes from './boxes';

function App() {
  return (
    <div className="App">
      <BoxGrid colors={colorList} boxes={boxes}>
        {boxes.map(i => <Box key={i} id={i} defaultColor={getRandom(colorList)} />)}
      </BoxGrid>
    </div>
  );
}

export default App;
