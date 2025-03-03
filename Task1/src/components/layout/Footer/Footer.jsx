import classNames from "classnames";
import PropTypes from "prop-types";

import style from "./Footer.module.sass";

function Footer({ theme }) {
    return (
        <div className={classNames(`footer--${theme}`, style.footer)}>
            <p>CopyRight 2025 - Все права защищены</p>
        </div>

    )
}

Footer.propTypes = {
    theme: PropTypes.string.isRequired
}

export default Footer;