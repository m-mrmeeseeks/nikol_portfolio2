'use client';

import React, { useEffect, useState } from 'react';
import { Row, ToggleButton, useTheme } from '@once-ui-system/core';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    setMounted(true);
    setCurrentTheme(document.documentElement.getAttribute('data-theme') || 'light');
  }, []);

  useEffect(() => {
    setCurrentTheme(document.documentElement.getAttribute('data-theme') || 'light');
  }, [theme]);

  const icon = currentTheme === 'dark' ? 'sun' : 'moon';
  const nextTheme = currentTheme === 'light' ? 'dark' : 'light';

  return (
    <>
      <ToggleButton
        prefixIcon={theme === 'dark' ? 'sun' : 'moon'}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        selected={false}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      />
    </>
  );
};
