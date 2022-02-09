import logo from './logo.svg';
import './App.css';
import PostJira from './Components/PostJira';
import Menu from './Components/Menu';
import Search from './Components/Search';
import Grid from './Components/Grid';


function App() {
  return (
    <div className="App">
    <PostJira />
      <Menu />
      <Search />
      <Grid />
    
    </div>
  );
}

export default App;
