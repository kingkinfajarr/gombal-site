import { FaSun, FaMoon } from 'react-icons/fa';
import UseDarkMode from './UseDarkMode';

const ToggleTheme = () => {
  const [colorTheme, setTheme] = UseDarkMode();
  return (
    <div
      className="text-green-500 bg-green-bg p-3 dark:text-white dark:bg-green-btn dark: w-10 rounded-full transition-all duration-300"
      onClick={() => setTheme(colorTheme)}
    >
      {colorTheme === 'light' ? <FaSun /> : <FaMoon />}
    </div>
  );
};

export default ToggleTheme;
