import Link from 'next/link'

const Home = (params) => {
    const redirect = (e) => {
        navigator
    }
    return (<>
        <main>
            <div className="login-container">
                <h1>Monda Agenda</h1>
                <input type="text" placeholder="Usuario" />
                <br />
                <input type="password" placeholder="Password" />
                <br/>
                <Link href="/agenda">
                    <input type="submit" value="Login" />
                </Link>
            </div>
        </main>

        <style jsx>
            {`
            main {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .login-container {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 30%;
                height: 20em;
                width: 20em;
                border: 1px solid black;
                padding: 1em;
                box-shadow: 0 10px 25px rgba(0,0,0, .3);
            }
            `}
        </style>
    </>
    )
}

export default Home
