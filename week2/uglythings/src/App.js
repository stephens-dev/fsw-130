import logo from './logo.svg';
import './App.css';
import Header from './Header'
// import Body from './Body'
import {ThemeContextComsumer} from './Data'
import Display from './Body'


function App(props) {
  return (
    <div className="App">
      <Header />
      <Display />
    </div>
  );
}

export default App;
