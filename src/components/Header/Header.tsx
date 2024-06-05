import classes from './header.module.css'
import headerLogo from "../../assets/logo.png";

export const Header = () =>{
    return(
        <header className={classes.header}>
            <div className = {classes.headerTitle}>
                <img src={headerLogo} alt = "logo" height = "150" width = "150" />
                <h1 className = {classes.headerTitle}>Fast Food</h1>
            </div>
            <nav>
                <button>Košík</button>
            </nav>
        </header>
    )
}

