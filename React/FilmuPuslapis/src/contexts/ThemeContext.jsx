import { createContext, useReducer } from "react";

const ThemeContext = createContext();
const ThemeActionTypes = {
  day: 'set_theme_day',
  night: 'set_theme_night'
}
const ColorThemes = {
  day: {
    theme: 'day',
    text: '#000000',
    lightText: '#3C3C3C',
    darkText: '#000000',
    background: '#D9DFE0',
    lightBackground: '#EEF1F2',
    darkBackground: '#C8CBCB',
    notActiveLink: '#9e0000',
    activeLink: '#0a7600'
  }, night: {
    theme: 'night',
    text: '#FFFFFF',
    lightText: '#FFFFFF',
    darkText: '#E4E4E4',
    background: '#181A1A',
    lightBackground: '#2C2D2E',
    darkBackground: '#0D0E0E',
    notActiveLink: '#ff5252',
    activeLink: '#15d703'
  }
}

const reducer = (state, action) => {
  switch(action.type){
    case ThemeActionTypes.day:
      window.localStorage.setItem('theme','day');
      return ColorThemes.day
    case ThemeActionTypes.night:
      window.localStorage.setItem('theme','night');
      return ColorThemes.night
    default:
      return state;
  }
}

const ThemeProvider = ({ children }) => {
  
  let theme = window.localStorage.getItem('theme');
  const [colorPallet, setColorPallet] = useReducer(reducer, theme ? ColorThemes[theme] : ColorThemes.day);

  return (
    <ThemeContext.Provider
      value={{
        colorPallet,
        setColorPallet,
        ThemeActionTypes
      }}
    >
      { children }
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
export default ThemeContext;