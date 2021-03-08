import React from 'react';

const PrimeraApp = ({ saludo = 'Hola no reportado' }) => {

    //const saludo = 'Hola Mundo';

    return (
        <>
            <h1> { saludo } </h1>
            {/*<h1> { JSON.stringify( saludo, null, 3 ) } </h1>*/}
            <p>Mi primera Aplicacion</p>
        </>
    );

}

export default PrimeraApp;