import React from 'react'
// import ".all.css"
import { Link } from 'react-router-dom'

const Youtubeaside = () => {
    return (
            <aside>
                <button>
                    <Link to="/">home</Link>
                </button>
                <button>
                <Link to="/*">not found</Link>
                </button>
                <button>
                <Link to="/second">add to DB JSON</Link>
                </button>
                <button>
                <Link to="/form">form</Link>
                </button>
                <button>
                <Link to="/table">table</Link>
                </button>
                <button>
                <Link to="/seedata">viewdata</Link>
                </button>
                <hr />
                <button>home</button>
                <button>home</button>
                <button>home</button>
                <hr />
                <button>home</button>
                <button>home</button>
                <button>home</button>
                <hr />
            </aside>
    )
}

export default Youtubeaside