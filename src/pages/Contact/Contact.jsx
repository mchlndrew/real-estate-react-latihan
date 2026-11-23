import { useState } from 'react'

function Contact() {
    const [message, setMessage] = useState('')
    function handleSubmit(event) {
        event.preventDefault()
        setMessage('Pesan berhasil dikirim. Tim Griya MDP akan segera menghubungi Anda.')
    }
    return (
        <section className="contact-page py-5">
            <div className="row g-4 align-items-stretch">
                <div className="col-lg-5">
                    <div className="contact-intro h-100 rounded-3 p-4 p-md-5 text-white">
                        <p className="eyebrow">HUBUNGI KAMI</p>
                        <h1 className="h2 fw-bold mb-3">Ada yang bisa kami bantu?</h1>
                        <p className="mb-4">Konsultasikan kebutuhan hunian Anda. Tim kami siap membantu menemukan pilihan terbaik.</p>
                        <div className="contact-detail"><strong>Email</strong><span>halo@griyamdp.id</span></div>
                        <div className="contact-detail"><strong>Telepon</strong><span>+62 812 3456 7890</span></div>
                        <div className="contact-detail"><strong>Alamat</strong><span>Jl. Sudirman No. 10, Jakarta</span></div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body p-4 p-md-5">
                            <h2 className="h4 fw-bold mb-4">Kirim Pesan</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6"><label className="form-label" htmlFor="contact-name">Nama</label><input className="form-control" id="contact-name" required /></div>
                                    <div className="col-md-6"><label className="form-label" htmlFor="contact-email">Email</label><input className="form-control" id="contact-email" type="email" required /></div>
                                    <div className="col-12"><label className="form-label" htmlFor="contact-subject">Subjek</label><input className="form-control" id="contact-subject" required /></div>
                                    <div className="col-12"><label className="form-label" htmlFor="contact-message">Pesan</label><textarea className="form-control" id="contact-message" rows="5" required></textarea></div>
                                    <div className="col-12"><button className="btn btn-primary" type="submit">Kirim Pesan</button></div>
                                </div>
                            </form>
                            {message && <div className="alert alert-success mt-3 mb-0">{message}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
