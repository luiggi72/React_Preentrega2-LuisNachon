import cart from './assets/cart.png'

const CartWidget = () => {
    return(
        <div>
            <img src={cart} alt="cart-widget" width={25} height={25}/>
            0
        </div>
    )
}

export default CartWidget