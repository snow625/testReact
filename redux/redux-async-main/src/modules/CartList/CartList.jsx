import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../redux/cart/cart-selectors';
import { removeProduct, getProducts } from '../../redux/cart/cart-operations';


function CartList() { 
 
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getProducts())
    },[dispatch])

    function onRemoveProduct(id) {
        dispatch(removeProduct(id))
    };

    const cart = useSelector(getCart);
    const { items, loading, error } = cart;

    const elements = items.map(({ id, name, price }) => <li key={id}><p>{name}</p><p>Price:  {price}</p><button onClick={() => onRemoveProduct(id)} type="button">remove</button></li>)
    
    return (
        <>
        {loading && <p>Loading ...</p>}
        {error && <p>Error</p> }
        <ul>
            {elements}
            </ul>
            </>
    )
}
export default CartList;