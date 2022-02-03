import { BrowserRouter, Switch, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.styled.jsx';
import { Navigation } from './components/Navigation/Navigation.jsx';
import { Form } from './components/Form/Form';
import { HeaderWrapper } from './App.styled.jsx';
import { Page } from './components/Page/Page.jsx';
import HomeView from './components/views/HomeView';

function App() {
  const [query, setQuery] = useState('');
  const [filmList, setFilmList] = useState([]);

  return (
    <BrowserRouter>
      <HeaderWrapper>
        <Page />
        <Form />
      </HeaderWrapper>

      <Routes>
        <Route path="/home" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
