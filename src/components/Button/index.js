import clsx from "clsx";
import style from './Button.module.scss'

function Button({ primary }) {

    const classes = clsx(style.btn, {
        [style.primary]: primary
    })

    return (
        <button className={classes}>
            Click me
        </button>
    )
}

export default Button