import "./LandingPage.css";
import Logo from "../../components/logo";
import { assets } from "../../assets/assets.js";
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

        {/* Features Section: Highlights key benefits with images and text */}
                    <section id="features" className="py-5">
                        <div className="container">
                            <h2 className="text-center mb-5 display-5 fw-bold">Why Choose QuickInvoice?</h2>
                            {/* Feature 1 */}
                            <div className="row align-items-center gy-4">
                                <div className="col-md-6">
                                    <img
                                        src={assets.landing1}
                                        className="img-fluid rounded shadow-lg"
                                        alt="Invoice Customization"
                                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/E0E0E0/000000?text=Error'; }}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <h3 className="fw-bold mx-2">Easy to fill invoice details</h3>
                                    <p className="text-muted lead fs-6 mx-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <ul className="list-unstyled text-muted">
                                        <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Curated list of templates from gallery.</li>
                                        <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Add your logo and invoice details.</li>
                                        <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Tailor fields to your needs.</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Feature 2 */}
                            <div className="row align-items-center gy-4 mt-5 flex-row-reverse"> {/* flex-row-reverse alternates image/text */}
                                <div className="col-md-6">
                                    <img
                                        src={assets.landing2}
                                        className="img-fluid rounded shadow-lg"
                                        alt="Time Saving"
                                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/E0E0E0/000000?text=Error'; }}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <h3 className="fw-bold mx-2">Beautiful Dashboard</h3>
                                    <p className="text-muted lead fs-6 mx-2">
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <ul className="list-unstyled text-muted">
                                        <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>View the previous invoices.</li>
                                        <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Your saved invoices with thumbnail.</li>
                                        <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Reuse one or more invoices.</li>
                                        <li><i className="bi bi-check-circle-fill text-primary me-2"></i>Track the invoices.</li>
        
                                    </ul>
                                </div>
                            </div>
                            {/* Feature 3 */}
                            <div className="row align-items-center gy-4 mt-5">
                                <div className="col-md-6">
                                    <img
                                        src={assets.landing3}
                                        className="img-fluid rounded shadow-lg"
                                        alt="Invoice Customization"
                                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/E0E0E0/000000?text=Error'; }}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <h3 className="fw-bold mx-2">Invoice Preview with Action Buttons</h3>
                                    <p className="text-muted lead fs-6 mx-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <ul className="list-unstyled text-muted">
                                        <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Live preview.</li>
                                        <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Switch between multiple invoices.</li>
                                        <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>One click to Save, Download and Delete invoices.</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Feature 4 */}
                            <div className="row align-items-center gy-4 mt-5 flex-row-reverse"> {/* flex-row-reverse alternates image/text */}
                                <div className="col-md-6">
                                    <img
                                        src={assets.landing4}
                                        className="img-fluid rounded shadow-lg"
                                        alt="Time Saving"
                                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/E0E0E0/000000?text=Error'; }}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <h3 className="fw-bold mx-2">Send invoices instantly</h3>
                                    <p className="text-muted lead fs-6 mx-2">
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <ul className="list-unstyled text-muted">
                                        <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Send invoices instantly without leaving the application.</li>
                                        <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>One click to send invoices.</li>
                                        <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Send unlimited invoices.</li>
        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
        
                    {/* Call to Action Section: Final prompt for users to start */}
                    <section id="generate-invoice" className="py-5 text-center bg-primary text-white">
                        <div className="container">
                            <h2 className="display-5 fw-bold mb-3">Ready to Streamline Your Invoicing?</h2>
                            <p className="lead mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                                Join thousands of freelancers and small businesses who trust QuickInvoice.
                                Start creating professional invoices today – its fast, easy, and effective!
                            </p>
                            <button className="btn btn-lg btn-warning fw-bold rounded-pill px-5 py-3">
                                Start Generating Invoices Now
                            </button>
                            <p className="mt-3 small">
                                (This will lead to the invoice generation interface)
                            </p>
                        </div>
                    </section>
        
        {/* Footer: Copyright */}
            <footer className="py-5 bg-dark text-white-50">
                <div className="container text-center">
                    <Logo/>
                    <p className="text-white fw-bold mt-2">QuickInvoice</p>
                    <p className="mb-0">
                         QuickInvoice. All Rights Reserved.
                    </p>
                    <p className="mb-0 small">
                        Crafted with for freelancers and small businesses.
                    </p>
                    
                </div>
            </footer>

        
          </>
    )
}

export default LandingPage;