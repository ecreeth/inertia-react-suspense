import * as React from 'react';
import useDarkMode from 'use-dark-mode';

const MODE_TRANSITION_CLASS_NAME = 'dark-mode-transition';
const MODE_TRANSITION_DURATION = 500;

function setDarkModeTransition() {
  document.documentElement.classList.add(MODE_TRANSITION_CLASS_NAME);
  setTimeout(
    () => document.documentElement.classList.remove(MODE_TRANSITION_CLASS_NAME),
    MODE_TRANSITION_DURATION
  );
}

const ThemeSwitch = () => {
  const { value: hasActiveDarkMode, toggle: activateDarkMode } = useDarkMode();

  const toggleDarkMode = () => {
    setDarkModeTransition();
    activateDarkMode();
  };

  return (
    <div className="text-gray-900 dark:text-gray-100 border border-gray-400 dark:border-0">
      <input
        type="checkbox"
        onChange={toggleDarkMode}
        checked={hasActiveDarkMode}
      />
      {hasActiveDarkMode ? '🌕' : '🌑'}
    </div>
  );
};

export default ThemeSwitch;
