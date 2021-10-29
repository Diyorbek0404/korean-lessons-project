import React from 'react';
import "./Login.css"
import {Link} from "react-router-dom"
import rasmLogin from "../../components/Lib/png/rasm.png"

const Login = () => {
    return (
        <div>
            {/* <img src={rasm} alt="" /> */}
            <section className="login">
                <div className="login-form-div">
                    <h1 className="login-title">Login</h1>
                    <p className="login-subtitle">Saytdan to’liq foydalaning</p>
                    <form className="login-form">
                        <input type="email" className="login-input" placeholder="email" />
                        <input type="password" className="login-input" placeholder="parol" />
                        <Link className="form-subtitle" href="/">Parolni unutdingizmi?</<Link>
                        <button className="form-login-btn">Kirish</button>
                    </form>
                    <Link href="/signup" className="link-reg">Ro’yxatdan o’tishni xoxlisizmi?</Link>
                </div>

                <div className="login-right">
                    <h2 className="login-right-title">Biz birga ta’lim oling</h2>
                    <p className="login-right-subtitle">Video kurslar faqat siz uchun</p>
                    <img src={rasmLogin} className="login-right-img" alt="" />
                </div>
            </section>
        </div>
    );
}

export default Login;
