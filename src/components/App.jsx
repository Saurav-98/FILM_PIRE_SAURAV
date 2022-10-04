import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import { Movies, MovieInformation, NavBar, Actors, Profile } from './';
const App = () => {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <main>
        <Routes>
          <Route exact path="/" element={<h1>This is Home</h1>} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
          {/* <Route path="/" element={<h1>This is Home</h1>} /> */}
        </Routes>
      </main>
    </div>
  );
};

export default App;
