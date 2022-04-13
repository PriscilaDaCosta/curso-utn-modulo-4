import React from 'react';

const ContactoPage = (props) => {
    return (
        <main className='holder'>
            <div className='columna contacto'>
                <h2>Complete le siguiente formulario</h2>
                <form action='' method='' className='formulario'>
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre"/>
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="text" name="email"/>
                    </p>
                    <p>
                        <label>Telefono</label>
                        <input type="text" name="telefono"/>
                    </p>
                    <p>
                        <label>Comentario</label>
                        <textarea name="mensaje"></textarea>
                    </p>
                    <p className='center'><input type="submit" value="Enviar"/></p>
                </form>
            </div>
            <div className='columna datos'>
                <h2>Otras vias de contactarse con nosotros usando los siguientes medios:</h2>
                <ul>
                    <li>Telefono: 123455677</li>
                    <li>Email: </li>                    
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Skype</li>
                    <li>Intagram</li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;