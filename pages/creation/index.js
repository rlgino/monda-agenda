import { useState } from "react"

function CreationPage() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const saveContact = (e) => {
        e.preventDefault();
        console.log(`${name} ${phone} ${email}`);
    }

    return (<>
        <main>
            <h1 className="title is-1 p-4">Nuevo contacto</h1>
            <form className="columns" onSubmit={e => saveContact(e)}>
                <div className="column is-flex is-flex-direction-column is-half">
                    <input className="input m-4" type="text" placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} required />
                    <input className="input m-4" type="mail" placeholder="Telefono" value={email} onChange={e => setEmail(e.target.value)} required />
                    <input className="input m-4" type="tel" placeholder="Mail" value={phone} onChange={e => setPhone(e.target.value)} />

                    <div className="control is-flex is-justify-content-flex-end">
                        <input type="submit" value="Guardar" className="button is-success mr-4" />
                        <a href="/home">
                            <input type="button" value="Cancelar" className="button is-danger" />
                        </a>
                    </div>
                </div>
            </form>
        </main>

    </>
    )
}

export default CreationPage
