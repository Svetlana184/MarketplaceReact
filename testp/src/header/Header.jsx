import './header.css'

export default function Header(){
    return(
        <header>
            <nav className='nav_header'>
                <ul className='ul_header'>
                    <li><a href="#">Marketplace</a></li>
                    <li><a href="#">Artists</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Collections</a></li>
                </ul>
            </nav>
            <button className='btn_yellow'>Contact</button>
        </header>
    )
}