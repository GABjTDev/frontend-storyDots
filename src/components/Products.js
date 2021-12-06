import { useEffect, useState } from 'react';
import { getAllProductsPage } from '../services/FetchProducts';
import Buttons from './Buttons';
import Product from './Product';
import './Products.css';
import Spinner from './Spinner';

const Products = ({history}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);

    useEffect(() => {
    
        setLoading(true);

        getAllProductsPage(page)
            .then(res => {
                console.log(res.message);
                setProducts(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err)
                setLoading(false);
            });
            
    }, [page]);

    return (
        <div className={`container-products ${loading && 'flex'}`}>
            {
                loading ?
                    <Spinner />
                :
                <>
                    <h1>Products</h1>
                    <div className="grid-container">
                        {
                            products.length !== 0 ?
                            products.map(p => {
                                return <Product key={p._id} {...p} history={history}/>
                            })
                            :
                            <h2>No hay productos en esta pagina</h2>
                        }
                    </div>
                    <Buttons setPage={setPage} />
                </>
            }

        </div>
    )
}

export default Products
