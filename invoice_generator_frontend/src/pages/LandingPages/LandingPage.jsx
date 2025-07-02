import "./LandingPage.css";

const LandingPage = () => {
    return (
        <header className="text-black text-center" style={{ backgroundColor: 'rgba(13, 110, 253, 0.80)' }}>
            <div className="container py-5 d-flex flex-column justify-content-center" style={{ minHeight: '85vh' }}>
                <div className="row py-lg-5">
                    <div className="col-lg-9 col-md-10 mx-auto">
                        <h1 className="display-3 fw-bold mb-4">
                            Effortless Invoicing. Professional Results.
                        </h1>
                        <p className="lead mb-5" style={{ color: "white", fontSize: '1.5rem' }}>
                            Stop wrestling with spreadsheets. QuickInvoice helps you create and send beautiful invoices in minutes, so you get paid faster.
                        </p>
                        <p>
                            <button className="btn btn-lg btn-warning fw-bold rounded-pill my-2 mx-1 px-5 py-3">
                                Generate your first invoice
                            </button>
                            <a href="#how-it-works" className="btn btn-lg fw-bold rounded-pill my-2 mx-1 px-5 py-3" style={{ backgroundColor: "rgb(221, 226, 243)", color: "black" }}>
                                Learn More
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default LandingPage;