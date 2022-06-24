import { useEffect } from 'react';
import { Link } from 'wouter';
import "./Navbar.css"



export function Navbar(){


useEffect(()=>{
    let nav = document.querySelector(".navigationWrapper")
    let gifBody = document.querySelector(".gif_body")

    nav.addEventListener("click", (e)=>{
        if (e.target.getAttribute("id")==="gif") {
            gifBody.classList.add("show")
        }
        else gifBody.classList.remove("show")
    }
    )
},[])

    return (
        <div className="Nav">
            <nav className="navigationWrapper">
            
                <div className="logoWrapper">
                    <Link className="link" id="gif1" to="/">
                    <span className="stylish">Gifphy</span>
                    <span className="logo">App</span>
                    </Link>
                </div>
            
                <ul className="navigation">
                    <li className="parent"><Link className="link" to="/initial">Initial</Link></li>
                    <li className="parent"><Link className="link" id="gif" to="/gif">Gifphy App</Link></li>
                    <li className="parent"><Link className="link" to="/api">API CRUD</Link></li>
                </ul>
            </nav>

        </div>
    )
}

