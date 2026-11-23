import { Link } from 'react-router-dom'
import LokasiPerumahan from '../../components/LokasiPerumahan/LokasiPerumahan'


function Home() {
    // Array untuk data perumahan (bisa diisi dari backend nanti)
    const housingList = [
        {
            id: 1,
            name: 'Griya Asri Residence',
            location: 'Jakarta Selatan',
            price: 850000000,
            bedrooms: 3,
            bathrooms: 2,
            area: 120,
            image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop',
            rating: 4.5,
            status: 'Available',
        },
        {
            id: 2,
            name: 'Taman Indah Village',
            location: 'Tangerang',
            price: 650000000,
            bedrooms: 2,
            bathrooms: 1,
            area: 90,
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
            rating: 4.8,
            status: 'Available',
        },
        {
            id: 3,
            name: 'Villa Sejahtera',
            location: 'Bogor',
            price: 1200000000,
            bedrooms: 4,
            bathrooms: 3,
            area: 180,
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop',
            rating: 4.9,
            status: 'Available',
        },
    ]

    return (
        <>
            {/* 1. Hero Section */}
            <section className="hero-section bg-primary text-white py-5 mb-5 rounded">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <h1 className="display-4 fw-bold mb-3">Perumahan Impian Semua Insan</h1>
                            <p className="lead mb-4">
                                Temukan rumah idaman Anda dengan lokasi strategis, fasilitas lengkap,
                                dan harga terjangkau. Griya MDP hadir untuk mewujudkan hunian impian keluarga Indonesia.
                            </p>
                            <div className="d-flex gap-3">
                                <a href="#properties" className="btn btn-light btn-lg text-primary fw-bold">
                                    <i className="bi bi-search me-2"></i>Cari Properti
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
                                alt="Perumahan Modern"
                                className="img-fluid rounded shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* 2. Features Section */}
            <section className="features-section py-5 bg-light mb-5 rounded">
                <div className="container">
                    <div className="row text-center mb-5">
                        <div className="col-lg-12">
                            <h2 className="fw-bold mb-3">Mengapa Memilih Griya MDP?</h2>
                            <p className="text-muted">Kami memberikan yang terbaik untuk hunian impian Anda</p>
                        </div>
                    </div>
                    <div className="row g-4">
                        {/* Feature 1 */}
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm h-100 text-center p-4">
                                <div className="card-body">
                                    <div className="feature-icon-circle feature-icon-circle-blue rounded-circle d-inline-flex p-3 mb-3">
                                        <svg className="feature-icon" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                                        </svg>
                                    </div>
                                    <h5 className="card-title fw-bold">Lokasi Strategis</h5>
                                    <p className="card-text text-muted">
                                        Dekat dengan pusat kota, sekolah, rumah sakit, dan fasilitas umum lainnya
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Feature 2 */}
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm h-100 text-center p-4">
                                <div className="card-body">
                                    <div className="feature-icon-circle feature-icon-circle-green rounded-circle d-inline-flex p-3 mb-3">
                                        <svg className="feature-icon" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fill="currentColor" d="M12 2 4 5v6c0 5.25 3.42 9.9 8 11 4.58-1.1 8-5.75 8-11V5l-8-3Zm0 17.85c-3.07-1.1-5-4.65-5-8.85V6.4l5-1.88 5 1.88V11c0 4.2-1.93 7.75-5 8.85Zm-1.1-4.1-2.4-2.4 1.06-1.06 1.34 1.33 3.55-3.54 1.06 1.06-4.61 4.61Z" />
                                        </svg>
                                    </div>
                                    <h5 className="card-title fw-bold">Legalitas Lengkap</h5>
                                    <p className="card-text text-muted">
                                        Semua properti memiliki sertifikat lengkap dan terjamin keamanannya
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Feature 3 */}
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm h-100 text-center p-4">
                                <div className="card-body">
                                    <div className="feature-icon-circle feature-icon-circle-yellow rounded-circle d-inline-flex p-3 mb-3">
                                        <svg className="feature-icon" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fill="currentColor" d="M3 6h14a2 2 0 0 1 2 2v2h-2V8H3v8h5v2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm5 5h13a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Zm0 2v7h13v-7H8Zm6.5 1.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                                        </svg>
                                    </div>
                                    <h5 className="card-title fw-bold">Harga Terjangkau</h5>
                                    <p className="card-text text-muted">
                                        Berbagai pilihan dengan skema pembayaran yang fleksibel dan kompetitif
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* 3. Properties Section (Grid Layout) */}
            <section id="properties" className="properties-section py-5 mb-5">
                <div className="container">
                    <div className="row mb-4 text-center">
                        <div className="col-lg-12">
                            <h2 className="fw-bold mb-3">Pilihan Hunian Terbaik</h2>
                            <p className="text-muted mb-4">
                                Jelajahi berbagai pilihan properti berkualitas dengan fasilitas modern
                            </p>
                            {/* Filter Buttons */}
                            <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
                                <button className="btn btn-outline-primary active">
                                    <i className="bi bi-grid-3x3-gap me-2"></i>Semua
                                </button>
                                <button className="btn btn-outline-primary">
                                    <i className="bi bi-house me-2"></i>Rumah
                                </button>
                                <button className="btn btn-outline-primary">
                                    <i className="bi bi-building me-2"></i>Apartemen
                                </button>
                                <button className="btn btn-outline-primary">
                                    <i className="bi bi-tree me-2"></i>Villa
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Looping Housing Cards dengan .map() */}
                    <div className="row g-4 mb-4">
                        {housingList.map((housing) => (
                            <div className="col-md-6 col-lg-4" key={housing.id}>
                                <LokasiPerumahan data={housing} />
                            </div>
                        ))}
                    </div>
                    {/* Tombol Lihat Lebih Banyak */}
                    <div className="row">
                        <div className="col-12 text-center">
                            <button className="btn btn-primary btn-lg">
                                <i className="bi bi-arrow-down-circle me-2"></i>Lihat Lebih Banyak
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* 4. CTA Section */}
            <section className="cta-section bg-primary text-white py-5 rounded">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 mb-3 mb-lg-0 text-center text-lg-start">
                            <h3 className="fw-bold mb-2">Siap Menemukan Rumah Impian Anda?</h3>
                            <p className="mb-0">
                                Hubungi kami sekarang dan dapatkan penawaran terbaik untuk properti pilihan Anda
                            </p>
                        </div>
                        <div className="col-lg-4 text-center text-lg-end">
                            <Link to="/contact" className="btn btn-light btn-lg text-primary fw-bold">
                                <i className="bi bi-telephone-fill me-2"></i>Hubungi Kami
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
