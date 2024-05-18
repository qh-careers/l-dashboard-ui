import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const LightTheme = React.lazy(() => import('./LightTheme'));
const DarkTheme = React.lazy(() => import('./DarkTheme'));

const ThemeSelector = ({ children }) => {
  console.log(children);
  const isDarkMode = useSelector((state) => state.customizer.isDark);

  return (
    <>
      <>{isDarkMode ? <DarkTheme /> : <DarkTheme />}</>
      {children}
    </>
  );
};

ThemeSelector.propTypes = {
  children: PropTypes.node,
};

export default ThemeSelector;
