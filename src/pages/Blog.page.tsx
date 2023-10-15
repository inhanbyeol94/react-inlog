import React from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import { themeColor } from '../_common/theme/color';

const BlogPage = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className={`transition duration-500 w-screen min-h-screen flex-col pb-10 ${themeColor.mainBg}`}></div>
    </>
  );
};

export default BlogPage;
