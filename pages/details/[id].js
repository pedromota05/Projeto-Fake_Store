import axios from "axios";
import Link from 'next/link';
import { Cabecalho } from '../../components/Cabecalho';
import { Footer } from '../../components/Footer';
import Slider from '../../components/Slider';
import { useRouter } from 'next/router';

function Profile({ user = {}, user_slider}) {
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
    }
	return (
    <>
        <Cabecalho />
        {/* Details Card */}
        <section className="padding-y bg-white shadow-sm" style={{paddingTop: '60px'}}>
            <div className="container">
                <div key={user.id} className="row">
                    <aside className="col-lg-6"> 
                        <article className="gallery-wrap"> 
                            <div className="img-big-wrap img-thumbnail"> 
                                <a href="#!" className="d-flex justify-content-center"> 
                                    <img className="" height={450} src={user.image} alt="Imagens de produtos fake api"/>
                                </a> 
                            </div>
                            <div className="thumbs-wrap"> 
                                <a href="#!" className="item-thumb"> 
                                    <img height={70} src={user.image} alt=""/> 
                                </a> 
                                <a href="#!" className="item-thumb"> 
                                    <img height={70} src={user.image} alt=""/> 
                                </a> 
                                <a href="#!" className="item-thumb"> 
                                    <img height={70} src={user.image} alt=""/> 
                                </a> 
                                <a href="#!" className="item-thumb"> 
                                    <img height={70} src={user.image} alt=""/> 
                                </a> 
                                <a href="#!" className="item-thumb"> 
                                    <img height={70} src={user.image} alt=""/> 
                                </a> 
                            </div> 
                        </article>
                    </aside>
                    <div className="col-lg-6"> 
                        <article className="ps-lg-3"> 
                            <h4 className="title text-dark">{user.title}</h4> 
                                <div className="rating-wrap my-3"> 
                                    <ul className="rating-stars"> 
                                        <li style={{width: '80%'}} className="stars-active"> 
                                            <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/misc/stars-active.svg" alt=""/> 
                                        </li> 
                                        <li> 
                                            <img height={520} src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/misc/starts-disable.svg" alt=""/> 
                                        </li> 
                                    </ul> 
                                    <b className="label-rating text-warning"> {user.rating.rate}</b> 
                                    <i className="dot"></i> 
                                    <span className="label-rating text-muted"> 
                                    <i className="fa fa-shopping-basket"></i> {user.rating.count} orders </span> 
                                    <i className="dot"></i> 
                                    <span className="label-rating text-success">Verified</span> 
                                </div> 
                                <div className="mb-3"> 
                                    <var className="price h5">${user.price}</var> 
                                    <span className="text-muted">/per kg</span> 
                                </div> 
                                <p>{user.description}.</p> 
                                <dl className="row"> 
                                    <dt className="col-3">Category</dt> 
                                    <dd className="col-9">{user.category}</dd>
                                    <dt className="col-3">Delivery</dt> 
                                    <dd className="col-9">Brasil, USA, and Europe </dd> 
                                </dl> 
                                <hr/> 
                                <div className="row"> 
                                    <div className="col-md-4 mb-3"> 
                                        <select className="form-select" defaultValue={'DEFAULT'}> 
                                            <option value="DEFAULT">Select size</option> 
                                            <option>Small</option> 
                                            <option>Medium</option> 
                                            <option>Large</option> 
                                        </select> 
                                    </div>
                                </div> 
                                <a href="#!" className="btn" style={{background: '#802c6e', color: "#FFF", marginRight: '10px'}}> Buy now 
                                </a>
                                <Link className='btn btn-primary text-white text-decoration-none' href='/cart/[id]'as={`/cart/${user.id}`} rel="stylesheet preload">
                                    <i className="me-2 fa fa-shopping-basket"></i> Add to cart 
                                </Link>
                                <a href="#!" className="btn btn-light" style={{border: '1px solid #ccc', marginLeft: '10px'}}> 
                                    <i className="me-2 fa fa-heart" style={{color: '#802c6e'}}></i> Save 
                                </a> 
                        </article> 
                    </div> 
                </div> 
            </div>
        </section>
        {/* Fim Details Card */}

        {/* Card Description */}
        <section className="padding-y bg-light border-top" style={{paddingTop: '50px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card">
                            <header className="card-header">
                                <ul className="nav nav-tabs card-header-tabs">
                                    <li className="nav-item">
                                        <a href="#!" data-bs-target="#tab_specs" data-bs-toggle="tab" className="nav-link active">Specification</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#!" data-bs-target="#tab_warranty" data-bs-toggle="tab" className="nav-link">Warranty info</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#!" data-bs-target="#tab_shipping" data-bs-toggle="tab" className="nav-link">Shipping info</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#!" data-bs-target="#tab_seller" data-bs-toggle="tab" className="nav-link">Seller profile</a>
                                    </li>
                                </ul>
                            </header>
                            <div className="tab-content">
                                <article id="tab_specs" className="tab-pane show active card-body">
                                    <p>{user.description}</p>
                                        <ul className="list-check cols-two">
                                            <li>Some great feature name here </li>
                                            <li>Lorem ipsum dolor sit amet, consectetur </li>
                                            <li>Duis aute irure dolor in reprehenderit </li>
                                            <li>Optical heart sensor </li>
                                            <li>Easy fast and ver good </li>
                                            <li>Some great feature name here </li>
                                            <li>Modern style and design</li>
                                        </ul>
                                        <table className="table border table-hover">
                                            <tbody>
                                                <tr>
                                                    <th>Id Product:</th><td>{user.id}</td>
                                                </tr>
                                                <tr>
                                                    <th>Title:</th><td>{user.title}</td>
                                                </tr>
                                                <tr>
                                                    <th>Category:</th><td>{user.category}</td>
                                                </tr>
                                                <tr>
                                                    <th>Rating:</th><td>{user.rating.rate}</td>
                                                </tr>
                                                <tr>
                                                    <th>Quantity in stock:</th><td>{user.rating.count}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                </article>

                                <article id="tab_warranty" className="tab-pane card-body">
                                Tab content or sample information now <br/>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                </article>

                                <article id="tab_shipping" className="tab-pane card-body">
                                Another tab content  or sample information now <br/>
                                Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </article>

                                <article id="tab_seller" className="tab-pane card-body">
                                Some other tab content  or sample information now <br/>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </article>
                            </div>
                        </div>  
                    </div> 
                    <aside className="col-lg-4">
                        <div className="card card-similar">
                            <div className="card-body">
                                <h5 className="card-title">Similar items</h5>
                                
                                <article className="itemside mb-3">
                                    <a href="#!" className="aside">
                                        <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.webp" width="96" height="96" className="img-md img-thumbnail"/>
                                    </a>
                                    <div className="info">
                                        <a href="#!" className="title mb-1"> Rucksack Backpack Large <br/> Line Mounts </a>
                                        <strong className="price"> $38.90</strong>
                                    </div>
                                </article>

                                <article className="itemside mb-3">
                                    <a href="#!" className="aside">
                                        <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp" width="96" height="96" className="img-md img-thumbnail"/>
                                    </a>
                                    <div className="info">
                                        <a href="#!" className="title mb-1"> Summer New Men's Denim <br/> Jeans Shorts  </a>
                                        <strong className="price"> $29.50</strong>
                                    </div>
                                </article>

                                <article className="itemside mb-3">
                                    <a href="#" className="aside">
                                        <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp" width="96" height="96" className="img-md img-thumbnail"/>
                                    </a>
                                    <div className="info">
                                        <a href="#!" className="title mb-1"> T-shirts with multiple colors, for men and lady </a>
                                        <strong className="price"> $120.00</strong>
                                    </div>
                                </article>

                                <article className="itemside mb-3">
                                    <a href="#!" className="aside">
                                        <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp" width="96" height="96" className="img-md img-thumbnail"/>
                                    </a>
                                    <div className="info">
                                        <a href="#!" className="title mb-1"> Blazer Suit Dress Jacket for Men, Blue color </a>
                                        <strong className="price"> $339.90</strong>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
        {/* Fim Card Description */}

        <Slider 
            teste_carousel = {user_slider}
        />
      <Footer />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" />
    </>
  )
}

export async function getStaticProps(context){
    const response = await axios.get('https://fakestoreapi.com/products/' + context.params.id);
    const user = await response.data;
    const slider = await axios.get(
        'https://fakestoreapi.com/products'
    );
    const user_slider = await slider.data;
	return{
		props: {user, user_slider},
	}
}

export async function getStaticPaths(){
	const response = await axios.get(
		'https://fakestoreapi.com/products'
	);
	const users = await response.data;
	const paths = users.map((user) => {
		return {params: {id: String(user.id)}};
	});
	return{ 
		paths,
		fallback: true, 
	};
}
export default Profile;