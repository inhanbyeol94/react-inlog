import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useThemeStore } from '../stores/theme/theme.store';
import { themeColor } from '../_common/theme/color';
import LoginPage from '../pages/Login.page';
import BlogPage from '../pages/Blog.page';
import SignupPage from '../pages/SIgnup.page';

const AppRouter = () => {
  const { theme } = useThemeStore();

  return (
    <>
      <BrowserRouter>
        <div className={`${theme}`}>
          <div className={`flex ${themeColor.mainBg}  min-h-screen`}>
            <Routes>
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
