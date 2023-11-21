import React, { useEffect } from 'react';

function AsideRight() {
  useEffect(() => {
    if (localStorage.getItem('theme')) {
      let storedTheme = localStorage.getItem('theme');
      const buttons = document.querySelectorAll('.theme-btn');
      const themeBtnClicked = document.querySelector(
        `[data-theme='${storedTheme}']`
      );
      document.body.classList = storedTheme;
      buttons.forEach((button) => {
        button.classList.remove('active');
      });
      themeBtnClicked.classList.add('active');
    } else {
      localStorage.setItem('theme', 'red-theme');
    }
  }, []);

  const handleClick = (e) => {
    const buttons = document.querySelectorAll('.theme-btn');
    document.body.classList = e.target.dataset.theme;
    buttons.forEach((button) => {
      button.classList.remove('active');
    });
    e.target.classList.add('active');
    localStorage.setItem('theme', `${e.target.dataset.theme}`);
  };

  return (
    <aside className="right">
      <nav className="themes">
        <button
          className="theme-btn theme1"
          data-theme="red-theme"
          onClick={handleClick}
        ></button>
        <button
          className="theme-btn theme2"
          data-theme="blue-theme"
          onClick={handleClick}
        ></button>
        <button
          className="theme-btn theme3"
          data-theme="gold-theme"
          onClick={handleClick}
        ></button>
        <button
          className="theme-btn theme4"
          data-theme="white-theme"
          onClick={handleClick}
        ></button>
      </nav>
    </aside>
  );
}

export default AsideRight;
