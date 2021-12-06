import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router"
import { getProduct } from "../services/FetchProducts";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import './ProductScreen.css';
import Spinner from "./Spinner";

const ProductScreen = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setLoading(true);

        getProduct(id)
            .then(res => {
                setProduct(res.data);
                setLoading(false);
            });


    }, [id]);

    return (
        <div className={`product-screen`}>
            {
                loading ?
                    <Spinner />
                :
                    <>
                        <div className="container-product">
                            
                            <div className="container-images">
                                <div className="container-thumb">
                                    <img src={product.image_url} alt={product.name} />
                                    <img src={product.image_url} alt={product.name} />
                                    <img src={product.image_url} alt={product.name} />
                                    <img src={product.image_url} alt={product.name} />
                                    <img src={product.image_url} alt={product.name} />
                                </div>
                                <div className="container-img-focus">
                                    <img src={product.image_url} alt={product.name} />
                                </div>
                            </div>
                            
                            <div className="container-description">
                                <h1>{product.name}</h1>
                                <div className="starts">
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiOutlineStar />
                                </div>
                                <h2>${product.price}</h2>
                                <div className="options">
                                    <div>
                                        <p className="discount">en 12x $ {parseFloat(product.price / 12).toFixed(3)}</p>
                                        <p className="stock">Stock disponible</p>
                                    </div>
                                    <button>ADD CART</button>
                                </div>
                            </div>

                        </div>
                        <hr />
                        <div className="container-description-text">
                            <h2>{product.name}</h2>
                            <p>
                                {product.description}
                            </p>
                        </div>

                    </>
            }
        </div>
    )
}

export default ProductScreen
