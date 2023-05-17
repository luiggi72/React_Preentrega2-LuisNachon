import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Celulares</button>
                <button>Tabletas</button>
                <button>Notebooks</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar