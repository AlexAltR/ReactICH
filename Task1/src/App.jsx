// Импортируем необходимые хуки и компоненты
import { useState } from "react"; // useState используется для хранения темы

// Импортируем основные компоненты макета страницы
import Header from "./components/layout/Header"; // Шапка сайта
import MainContent from "./components/layout/MainContent"; // Основное содержимое страницы
import Footer from "./components/layout/Footer"; // Подвал сайта

// Подключаем глобальные стили
import "./styles/global.sass";

function App() {
  // Определяем состояние `theme`, которое хранит текущую тему ('light' или 'dark').
  // Значение темы загружается из `localStorage`, если оно там есть, иначе по умолчанию 'light'.
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Функция переключения темы (из светлой в темную и наоборот)
  function toggleTheme() {
    setTheme((currentTheme) => {
      // Определяем новую тему: если была 'light', то станет 'dark', и наоборот.
      currentTheme = currentTheme === "light" ? "dark" : "light";

      // Сохраняем новую тему в `localStorage`, чтобы она сохранялась при перезагрузке страницы.
      localStorage.setItem("theme", currentTheme);

      // Возвращаем новое значение `theme` в `setTheme`, чтобы обновить состояние компонента.
      return currentTheme;
    });
  }

  return (
    // Контейнер всего приложения, добавляем динамический класс в зависимости от темы.
    <div className={"app--" + theme}>
      {/* Передаем `toggleTheme` в `Header`, чтобы можно было переключать тему */}
      <Header toggleTheme={toggleTheme} theme={theme} />
      {/* Передаем текущую тему в основной контент, чтобы подстраивать стили */}
      <MainContent theme={theme} />
      {/* Передаем тему в футер, если он зависит от нее */}
      <Footer theme={theme} />
    </div>
  );
}

// Экспортируем компонент `App`, чтобы использовать его в `index.js`
export default App;
