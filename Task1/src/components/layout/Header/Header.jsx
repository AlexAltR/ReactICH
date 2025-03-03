import classNames from "classnames";
import ThemeSwitcher from "../../ui/ThemeSwitcher";
import PropTypes from "prop-types";

import style from "./Header.module.sass";

function Header({ toggleTheme, theme }) {
    return (
        <header className={classNames(`header--${theme}`, "heaeder", style.header)}>
            <h1>Заголовое 1 уровня</h1>
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
        </header>
    )
}

Header.propTypes = {
    toggleTheme: PropTypes.func.isRequired,
    theme: PropTypes.string.isRequired
}

export default Header;