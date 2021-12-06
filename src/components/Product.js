const Product = ({_id, name, image_url, price, history}) => {

    const handleProduct = (id) => {
        console.log(id);
        history.replace(`/product/${id}`);
    }

    return (
        <div className="product">
            <div className="thumb">
                <img src={image_url} alt={name} />
            </div>
            <div className="details">
                <div className="price">
                    <h2>{name}</h2>
                    <p>${price}</p>
                </div>
                <button onClick={() => handleProduct(_id)}>Ver producto</button>
            </div>
        </div>
    )
}

export default Product
