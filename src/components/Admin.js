import { useEffect, useState } from 'react';
import { getAllProductsPage } from '../services/FetchProducts';
import Buttons from './Buttons';
import Spinner from './Spinner';
import TrProduct from './TrProduct';

const Admin = ({history}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);

    useEffect(() => {
    
        setLoading(true);

        getAllProductsPage(page)
            .then(res => {
                //console.log(res.message);
                setProducts(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err)
                setLoading(false);
            });
            
    }, [page]);
    

    const handleAdd = () => {
        history.replace('/form/Add');
    }

    return (
        <div className={`container-admin ${loading && 'flex'}`}>

            {
                loading ?
                    <Spinner />
                    :
                    <>
                        <h1>Admin</h1>

                        <table className="table">
                            <thead className="thead">
                                <tr>
                                    <th>NAME</th>
                                    <th>PRICE</th>
                                    <th>IMG</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody className="tbody">
                                {
                                    products.length !== 0 ?
                                    products.map(p => {
                                        return <TrProduct key={p._id} {...p} history={history} products={products} setProducts={setProducts}/>
                                    })
                                    :
                                    <tr>
                                        <td colSpan="4">
                                            No hay datos
                                        </td>
                                    </tr>
                                }
                            </tbody>
                        </table>

                        <Buttons setPage={setPage}/>

                        <button 
                            className="add_product"
                            onClick={handleAdd}
                        >
                            ADD PRODUCT
                        </button>
                    </>
            }
        </div>
    )
}

export default Admin
