import logo from '../img/kv logo.png'
import group from '../img/Group 18536.svg'

const SideNav = () => {
    return(
        <>
        <aside>
            <header>
                <img src={logo} />
            </header>
            <a href={'/list'}>
            <nav>
                <div>
                   <img src={group} />
                </div>
                <p>Employee list</p>
            </nav>
            </a>
        </aside>
        </>
    )
}

export default SideNav;