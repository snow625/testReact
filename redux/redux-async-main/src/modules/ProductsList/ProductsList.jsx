import { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { addProduct } from '../../redux/cart/cart-operations';
import { getProducts } from '../../shared/service/API/products';


function ProductsList() {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    })
    useEffect(() => {
        async function fetchProducts() {
            setState(prevState => ({
                ...prevState,
                loading: true,
            }))
            try {
                const { data } = await getProducts();
                setState(prevState => ({
                    ...prevState,
                    items: [...prevState.items, ...data],
                }))
            }
            catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error,
                }))
            }
            finally {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                }))
            }
        }
        fetchProducts();
    }, [])

    const dispatch = useDispatch();

    function onAddProduct(el) {
        dispatch(addProduct(el));
     }
    
    const { items, loading, error } = state;
    const elements = items.map(({ id, name, price }) => {

        return <li key={id}>
        <p>{name}</p>
        <p>Price: {price}</p>
        <button type='button' onClick={()=>onAddProduct({id, price, name})}>Add to cart</button>
        </li>})

    
    
    return (
        <>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
            <ul>
            {elements}
            </ul>
        </>
    )
}
export default ProductsList;