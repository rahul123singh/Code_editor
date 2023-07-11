import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  // Load data from local storage on component mount
  useEffect(() => {
    const savedHtml = localStorage.getItem('html');
    const savedCss = localStorage.getItem('css');
    const savedJs = localStorage.getItem('js');

    if (savedHtml) {
      setHtml(savedHtml);
    }
    if (savedCss) {
      setCss(savedCss);
    }
    if (savedJs) {
      setJs(savedJs);
    }
  }, []);

  // Save data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('html', html);
    localStorage.setItem('css', css);
    localStorage.setItem('js', js);
  }, [html, css, js]);

  return (
    <DataContext.Provider
      value={{
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
