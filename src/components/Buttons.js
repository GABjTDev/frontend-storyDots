const Buttons = ({setPage}) => {

    const handlePage = (n) => {
        setPage(n)
    }


    return (
        <div className="buttons">
            <button onClick={() => handlePage(0)}>1</button>
            <button onClick={() => handlePage(1)}>2</button>
            <button onClick={() => handlePage(2)}>3</button>
            <button onClick={() => handlePage(3)}>4</button>
        </div>
    )
}

export default Buttons
