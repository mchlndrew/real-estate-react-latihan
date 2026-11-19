import React from 'react'

function Properties() {
    return (
        <div>
            <section id="properties" className="properties-section py-5">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-lg-12 text-center">
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



                    {/* Load More Button */}
                    <div className="row">
                        <div className="col-12 text-center">
                            <button className="btn btn-primary btn-lg">
                                <i className="bi bi-arrow-down-circle me-2"></i>Lihat Lebih Banyak
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Properties
