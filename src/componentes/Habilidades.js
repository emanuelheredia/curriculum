import React from 'react';
import ImagenContenido from './ImagenContenido';

function Habilidades(props) {
    return (
        <div>
            <ImagenContenido/>
            <div className='text-center container mt-2 text-center p-5 animate__animated animate__bounceInLeft'>
                <h1 className='p-4 text-primary'>Habilidades</h1>
                <div className='shadow p-3 mb-5 bg-body rounded'>
                    <h3 className='m-3  text-center'>DESARROLLO WEB</h3>
                    <h4 className='text-secondary'>React JS</h4>
                    <h4 className='text-secondary'>Redux</h4>
                    <h4 className='text-secondary'>NODEJS</h4>
                    <h4 className='text-secondary'>Javascript</h4>
                    <h4 className='text-secondary'>CSS</h4>
                    <h4 className='text-secondary'>HTML</h4>
                    <h4 className='text-secondary'>JQuery</h4>
                    <h4 className='text-secondary'>Firebase</h4>
                    <h4 className='text-secondary'>Bootstrap</h4>
                    <h4 className='text-secondary'>GIT</h4>
                </div>
            </div>
        </div>
    );
}

export default Habilidades;
