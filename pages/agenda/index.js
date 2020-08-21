function Agenda() {
    return (<>
        <div className="container">
            <h1>Agenda de Pepe</h1>
            <div className="lista-contactos">
                <div className="item-contacto">
                    <h2>Gino Luraschi</h2>
                    <ul>
                        <li>11 68668328</li>
                        <li>gino.luraschi@gmail.com</li>
                    </ul>
                </div>
                <div className="item-contacto">
                    <h2>Rocio Livingston</h2>
                    <ul>
                        <li>11 65910322</li>
                        <li>rocioblivingston@gmail.com</li>
                    </ul>
                </div>
                <div className="item-contacto">
                    <h2>Rocio Livingston</h2>
                    <ul>
                        <li>11 65910322</li>
                        <li>rocioblivingston@gmail.com</li>
                    </ul>
                </div>
                <div className="item-contacto">
                    <h2>Rocio Livingston</h2>
                    <ul>
                        <li>11 65910322</li>
                        <li>rocioblivingston@gmail.com</li>
                    </ul>
                </div>
                <div className="item-contacto">
                    <h2>Rocio Livingston</h2>
                    <ul>
                        <li>11 65910322</li>
                        <li>rocioblivingston@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>

        <style jsx>
            {`
                .item-contacto {
                    border: solid 1px black;
                    height: 10em;
                    width: 20em;
                    box-shadow: 0 10px 25px rgba(0,0,0, .3);
                    margin-bottom: 3em;
                }

                .lista-contactos {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    flex-wrap: wrap;
                }

                .container {
                    text-align: center;
                }
            `}
        </style>
    </>
    )
}

export default Agenda
