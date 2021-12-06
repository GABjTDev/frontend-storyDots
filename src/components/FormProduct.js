import { useState, useEffect } from "react";
import { useParams } from "react-router"
import { addProduct, editProduct, getProduct } from "../services/FetchProducts";
import './FormProduct.css';

const InitialProduct = {
    name: '',
    description: '',
    image_url: 'https://placekitten.com/500/300',
    price: ''
}

const FormProduct = ({history}) => {

    const {action, id = null} = useParams();
    const [product, setProduct] = useState(InitialProduct);
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(product.name === '' || product.description === '' || product.price === ''){
            setStatus('invalid');
            setTimeout(() => {
                setStatus('');
            }, 2000)
            return;
        }

        if(id){

            editProduct(id, product)
                .then(data => {
                    data.status === 200 ? console.log('Editado exitosamente') : console.log(`Algo fallo ${data.status}`)
                    history.push('/admin');
                });

        }else{
            addProduct(product)
                .then(data => {
                    data.status === 200 ? console.log('Agregado exitosamente') : console.log(`Algo fallo ${data.status}`)
                    setProduct(InitialProduct);
                    setStatus('valid');
                    setTimeout(() => {
                        setStatus('');
                    }, 2000)
                }).catch(err => {
                    console.error(err);
                    setStatus('invalid');
                    setTimeout(() => {
                        setStatus('');
                    }, 2000)
                })
        }
    }

    useEffect(() => {

        if(id){
            getProduct(id)
                .then(res => {
                    setProduct(res.data)
                });
        }
       

    }, [id]);

    return (
        <div className="formProduct">
            <h1>Form {action}</h1>
            {
                status === 'valid' &&
                <p className="create-active">
                    Producto creado
                </p>
            }

            {
                status === 'invalid' &&
                <p className="invalid-product">
                    Producto invalido, No se pudo completar la accion
                </p>
            }
            <form className="formScreen" onSubmit={handleSubmit}> 
                <div className="inputBox">
                    <label forhtml="name">Name</label>
                    <input type="text" id="name" name="name" value={product.name} onChange={handleChange} />
                </div>
                <div className="inputBox">
                    <label forhtml="description">Description</label>
                    <textarea  id="description" name="description" value={product.description} onChange={handleChange}></textarea>
                </div>
                <div className="inputBox">
                    <label forhtml="image_url">Image</label>
                    <input type="file" id="image_url" name="image_url" />
                </div>
                <div className="inputBox">
                    <label forhtml="price">price</label>
                    <input type="number"  id="price" name="price"  value={product.price} onChange={handleChange}/>
                </div>
        
                <button className={`${id && 'edit' }`}>{action} Product</button>
            </form>
        </div>
    )
}

export default FormProduct
