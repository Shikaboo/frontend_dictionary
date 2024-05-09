import {Outlet, Link} from 'react-router-dom';

const main = ()=>{
    return(
        <main>
            <section className="main_list">
                <h2>main</h2>
                <nav>
                    <Link to='/write'>write</Link>
                    <Link to='/list'>list</Link>
                </nav>
                <article>
                    <Outlet />
                </article>
            </section>
        </main>
    )
}

export default main;