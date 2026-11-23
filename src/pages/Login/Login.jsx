import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [message, setMessage] = useState('')
    function handleSubmit(event) {
        event.preventDefault()
        setMessage('Login berhasil diproses. Hubungkan form ini ke backend untuk autentikasi.')
    }
    return (
        <section className="account-page py-5">
            <div className="form-card card border-0 shadow-sm mx-auto">
                <div className="card-body p-4 p-md-5">
                    <div className="text-center mb-4">
                        <div className="page-icon bg-primary-subtle text-primary mx-auto mb-3">⌂</div>
                        <h1 className="page-title h3 fw-bold">Selamat Datang Kembali</h1>
                        <p className="text-muted">Masuk untuk melanjutkan ke akun Griya MDP</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label className="form-label" htmlFor="login-email">Email</label>
                        <input className="form-control mb-3" id="login-email" type="email" placeholder="nama@email.com" required />
                        <label className="form-label" htmlFor="login-password">Password</label>
                        <input className="form-control mb-3" id="login-password" type="password" placeholder="Masukkan password" required />
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <label className="small text-muted"><input className="me-2" type="checkbox" />Ingat saya</label>
                            <a className="small text-primary" href="#forgot-password">Lupa password?</a>
                        </div>
                        <button className="btn btn-primary w-100" type="submit">Masuk</button>
                    </form>
                    {message && <div className="alert alert-success mt-3 mb-0">{message}</div>}
                    <p className="text-center text-muted mt-4 mb-0">Belum punya akun? <Link to="/register">Daftar sekarang</Link></p>
                </div>
            </div>
        </section>
    )
}

export default Login
