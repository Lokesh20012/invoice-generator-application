import "./LandingPage.css";

const LandingPage = () => {
    return (
    <>
        <header className="text-black text-center" style={{ backgroundColor: 'rgba(13, 110, 253, 0.80)' }}>
            <div className="container py-5 d-flex flex-column justify-content-center" style={{ minHeight: '85vh' }}>
                <div className="row py-lg-5">
                    <div className="col-lg-9 col-md-10 mx-auto">
                        <h1 className="display-3 fw-bold mb-4">
                            Effortless Invoicing. Professional Results.
                        </h1>
                        <p className="mb-5" style={{ color: "white", fontSize: '1.5rem' }}>
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
 
        <section>
            <div className="container">
                <h2 className="fw-bold text-center m-5 display-5"> Get Started in just 4 Steps</h2>
                <div className="row g-4">
                    {/* card 1 enter detail */}
                          <div className="col-md-6 col-lg-3 d-flex">
                                    <div className="shadow-sm border-0 text-center">
                                                <div className="p-4 ">
                                                    <img src="https://placehold.co/150x150/0D6EFD/FFFFFF?text=1&font=montserrat" alt="Enter Details" className="rounded-circle"/>
                                                </div>
                                                <div className=" card-body p-4">
                                                <h5 className="card-title fw-bold mb-2 fs-5">Enter Details</h5>
                                                        <p> 
                                                            Quickly fill in your clients information, item descriptions, quantities, and prices. Our intuitive form makes it a breeze.
                                                        </p>
                                                
                                                </div>
                                    </div>
                            </div>

                        
                        
                        
                        {/* card 2 */}

                            <div className="col-md-6 col-lg-3 d-flex">
                                <div className="shadow-sm border-0 text-center">
                                            <div className="p-4">
                                                <img src="https://placehold.co/150x150/0D6EFD/FFFFFF?text=2&font=montserrat" alt="Select template" className="rounded-circle"/>
                                            </div>
                                            <div className=" card-body p-4">
                                            <h5 className="card-title fw-bold mb-2 fs-5">Select Template</h5>
                                                    <p> 
                                                        Browse our gallery of professionally designed templates. Pick one that matches your brand and style.
                                                    </p>
                                            
                                            </div>
                                </div>
                            </div>

                        

                            {/* card 3 preview template */}
                                    

                            <div className="col-md-6 col-lg-3 d-flex">
                                <div className="shadow-sm border-0 text-center">
                                            <div className="p-4">
                                                <img src="https://placehold.co/150x150/0D6EFD/FFFFFF?text=3&font=montserrat" alt="Preview template" className="rounded-circle"/>
                                            </div>
                                            <div className=" card-body p-4">
                                             <h5 className="card-title fw-bold mb-2 fs-5">Preview Template</h5>
                                                    <p> 
                                                       See exactly how your invoice will look before sending it. Make any last-minute adjustments with ease.
                                                    </p>
                                            
                                            </div>
                                </div>
                            </div>

                    

                            

                            {/* section 4  Download and Save */}

                            <div className="col-md-6 col-lg-3 d-flex">
                                <div className="shadow-sm border-0 text-center">
                                    <div className="p-4">
                                        <img src="https://placehold.co/150x150/0D6EFD/FFFFFF?text=4&font=montserrat" alt="Download & Save" className="rounded-circle"/>
                                    </div>
                                            <div className="card-body p-4">
                                            <h5 className="card-title fw-bold mb-2 fs-5">Download & Save</h5>
                                                    <p> 
                                                        Download your invoice as a PDF, send it directly via email, or save it for your records and future reference.
                                                    </p>
                                            
                                            </div>
                                </div>
                            </div>
                </div>     
            </div>  
        </section>



         <footer className="py-5 bg-dark text-white-50">
                <div className="container text-center">
                    <Logo />
                    <p className="text-white fw-bold mt-2">QuickInvoice</p>
                    <p className="mb-0">
                        &copy; {new Date().getFullYear()} QuickInvoice. All Rights Reserved.
                    </p>
                    <p className="mb-0 small">
                        Crafted with <i className="bi bi-heart-fill text-danger"></i> for freelancers and small businesses.
                    </p>
                    <p className="mt-2">
                        {/* Placeholder social media links */}
                        <a href="#" className="text-white-50 me-2"><i className="bi bi-twitter-x"></i></a>
                        <a href="#" className="text-white-50 me-2"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="text-white-50"><i className="bi bi-linkedin"></i></a>
                    </p>
                </div>
            </footer>
    </>
    )
}

export default LandingPage;