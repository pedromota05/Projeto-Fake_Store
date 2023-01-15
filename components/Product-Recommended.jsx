import Head from 'next/head'

export const ProductRecommended = () => {
    return(
    <div lang="pt-br">
        <Head>
            <title>Create Next App</title>
            <meta charSet="utf-8"></meta>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
        
        <section className="padding-y">
            <div className="container-teste">
                <header className="section-heading">
                    <h4 className="section-title" style={{marginBottom: '15px'}}>Recommended items</h4>
                </header> 
                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-12">
                        <figure className="card card-product-grid">
                            <div className="img-wrap d-flex justify-content-center">
                                <span className="topbar">
                                    <a href="#!" className="float-end"><i className="far fa-heart coracao"></i></a>
                                    <span className="badge bg-danger"> New </span>
                                </span>
                                <a href="#!"><img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/7.webp"/></a>
                            </div>
                            <figcaption className="info-wrap border-top">
                                <a href="#!" className="title">Gaming Headset with Mic</a>
                                    <div className="price-wrap mb-3">
                                        <strong className="price">$18.95</strong>
                                        <del className="price-old">$24.99</del>
                                    </div>
                                    <a href="#!" className="btn btn-recommended w-100">Add to cart</a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <figure className="card card-product-grid">
                            <div className="img-wrap d-flex justify-content-center"> 
                                <span className="topbar">
                                    <a href="#!" className="float-end"><i className="far fa-heart coracao"></i></a>
                                </span>
                                <a href="#!"><img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.webp"/></a>
                            </div>
                            <figcaption className="info-wrap border-top">
                                <a href="#!" className="title">Apple Watch Series 1 Sport </a>
                                <div className="price-wrap mb-3">
                                    <strong className="price">$120.00</strong>
                                </div>
                                <a href="#!" className="btn btn-recommended w-100">Add to cart</a>
                            </figcaption>
                        </figure> 
                    </div> 
                    <div className="col-lg-3 col-sm-6 col-12">
                        <figure className="card card-product-grid">
                            <div className="img-wrap d-flex justify-content-center"> 
                                <span className="topbar">
                                    <a href="#!" className="float-end"><i className="far fa-heart coracao"></i></a>
                                </span>
                                <a href="#!"><img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp"/></a>
                            </div>
                            <figcaption className="info-wrap border-top">
                                <a href="#!" className="title"> Men's Denim Jeans Shorts  </a>
                                <div className="price-wrap mb-3">
                                    <strong className="price">$80.50</strong>
                                </div>
                                <a href="#!" className="btn btn-recommended w-100">Add to cart</a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <figure className="card card-product-grid">
                            <div className="img-wrap d-flex justify-content-center"> 
                                <span className="topbar">
                                    <a href="#!" className="float-end"><i className="far fa-heart coracao"></i></a>
                                </span>
                                <a href="#!"><img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp"/></a>
                            </div>
                            <figcaption className="info-wrap border-top">
                                <a href="#!" className="title text-truncate">Mens T-shirt Cotton Base Layer Slim fit </a>
                                <div className="price-wrap mb-3">
                                    <strong className="price">$13.90</strong>
                                </div>
                                <a href="#!" className="btn btn-recommended w-100">Add to cart</a>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" />
    </div>
    )
}