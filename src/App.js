import React, { useState } from 'react'
import Navbar from './components/Navbars';
import News from './components/news';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App =()=> {
  const pageSize = 15;
  const[progress,setProgress]=useState(0);
  const [GenKey, setGenkey] = useState(1);
  
const handleRefetch = () => {
  setGenkey((prevKey) => prevKey + 1);
};

    return (
      <div>
        <Router>
          <Navbar handleRefetch={handleRefetch} />
          <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={() =>setProgress(0)}
          />
          <Routes>

            <Route path='/' element={<News setProgress={setProgress} key={GenKey} pageSize={pageSize} category='top'/>} />
            <Route path='/business' element={<News setProgress={setProgress} key='business' pageSize={pageSize} category='business'/>} />
            <Route path='/entertainment' element={<News setProgress={setProgress} key='entertainment' pageSize={pageSize} category='entertainment'/>} />
            <Route path='/health' element={<News setProgress={setProgress} key='health' pageSize={pageSize} category='health'/>} />
            <Route path='/science' element={<News setProgress={setProgress} key='science' pageSize={pageSize} category='science'/>} />
            <Route path='/sports' element={<News setProgress={setProgress} key='sports' pageSize={pageSize} category='sports'/>} />
            <Route path='/technology' element={<News setProgress={setProgress} key='technology' pageSize={pageSize} category='technology' />} />

          </Routes>
        </Router>
      </div>
    )
  }
  export default App;

