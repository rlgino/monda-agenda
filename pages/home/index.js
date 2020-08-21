import { useRouter } from 'next/router'

const Home = ({ ctx }) => {
    const router = useRouter()
    router.push('/login')
    return (<>
        <main>
            <div className="login-container">
                <h1>Bienvenido!</h1>
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

Home.getInitialProps = ctx => {
    // We check for ctx.res to make sure we're on the server.
    if (ctx.res) {
        ctx.res.writeHead(302, { Location: '/login' });
        ctx.res.end();
    }
    return {};
}

export default Home
