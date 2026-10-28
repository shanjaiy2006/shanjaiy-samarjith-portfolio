import React from 'react';
import { useTheme } from './hooks/useTheme.js';
import ScrollProgress from './components/ScrollProgress.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import Home from './pages/Home.jsx';

export default function App() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <ErrorBoundary>
      <ScrollProgress />
      <CustomCursor />
      <Home theme={theme} toggleTheme={toggleTheme} isDark={isDark} />
    </ErrorBoundary>
  );
}
