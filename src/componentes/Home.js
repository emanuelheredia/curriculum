import React from 'react';

function Home() {
    return (
        <>
            <img src={require("../assets/banner.jpg")}alt='banner' className='banner '/>
        <div className='container mt-2 text-center p-5 animate__animated animate__backInDown'>
            <h1 className='p-4 text-primary'>Hola, mi nombre es Emanuel Heredia</h1>
            <h3 className='p-2'>Soy Front-End Developer</h3>
            <p className='m-5 px-5 fs-5 p-home'>Bienvenido a mi Portafolio digital, creado 100% por mí, usando React JS, CSS y Bootstrap. Aquí podrás ver algunos de mis proyectos y también trabajos realizados en cursos de desarrollo web.</p>
        </div>
        </>
    );
}
export default Home;