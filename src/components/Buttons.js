const Buttons = ({setPage}) => {

    const handlePage = (n) => {
        setPage(n)
    }


    return (
        <div className="buttons">
            <button onClick={() => handlePage(0)} className="buttons-page">1</button>
            <button onClick={() => handlePage(1)} className="buttons-page">2</button>
            <button onClick={() => handlePage(2)} className="buttons-page">3</button>
            <button onClick={() => handlePage(3)} className="buttons-page">4</button>
        </div>
    )
}

export default Buttons
