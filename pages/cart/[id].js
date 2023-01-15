import axios from "axios";
import { Cabecalho } from '../../components/Cabecalho';
import { Footer } from '../../components/Footer';
import { ProductRecommended } from '../../components/Product-Recommended';
import { useRouter } from 'next/router';

function Profile({ user = {}}) {
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
    }
	return (
    <>
    <Cabecalho />
    <section className="padding-y bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="card">
            <div className="content-body">
              <h4 className="card-title mb-4">Your shopping cart</h4>
              <article className="row gy-3 mb-4">
                <div className="col-lg-5">
                  <figure className="itemside me-lg-5">
                    <div className="aside"><img src={user.image} className="img-sm img-thumbnail"/></div>
                    <figcaption className="info">
                      <a href="#!" className="title">{user.title}</a>
                      <p className="text-muted"> {user.category} </p>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-auto">
                  <select style={{width: '100px'}} className="form-select" defaultValue={'DEFAULT'}>
                    <option value="DEFAULT">1</option>
                    <option>2</option>  
                    <option>3</option>  
                    <option>4</option>  
                  </select> 
                </div>
                <div className="col-lg-2 col-sm-4 col-6">
                  <div className="price-wrap lh-sm"> 
                    <var className="price h6">${user.price}</var>  <br/>
                    <small className="text-muted"> $460.00 / per item </small> 
                  </div>
                </div>
                <div className="col-lg col-sm-4">
                  <div className="float-lg-end">
                    <a href="#!" className="btn btn-light" style={{marginRight: '10px'}}> <i className="fa fa-heart"></i></a> 
                    <a href="#!" className="btn btn-light text-danger"> Remove</a>
                  </div>
                </div>
              </article>

              <article className="row gy-3 mb-4">
                <div className="col-lg-5">
                  <figure className="itemside me-lg-5">
                    <div className="aside"><img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/7.webp" className="img-sm img-thumbnail"/></div>
                    <figcaption className="info">
                      <a href="#!" className="title">Gaming Headset with Mic</a>
                      <p className="text-muted"> Blue, Medium </p>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-auto">
                  <select style={{width: '100px'}} className="form-select" defaultValue={'DEFAULT'}>
                    <option>1</option>
                    <option value="DEFAULT">2</option>  
                    <option>3</option>  
                    <option>4</option>  
                  </select> 
                </div>
                <div className="col-lg-2 col-sm-4 col-6">
                  <div className="price-wrap lh-sm"> 
                    <var className="price h6">$18.95</var>  <br/>
                    <small className="text-muted"> $12.20 / per item </small> 
                  </div>
                </div>
                <div className="col-lg col-sm-4">
                  <div className="float-lg-end">
                    <a href="#!" className="btn btn-light" style={{marginRight: '10px'}}> <i className="fa fa-heart"></i></a> 
                    <a href="#!" className="btn btn-light text-danger"> Remove</a>
                  </div>
                </div>
              </article>

              <article className="row gy-3 mb-4">
                <div className="col-lg-5">
                  <figure className="itemside me-lg-5">
                    <div className="aside"><img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp" className="img-sm img-thumbnail"/></div>
                    <figcaption className="info">
                      <a href="#!" className="title"> Men's Denim Jeans Shorts  </a>
                      <p className="text-muted"> XL size, Jeans, Blue </p>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-auto">
                  <select style={{width: '100px'}} className="form-select" defaultValue={'DEFAULT'}>
                    <option>1</option>
                    <option>2</option>  
                    <option value="DEFAULT">3</option>  
                    <option>4</option>  
                  </select> 
                </div>
                <div className="col-lg-2 col-sm-4 col-6">
                  <div className="price-wrap lh-sm"> 
                    <var className="price h6">$80.50</var>  <br/>
                    <small className="text-muted"> $46.00 / per item </small> 
                  </div>
                </div>
                <div className="col-lg col-sm-4">
                  <div className="float-lg-end">
                    <a href="#!" className="btn btn-light" style={{marginRight: '10px'}}> <i className="fa fa-heart"></i></a> 
                    <a href="#!" className="btn btn-light text-danger"> Remove</a>
                  </div>
                </div>
              </article>
            </div>

            <div className="content-body border-top">
              <p><i className="me-2 text-muted fa-lg fa fa-truck"></i> Free Delivery within 1-2 weeks</p>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
            </div>
            </div>
          </div>
          <aside className="col-lg-3">
            <div className="card mb-3">
            <div className="card-body">
            <form>
              <div className="form-group">
                <label className="form-label">Have coupon?</label>
                <div className="input-group">
                  <input type="text" className="form-control" name="" placeholder="Coupon code"/>
                  <button className="btn btn-light">Apply</button>
                </div>
              </div>
            </form>
            </div>
            </div>

            <div className="card">
            <div className="card-body">
              <dl className="dlist-align">
                <dt>Total price:</dt>
                <dd className="text-end"> $329.00</dd>
              </dl>
              <dl className="dlist-align">
                <dt>Discount:</dt>
                <dd className="text-end text-success"> - $60.00 </dd>
              </dl>
              <dl className="dlist-align">
                <dt>TAX:</dt>
                <dd className="text-end"> $14.00 </dd>
              </dl>
              <hr/>
              <dl className="dlist-align">
                <dt>Total:</dt>
                <dd className="text-end text-dark h5"> $357.90 </dd>
              </dl>
              
              <div className="d-grid gap-2 my-3">
                <a href="#!" className="btn btn-success w-100"> Make Purchase </a>
                <a href="/" className="btn btn-light w-100"> Back to shop </a>
              </div>
            </div>
            </div>
          </aside>
        </div>
      </div>
      </section>
    <ProductRecommended />  
    <Footer />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" />
    </>
  )
}

export async function getStaticProps(context){
    const response = await axios.get('https://fakestoreapi.com/products/' + context.params.id);
    const user = await response.data;
	return{
		props: {user},
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