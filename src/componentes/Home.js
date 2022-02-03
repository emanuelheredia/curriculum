import React from 'react';

function Home() {
    return (
        <div className='container mt-5 text-center '>
            <img src={"/src/assets/banner.jpg"} alt='banner'/>
            <h1 className='p-4 text-primary'>Hola, mi nombre es Emanuel Heredia</h1>
            <h2 className='p-2'>Soy Front-End Developer</h2>
            <h3 className='p-2 text-secondary'>Bienvenido a mi Portafolio digital, creado 100% por mí, usando React JS, CSS y Bootstrap. Aquí podrás ver algunos de mis proyectos y también trabajos realizados en cursos de desarrollo web</h3>
        </div>
    );
}

export default Home;