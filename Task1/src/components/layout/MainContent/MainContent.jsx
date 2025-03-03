import PropTypes from "prop-types";
import style from "./MainContent.module.sass"
import classNames from "classnames";

function MainContent({ theme }) {
    return (
        <main className={classNames("main ", `main--${theme}`, style.main)}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, natus quod. Totam cumque inventore cum sint mollitia praesentium culpa? Doloremque velit voluptatum dolores recusandae minus. Totam, sunt inventore non accusamus dicta quo dignissimos architecto, vitae rerum id, consectetur quibusdam! Deleniti, doloremque nostrum! Nostrum, excepturi voluptas amet odit eligendi distinctio natus.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, asperiores quos? Voluptas totam qui at blanditiis non. Veniam, vero impedit tempora, blanditiis maxime sint assumenda inventore, veritatis fuga harum praesentium error iure officiis est facilis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, blanditiis odit expedita esse soluta sed. Quae libero rerum reiciendis voluptate. Rem vitae quod, deserunt sunt repudiandae soluta molestiae? Illo iusto dolores itaque veniam minus unde placeat mollitia totam asperiores necessitatibus!</p>
        </main>
    )
}

MainContent.propTypes = {
    theme: PropTypes.string.isRequired
}

export default MainContent;