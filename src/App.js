import { BrowserRouter, Switch, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.styled.jsx';
import { HeaderWrapper } from './App.styled.jsx';
import Header from './components/AppBar/AppBar.jsx';
import HomeView from './components/views/HomeView';

function App() {
  // const [query, setQuery] = useState('');
  // const [filmList, setFilmList] = useState([]);

  return (
    <BrowserRouter>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
