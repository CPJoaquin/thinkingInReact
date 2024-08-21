import { useEffect, useState } from "react";

const Contador = () => {

    const [contador, setContador]=useState(10);

    const handledContador = () => {
        setContador(contador+1); }
    const restContador = () => {
        setContador(contador-1);}

    useEffect(() => {
        setContador(12);
    },[]);

    useEffect(() => {
        if (contador === 15) {
            alert('El contador es 15');
        }
    },[contador]);

    //funcion que se ejecuta cuando el componente se desmonta
    useEffect(() => {
        return () => {
            console.log('El componente se desmonto');
        }
    });

    return (
        <>
            <h4>Componente contador </h4>
            <h5>{contador}</h5>
            <div>
                <button onClick={handledContador} >
                    aumentar
                </button>
                <button onClick={restContador}>
                    disminuir
                </button>
            </div>
        </>
    );
};
export default Contador;