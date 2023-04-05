import { useContext } from "react"
import { ThemeContext } from './ThemeContext.js'


function Paragraph() {
    const context = useContext(ThemeContext)
    console.log(context)
    return (
        <p className={context.theme}>
            This is a number
        </p>
    )
}

export default Paragraph