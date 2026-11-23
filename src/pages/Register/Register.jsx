import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
    const [message, setMessage] = useState('')
    function handleSubmit(event) {
        event.preventDefault()
        setMessage('Pendaftaran berhasil diproses. Silakan hubungkan ke backend untuk menyimpan akun.')
    }
    return (
        <section className="account-page py-5">
            <div className="form-card card border-0 shadow-sm mx-auto">
                <div className="card-body p-4 p-md-5">
                    <div className="text-center mb-4">
                        <div className="page-icon bg-success-subtle text-success mx-auto mb-3">+</div>
                        <h1 className="page-title h3 fw-bold">Buat Akun Baru</h1>
                        <p className="text-muted">Temukan hunian impian bersama Griya MDP</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label className="form-label" htmlFor="register-name">Nama lengkap</label>
                        <input className="form-control mb-3" id="register-name" type="text" placeholder="Nama lengkap" required />
                        <label className="form-label" htmlFor="register-email">Email</label>
                        <input className="form-control mb-3" id="register-email" type="email" placeholder="nama@email.com" required />
                        <label className="form-label" htmlFor="register-password">Password</label>
                        <input className="form-control mb-3" id="register-password" type="password" placeholder="Minimal 8 karakter" minLength="8" required />
                        <label className="form-label" htmlFor="register-confirm">Konfirmasi password</label>
                        <input className="form-control mb-4" id="register-confirm" type="password" placeholder="Ulangi password" minLength="8" required />
                        <button className="btn btn-success w-100" type="submit">Daftar</button>
                    </form>
                    {message && <div className="alert alert-success mt-3 mb-0">{message}</div>}
                    <p className="text-center text-muted mt-4 mb-0">Sudah punya akun? <Link to="/login">Masuk di sini</Link></p>
                </div>
            </div>
        </section>
    )
}

export default Register
