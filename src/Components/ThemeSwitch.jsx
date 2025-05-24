import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="flex items-center justify-center">
      <div className="relative">
        {/* Toggle Switch */}
        <div 
          className={`
            relative w-16 h-8 rounded-full cursor-pointer transition-all duration-300 ease-in-out
            ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-600'}
          `}
          onClick={toggleTheme}
        >
          {/* Slider */}
          <div 
            className={`
              absolute top-1 w-6 h-6 bg-white rounded-full shadow-md 
              transition-all duration-300 ease-in-out flex items-center justify-center
              ${theme === 'light' ? 'left-1' : 'left-9'}
            `}
          >
            {/* Icon */}
            <i 
              className={`
                text-sm transition-all duration-300
                ${theme === 'light' ? 'bx bx-sun text-yellow-500' : 'bx bx-moon text-blue-400'}
              `}
            ></i>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ThemeSwitch;