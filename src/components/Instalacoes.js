import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Instalacoes() {
    return (
        <Container fluid className="m-4">
            <Row className="justify-content-center">
                <Col xs={12} md={10}>
                    <h3 id="instalacoes" style={{
                        textAlign: "justify",
                        textJustify: "inter-word",
                        margin: "1rem"
                    }}>
                        Instalações
                    </h3>

                    <p style={{
                        textAlign: "justify",
                        textJustify: "inter-word",
                        margin: "1rem"
                    }}>
                        O LTC-RX é um laboratório multidisciplinar e multiusuário, que disponibiliza aos pesquisadores da UFPE e do Brasil um sistema de inspeção por raios X, ou seja, um tomógrafo industrial modelo XTH225 ST (Nikon Metrology, Inc), e um servidor/cluster (SGI-Silicon Graphics International Corp.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Instalacoes;
