import React from 'react';

const HomePage = (props) => {
    return (
        <main className='holder'>
            <div className='homeimg'>
                <img src="images/banner.png" alt="punto"></img>
            </div>
            <div className='columnas'>
                <div className='bienvenidos left'>
                    <h2>Bienvenidos</h2>
                    <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sd iusmod tempor incididunt ut labore et dolore magna quis nostrud exercitation</p>
                </div>
                <div className='testimonios right'>
                    <h2>Testimonios</h2>
                    <div className='testimonio'>
                        <span className='cita'>Simplemente excelente</span>
                        <span className='autor'>Juan Perez</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;