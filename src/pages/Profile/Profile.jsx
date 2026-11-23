function Profile() {
    return (
        <section className="profile-page py-5">
            <div className="profile-header rounded-3 p-4 p-md-5 mb-4 text-white">
                <p className="eyebrow">AKUN SAYA</p>
                <h1 className="h2 fw-bold mb-2">Profil Pengguna</h1>
                <p className="mb-0">Kelola informasi akun dan aktivitas pencarian hunian Anda.</p>
            </div>
            <div className="row g-4">
                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm text-center h-100">
                        <div className="card-body p-4">
                            <div className="avatar bg-primary text-white mx-auto mb-3">AM</div>
                            <h2 className="h5 fw-bold mb-1">Andi MDP</h2>
                            <p className="text-muted mb-3">andi@example.com</p>
                            <button className="btn btn-outline-primary btn-sm" type="button">Edit Profil</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body p-4">
                            <h2 className="h5 fw-bold mb-4">Informasi Akun</h2>
                            <div className="profile-row"><span>Nama lengkap</span><strong>Andi MDP</strong></div>
                            <div className="profile-row"><span>Email</span><strong>andi@example.com</strong></div>
                            <div className="profile-row"><span>Nomor telepon</span><strong>+62 812 3456 7890</strong></div>
                            <div className="profile-row"><span>Status akun</span><span className="badge text-bg-success">Aktif</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile
