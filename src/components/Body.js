import React from 'react';

function Body() {
    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-md-9">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    className="d-block w-100"
                                    src="https://s3-sa-east-1.amazonaws.com/icsmp/images/carousel-img-1.jpg"
                                    alt="First slide"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    className="d-block w-100"
                                    src="https://s3-sa-east-1.amazonaws.com/icsmp/images/carousel-img-2.jpg"
                                    alt="Second slide"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    className="d-block w-100"
                                    src="https://s3-sa-east-1.amazonaws.com/icsmp/images/carousel-img-3.jpg"
                                    alt="Third slide"
                                />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" ariahidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                    {/* Descrição */}
                    <div className="jumbotron bg-secondary text-white mt-4">
                        <h2 id="descricao-grupo">
                            Laboratório de Tomografia Computadorizada de Raios X (LTC-RX)
                        </h2>
                        <h3>Multiusuário e Multidisciplinar</h3>
                        <p>
                            {/* Add your description text here */}
                        </p>
                        {/* Add more paragraphs as needed */}
                    </div>

                    {/* Instalações */}
                    <div className="jumbotron bg-secondary text-white">
                        <h2 id="instalacoes">Instalações</h2>
                        <p>
                            {/* Add your installations text here */}
                        </p>
                    </div>

                    {/* Pesquisadores */}
                    <div className="jumbotron bg-secondary text-white">
                        <h2 id="pesquisadores">Corpo Técnico</h2>
                        <p>
                            {/* Add your researchers text here */}
                        </p>
                        {/* Add more paragraphs as needed */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;
