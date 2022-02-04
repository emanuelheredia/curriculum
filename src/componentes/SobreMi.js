import React from 'react';
import ImagenContenido from './ImagenContenido';

function SobreMi(props) {
    return (
        <div>
            <ImagenContenido/>
            <div className='text-center container mt-2 text-center p-5 animate__animated animate__bounceInLeft'>
                <h1 className='p-4 text-primary'>Sobre mi</h1>
                <p className='m-5 px-5 fs-5 shadow p-3 mb-5 bg-body rounded p-home'>Soy desarrollador Frontend con gran pasión por resolver problemas utilizando nuevas tecnologías, y con gran entusiasmo en aprender continuamente. Me encantaría formar parte de una empresa que me permita
                trabajar de forma cooperativa con otras personas y así poder aprender y desarrollarme de manera
                profesional junto a ellos.</p>
            </div>
        </div>
    );
}

export default SobreMi;