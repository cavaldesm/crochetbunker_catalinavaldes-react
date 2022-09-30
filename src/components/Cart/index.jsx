import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart';
import '../Cart/Cart.css';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: 'Catalina',
            email: 'Catalina@hola.com',
            phone: '123456',
            address: 'Alcorta'
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice()
    }

    const handleClick = () => {
        const db = getFirestore();
        
        const ordersCollection = collection( db, 'orders');

        addDoc( ordersCollection, order)
        .then(({ id }) => console.log (id) )
    }

    if (cart.length === 0) {
        return (
            <div className="cartContainer">
            <p className="cartMessage">No hay elementos en el carrito :-(</p>
            <Link className="cartLink" to='/'>¡Hacer compra!</Link>
            </div>
        );
    }

    return (
        <>
        {
            cart.map(product => <ItemCart key = {product.id} product={product} />)
        }
        <p>
            total: {totalPrice()}
        </p>
        <button onClick={handleClick}>Emitir compra</button>
        </>
    )
}

export default Cart;