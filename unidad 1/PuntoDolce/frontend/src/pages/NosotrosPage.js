import React from 'react';

const NosotrosPage = (props) => {
    return (
        <section className='holder'>
            <div className='historia'>
                <h2>Historia</h2>
                <p>Lorem ipsum dolor sit amet, consetetur adipisicing tempor incididunt ut labore dolore magna aliqua</p>
            </div>
            <h2>Staff</h2>
            <div className='personas'>
                <div className='persona'>
                    <img src="images/nosotros/p1.png" width="75" alt="juan"/>
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor sit amet, consetetur adipisicing tempor incididunt ut labore dolore magna aliqua</p>
                </div>
            </div>
        </section>
    );
}

export default NosotrosPage;