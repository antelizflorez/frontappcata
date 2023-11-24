import React from "react";
import { Link } from "react-router-dom";

function Footer () {
    return (

        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Informacion</h6>
                        <p className="text-white text-justify">
                        Cata Store es una empresa líder en la industria de la moda con una pasión por ofrecer prendas elegantes y de alta calidad a nuestros clientes. Fundada en el año 2005, nuestra empresa se ha dedicado a vestir a hombres y mujeres con estilo y confianza, brindándoles una experiencia de compra inigualable.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Paginas</h6>
                        <hr/>
                        <div><Link to="/Home">Home</Link></div>
                        <div><Link to="/Nosotros">Nosotros</Link></div>
                        <div><Link to="/Contacto">Contacto</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Informacion de contactos</h6>
                        <hr/>
                        <div><p className="text-white mb-1">direccion del local: Cll 10 av0 Cucuta</p></div>
                        <div><p className="text-white mb-1">telefono: 3176477559</p></div>
                        <div><p className="text-white mb-1">email: est_aa_anteliz@fesc.edu.co</p></div>
                    </div>
                </div>
            </div>

        </section>

    );
}

export default Footer;