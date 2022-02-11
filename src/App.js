import * as React from 'react';
import './App.css';
import PostJira from './Components/PostJira';
import Menu from './Components/Menu';
import Search from './Components/Search';
import Grid from './Components/Grid';


function App() {
  const [searchItem, setSearchItem] = React.useState("")
  return (
    <div className="App">

      
    <PostJira />
      <Menu />
      <Search />
      <Grid
          
setSearchItem={setSearchItem}
      />

    </div>
  );
}

export default App;
