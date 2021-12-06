import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { deleteProduct } from '../services/FetchProducts';

const TrProduct = ({_id, name, price, image_url, history, products, setProducts}) => {

    const handleDelete = (id) => {
        deleteProduct(id)
            .then(data => {
                data.status === 200 ? console.log('Eliminado exitosamente') : console.log(`Algo fallo ${data.status}`);
                const newProducts = products.filter((c) => c._id !== id);
                setProducts(newProducts);
            });

    }

    const handleEdit = (id) => {
        history.replace(`/form/Edit/${id}`);
    }


    return (
        <tr className="tr-product">
            <td>{name}</td>
            <td>${price}</td>
            <td>
                <img src={image_url} alt={name} />
            </td>
            <td className="actions">
                <button onClick={() => handleEdit(_id)} >
                    <AiFillEdit />
                </button>
                <button onClick={() => handleDelete(_id)}>
                    <AiFillDelete />
                </button>
            </td>
        </tr>
    )
}

export default TrProduct
