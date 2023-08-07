import React, { useState, useEffect } from "react"
const DataContext = React.createContext()


function DataContextProvider(props) {

    const [product, setProduct] = useState([])

    const [numClick, setNumClick] = useState(0)

    const [loader, setLoader] = useState(true)

    const [errpApi, setErroApi] = useState(false)



    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProduct(json)
                setLoader(false)
            })
            .catch(() => {
                setLoader(false)
                setErroApi(true)
            })
    }, [])
    let data = localStorage.getItem('@Corebiz:Orders');

    let dataCart = JSON.parse(data)
    console.log(dataCart)

    useEffect(() => {
        if (data !== null) {
            setNumClick(dataCart)
        }
    }, [])

    const currentTargetToValue = () => {
        setNumClick(numClick + 1)

        if (dataCart === numClick) {
            localStorage.removeItem('@Corebiz:Orders');
        }
        localStorage.setItem('@Corebiz:Orders', JSON.stringify(numClick));

    }

    return (
        <DataContext.Provider value={{ product, setNumClick, numClick, currentTargetToValue }}>
            {props.children}
        </DataContext.Provider>
    )

}




export { DataContextProvider, DataContext }