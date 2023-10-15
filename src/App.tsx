import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRouter from './router/App.router';
import { useThemeStore } from './stores/theme/theme.store';

function App() {
  const queryClient = new QueryClient();
  const { setTheme } = useThemeStore();
  const darkMode = localStorage.getItem('theme');

  useEffect(() => {
    if (darkMode) return setTheme(darkMode);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}

export default App;
