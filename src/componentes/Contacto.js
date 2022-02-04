import React from 'react';
import ImagenContenido from './ImagenContenido';

function Contacto() {
    return (
        <div>
            <ImagenContenido/>
            <div className='text-center container mt-2 text-center p-5 animate__animated animate__bounceInLeft'>
                <h1 className='p-4 text-primary'>Contacto</h1>
                <div className='shadow p-3 mb-5 bg-body rounded'>
                    <h3 className='m-3 px-5'>Teléfono</h3>
                    <h4 className='text-secondary'>0351-152431240</h4> 
                    <h3 className='m-3 px-5'>Email</h3>
                    <h4 className='text-secondary'>ema_359@hotmail.com</h4>
                    <div className='contenedor-btn d-flex justify-content-center mt-4'>
                        <a rel="noopener noreferrer" target="_blank" href={'https://wa.me/5493512431240'}><button className='btn btn-success d-flex pt-3 m-3 gap-2 btn-contacto justify-content-center'><img className='logo-ws ' src={require('../assets/ws.png')} alt="logows"/><p className='fs-4'>WhatsApp</p></button></a>
                        <a rel="noopener noreferrer" target="_blank" href={'https://www.linkedin.com/in/emanuel-heredia-41749421a/'}><button className='btn btn-primary d-flex pt-3 m-3 gap-2 btn-contacto justify-content-center'><img className='logo-ws text-light ' src={require('../assets/link.png')} alt="logolin"/><p className='fs-4'>Linkedin</p></button></a>
                        <a rel="noopener noreferrer" target="_blank" href={'https://github.com/emanuelheredia'}><button className='btn btn-dark d-flex pt-3 m-3  btn-contacto border border-dark justify-content-center'><img className='logo-ws ms-2 ' src={require('../assets/gh.png')}alt="logogh"/><p className='fs-4 ms-2'>GitHub</p></button></a>    
                    </div>      
                </div>
            </div>
        </div>
    );
}

export default Contacto;