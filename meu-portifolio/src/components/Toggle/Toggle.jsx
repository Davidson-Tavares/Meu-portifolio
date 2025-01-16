import React from 'react';
import { useTheme } from '../../../ThemeProvider';
import {getImageUrl} from "../../ultis.js";

const Toggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
      <img
        src={theme === 'light' ? 'light' : 'nav/light_mode_40dp_FFF_FILL0_wght400_GRAD0_opsz40.png'}
        alt={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        style={{ width: '30px', height: '30px' }}
      />
    </button>
  );
};

export default Toggle;

