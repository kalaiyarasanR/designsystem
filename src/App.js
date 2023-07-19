import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './stories/Header';
import { Button } from './stories/Button';
import { Accordian } from '././stories/Accordian';
import { default as RangeSlidercomponent } from './stories/RangeSlidercomponent'
import { default as InputText  }   from './stories/TextInput';
function App() {
  return (
    <div className="App">
      <Header />
      <Button>teteteteet</Button>
      <Accordian />
      <InputText />
      <RangeSlidercomponent />
    </div>
  );
}

export default App;
