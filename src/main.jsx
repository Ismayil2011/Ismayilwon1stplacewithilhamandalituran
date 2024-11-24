import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LikeButton from './components/LikeButton';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <LikeButton />
  </StrictMode>
);
