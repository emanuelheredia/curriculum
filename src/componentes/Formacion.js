import React from 'react';
import ImagenContenido from './ImagenContenido';

function Formacion() {
    return (
        <div>
            <ImagenContenido/>
            <div className='animate__animated animate__bounceInLeft'>
                <h1 className='p-4 text-primary text-center mt-5'>Formación</h1>
                <div className="container mb-5 accordion accordion-flush text-center px-5 shadow p-3 mb-5 bg-body rounded" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <h4 className='w-100 text-center'>React JS</h4>
                        </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <h3 className='m-4'>CODER HOUSE</h3>
                            <h5 className='m-4'>PERIODO</h5>
                            <h5 className='m-4 text-secondary'>2021-2022</h5>
                            <h5 className='m-4'>ESTADO</h5>
                            <h5 className='m-4 text-secondary'>Finalizado</h5>
                            <h5 className='m-4'>CERTIFICADO</h5>
                            <img src={require("../assets/desarrollo-web.png")} alt='certificado' className='certificado'/>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <h4 className='w-100 text-center'>Javascript</h4>
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <h3 className='m-4'>CODER HOUSE</h3>
                            <h5 className='m-4'>PERIODO</h5>
                            <h5 className='m-4 text-secondary'>2021-2021</h5>
                            <h5 className='m-4'>ESTADO</h5>
                            <h5 className='m-4 text-secondary'>Finalizado</h5>
                            <h5 className='m-4'>CERTIFICADO</h5>
                            <img src={require("../assets/javascript.png")} alt='certificado' className='certificado'/>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <h4 className='w-100 text-center'>Desarrollo Web</h4>
                        </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <h3 className='m-4'>CODER HOUSE</h3>
                            <h5 className='m-4'>PERIODO</h5>
                            <h5 className='m-4 text-secondary'>2021-2021</h5>
                            <h5 className='m-4'>ESTADO</h5>
                            <h5 className='m-4 text-secondary'>Finalizado</h5>
                            <h5 className='m-4'>CERTIFICADO</h5>
                            <img src={require("../assets/desarrollo-web.png")} alt='certificado' className='certificado'/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Formacion;