import React from 'react';

function Features() {
    return (
        <section className="features-section py-5">
            <div className="container">
                {/* Wrapper abu-abu muda seperti pada gambar */}
                <div className="bg-light p-4 p-md-5 rounded-3">
                    <div className="row g-4">
                        {/* Feature Card 1 */}
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm h-100 text-center p-4">
                                <div className="card-body">
                                    <div
                                        className="feature-icon-circle feature-icon-circle-blue rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                        style={{ width: '64px', height: '64px' }}
                                    >
                                        <svg width="28" height="28" className="text-primary" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                                        </svg>
                                    </div>
                                    <h5 className="card-title fw-bold">Lokasi Strategis</h5>
                                    <p className="card-text text-muted small">
                                        Dekat dengan pusat kota, sekolah, rumah sakit, dan fasilitas umum lainnya
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature Card 2 */}
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm h-100 text-center p-4">
                                <div className="card-body">
                                    <div
                                        className="feature-icon-circle feature-icon-circle-green rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                        style={{ width: '64px', height: '64px' }}
                                    >
                                        <svg width="28" height="28" className="text-success" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fill="currentColor" d="M12 2 4 5v6c0 5.25 3.42 9.9 8 11 4.58-1.1 8-5.75 8-11V5l-8-3Zm0 17.85c-3.07-1.1-5-4.65-5-8.85V6.4l5-1.88 5 1.88V11c0 4.2-1.93 7.75-5 8.85Zm-1.1-4.1-2.4-2.4 1.06-1.06 1.34 1.33 3.55-3.54 1.06 1.06-4.61 4.61Z" />
                                        </svg>
                                    </div>
                                    <h5 className="card-title fw-bold">Legalitas Lengkap</h5>
                                    <p className="card-text text-muted small">
                                        Semua properti memiliki sertifikat lengkap dan terjamin keamanannya
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature Card 3 */}
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm h-100 text-center p-4">
                                <div className="card-body">
                                    <div
                                        className="feature-icon-circle feature-icon-circle-yellow rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                        style={{ width: '64px', height: '64px' }}
                                    >
                                        <svg width="28" height="28" className="text-warning" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fill="currentColor" d="M3 6h14a2 2 0 0 1 2 2v2h-2V8H3v8h5v2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm5 5h13a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Zm0 2v7h13v-7H8Zm6.5 1.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                                        </svg>
                                    </div>
                                    <h5 className="card-title fw-bold">Harga Terjangkau</h5>
                                    <p className="card-text text-muted small">
                                        Berbagai pilihan dengan skema pembayaran yang fleksibel dan kompetitif
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
