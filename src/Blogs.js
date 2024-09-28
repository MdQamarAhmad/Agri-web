import React from 'react'
import { Outlet, Link } from "react-router-dom"
import './App.css';
import logo from './img/logo.png';
import blog1 from './img/blog/blog-1.jpg';
import blog2 from './img/blog/blog-2.jpg';
import blog3 from './img/blog/blog-3.jpg';
import blog4 from './img/blog/blog-4.jpg';
import blog5 from './img/blog/blog-5.jpg';
import blog6 from './img/blog/blog-6.jpg';
export default function Blogs() {
  return (
    <div>
       <nav>
          <div className="logo">
            < img src={logo} alt="Logo" />
          </div>
          <ul>
            <li><Link className='li' to="/">Home </Link></li>
            <li><Link className='li' to="about">About Us</Link></li>
            <li><Link className='li' to="service">Our Services</Link></li>
            <li><Link className='li' to="testinomial">Testimonials</Link></li>
            <li><Link className='li' to="blogs">Blogs</Link></li>
            <li><Link className='li' to="#" style={{display:'flex'}}>Dropdown<span style={{display:'flex',alignItems:'center',marginLeft:'2px',marginTop:'2px'}}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg></span></Link></li>
            <li><Link className='li' to="contact">Contact</Link></li>
          </ul>
        </nav>

        <div className='service'>
         <h1 style={{fontSize:'40px',fontWeight:'bolder',marginBottom:'8px'}}>Testimonials</h1>
        <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias</p>
        <div style={{display:'flex'}}>
            <h4 style={{fontWeight:'bolder',cursor:'pointer'}}><Link to="/" style={{color:'greenyellow'}}>Home</Link> </h4>
            <p>/</p>
            <p>Testimonials</p>
        </div>
        </div>

        <div className="container5" style={{marginTop:'4%'}} >
         <h2 style={{opacity:'0.7',textAlign:'center'}}>Recent Posts</h2>
        <br />
        <h2 style={{textAlign:'center',opacity:'0.9'}}>Necessitatibus eius consequatur</h2>
       <div className="main02">
       <div className="item02">
        <img src={blog1} alt="error" />
        <div style={{backgroundColor:'white',width:'150px',padding:'7px',position:'relative',marginLeft:'auto',top:'-8.6%',textAlign:'center'}}>SEPTEMBER 12</div>
          <div style={{paddingLeft:'9px',marginRight:'9px',marginTop:'-9px'}}>
          <h2 style={{width:'400px'}}>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
        <div style={{display:'flex' ,marginTop:'5%',justifyContent:'space-between',width:'70%'}}>
            <div style={{display:'flex',alignItems:'center',width:'48%'}}>
              <i className="fa-solid fa-image-portrait"></i> 
              <h4 style={{marginLeft:'5px'}}>Lisa Hunter</h4>
            </div>
            <div style={{display:'flex',alignItems:'center',width:'48%'}}>
            <i className="fa-regular fa-folder"></i>
              <h4 style={{marginLeft:'5px'}}>Economics</h4>
            </div>
          </div><br />
          <div>
            <div style={{display:'flex',width:'29%',justifyContent:'space-between',alignItems:'center',marginTop:'20px'}}><h4>Read More</h4><i className="fa-solid fa-arrow-right"></i></div>
          </div>
        </div>
        </div>
        <div className="item02">
        <img src={blog2} alt="error" />
        <div style={{backgroundColor:'white',width:'150px',padding:'7px',position:'relative',marginLeft:'auto',top:'-8.6%',textAlign:'center'}}>SEPTEMBER 12</div>
          <div style={{paddingLeft:'9px',marginRight:'9px',marginTop:'-9px'}}>
          <h2 style={{width:'400px'}}>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
        <div style={{display:'flex' ,marginTop:'5%',justifyContent:'space-between',width:'70%'}}>
            <div style={{display:'flex',alignItems:'center',width:'48%'}}>
              <i className="fa-solid fa-image-portrait"></i> 
              <h4 style={{marginLeft:'5px'}}>Lisa Hunter</h4>
            </div>
            <div style={{display:'flex',alignItems:'center',width:'48%'}}>
            <i className="fa-regular fa-folder"></i>
              <h4 style={{marginLeft:'5px'}}>Economics</h4>
            </div>
          </div><br />
          <div>
            <div style={{display:'flex',width:'29%',justifyContent:'space-between',alignItems:'center',marginTop:'20px'}}><h4>Read More</h4><i className="fa-solid fa-arrow-right"></i></div>
          </div>
        </div>
        </div>
        <div className="item02">
        <img src={blog3} alt="error" />
        <div style={{backgroundColor:'white',width:'150px',padding:'7px',position:'relative',marginLeft:'auto',top:'-8.6%',textAlign:'center'}}>SEPTEMBER 12</div>
          <div style={{paddingLeft:'9px',marginRight:'9px',marginTop:'-9px'}}>
          <h2 style={{width:'400px'}}>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
        <div style={{display:'flex' ,marginTop:'5%',justifyContent:'space-between',width:'70%'}}>
            <div style={{display:'flex',alignItems:'center',width:'48%'}}>
              <i className="fa-solid fa-image-portrait"></i> 
              <h4 style={{marginLeft:'5px'}}>Lisa Hunter</h4>
            </div>
            <div style={{display:'flex',alignItems:'center',width:'48%'}}>
            <i className="fa-regular fa-folder"></i>
              <h4 style={{marginLeft:'5px'}}>Economics</h4>
            </div>
          </div><br />
          <div>
            <div style={{display:'flex',width:'29%',justifyContent:'space-between',alignItems:'center',marginTop:'20px'}}><h4>Read More</h4><i className="fa-solid fa-arrow-right"></i></div>
          </div>
        </div>
        </div>

        <div className="item02">
        <img src={blog4} alt="error" />
        <div style={{backgroundColor:'white',width:'150px',padding:'7px',position:'relative',marginLeft:'auto',top:'-8.2%',textAlign:'center'}}>SEPTEMBER 12</div>
          <div style={{paddingLeft:'9px',marginRight:'9px',marginTop:'-9px'}}>
          <h2 style={{width:'400px'}}>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
        <div style={{display:'flex' ,marginTop:'5%',justifyContent:'space-between',width:'70%'}}>
            <div style={{display:'flex',alignItems:'center',width:'48%'}}>
              <i className="fa-solid fa-image-portrait"></i> 
              <h4 style={{marginLeft:'5px'}}>Lisa Hunter</h4>
            </div>
            <div style={{display:'flex',alignItems:'center',width:'48%'}}>
            <i className="fa-regular fa-folder"></i>
              <h4 style={{marginLeft:'5px'}}>Economics</h4>
            </div>
          </div><br />
          <div>
            <div style={{display:'flex',width:'29%',justifyContent:'space-between',alignItems:'center',marginTop:'20px'}}><h4>Read More</h4><i className="fa-solid fa-arrow-right"></i></div>
          </div>
        </div>
        </div>

        <div className="item02">
        <img src={blog5} alt="error" />
        <div style={{backgroundColor:'white',width:'150px',padding:'7px',position:'relative',marginLeft:'auto',top:'-8.2%',textAlign:'center'}}>SEPTEMBER 12</div>
          <div style={{paddingLeft:'9px',marginRight:'9px',marginTop:'-9px'}}>
          <h2 style={{width:'400px'}}>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
        <div style={{display:'flex' ,marginTop:'5%',justifyContent:'space-between',width:'70%'}}>
            <div style={{display:'flex',alignItems:'center',width:'48%'}}>
              <i className="fa-solid fa-image-portrait"></i> 
              <h4 style={{marginLeft:'5px'}}>Lisa Hunter</h4>
            </div>
            <div style={{display:'flex',alignItems:'center',width:'48%'}}>
            <i className="fa-regular fa-folder"></i>
              <h4 style={{marginLeft:'5px'}}>Economics</h4>
            </div>
          </div><br />
          <div>
            <div style={{display:'flex',width:'29%',justifyContent:'space-between',alignItems:'center',marginTop:'20px'}}><h4>Read More</h4><i className="fa-solid fa-arrow-right"></i></div>
          </div>
        </div>
        </div>

        <div className="item02">
        <img src={blog6} alt="error" />
        <div style={{backgroundColor:'white',width:'150px',padding:'7px',position:'relative',marginLeft:'auto',top:'-8.2%',textAlign:'center'}}>SEPTEMBER 12</div>
          <div style={{paddingLeft:'9px',marginRight:'9px',marginTop:'-9px'}}>
          <h2 style={{width:'400px'}}>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
        <div style={{display:'flex' ,marginTop:'5%',justifyContent:'space-between',width:'70%'}}>
            <div style={{display:'flex',alignItems:'center',width:'48%'}}>
              <i className="fa-solid fa-image-portrait"></i> 
              <h4 style={{marginLeft:'5px'}}>Lisa Hunter</h4>
            </div>
            <div style={{display:'flex',alignItems:'center',width:'48%'}}>
            <i className="fa-regular fa-folder"></i>
              <h4 style={{marginLeft:'5px'}}>Economics</h4>
            </div>
          </div><br />
          <div>
            <div style={{display:'flex',width:'29%',justifyContent:'space-between',alignItems:'center',marginTop:'20px'}}><h4>Read More</h4><i className="fa-solid fa-arrow-right"></i></div>
          </div>
        </div>
        </div>
       </div>
       </div>

       <div style={{marginTop:'5%', display:'grid',gridTemplateColumns:'repeat(8,1fr)',gridTemplateRows:'46px',gap:'2%',marginLeft:'30%',marginRight:'30%'}}>
        <div className='num1' style={{display:'grid',placeItems:'center'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
</svg></div>
        <div className='num2' style={{display:'grid',placeItems:'center'}}>1</div>
        <div className='num3' style={{color:'white', backgroundColor:'#116530',display:'grid',placeItems:'center'}}>2</div>
        <div className='num4' style={{display:'grid',placeItems:'center'}}>3</div>
        <div className='num5' style={{display:'grid',placeItems:'center'}}>4</div>
        <div className='num6' style={{display:'grid',placeItems:'center'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
</svg></div>
        <div className='num7' style={{display:'grid',placeItems:'center'}}>10</div>
        <div className='num8' style={{display:'grid',placeItems:'center'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
</svg></div>
       </div>

       <div className='oneone' style={{padding:'7%', display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(500px,1fr))',rowGap:"20px"}}>
        <div className='subCom'>
          <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
          <p style={{fontSize:'20px',marginTop:'2%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, <br /> reprehenderit!</p>
        </div>
        <div style={{width:'80%',display:'flex',padding:'20px'}}>
          <div style={{width:'90%',height:'60%',border:' 2px solid #116530'}}><input type='text' name='subscribe' style={{border:'none',width:'100%',height:'100%',padding:'8px'}}/></div>
          <div style={{backgroundColor:'#116530',color:'white',width:'35%',height:'60%',display:'grid',placeItems:'center'}}>Subscribe</div>
        </div>
       </div>

       <div style={{border:'1px solid #444441',backgroundColor:'#333333',marginBottom:'-40px' , color:'white'}}>
       <div className='main03' style={{marginTop:'3%',marginBottom:'3%', display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',rowGap:'20px',lineHeight:'20px',marginLeft:'8%',marginRight:'8%',paddingTop:'3%',paddingBottom:'3%'}} >
        <div style={{marginLeft:'-8px'}}>
          <h1 style={{marginBlock:'8px'}}>Agriculture</h1> <br/> 
          <h5 style={{marginBottom:'8px'}}>A108 Adam Street <br />
          New York, NY 535022</h5> 
          <h5>Phone: +1 5589 55488 55 <br />
           Email: info@example.com</h5>
        </div>
          <div>
            <h3>Useful Links</h3>
            <div style={{lineHeight:'25px'}}>
              <h5 className='pointer'>Home</h5>
              <h5 className='pointer'>About us</h5>
              <h5 className='pointer'>Services</h5>
              <h5 className='pointer'>Terms of service</h5>
              <h5 className='pointer'>Privacy policy</h5>
            </div>
          </div>
          <div>
            <h3>Our Services</h3>
            <div style={{lineHeight:'25px'}}  >
            <h5 className='pointer'>Web Design</h5>
            <h5 className='pointer'>Web Development</h5>
            <h5 className='pointer'>Product Management</h5>
            <h5 className='pointer'>Marketing</h5>
            <h5 className='pointer'>Graphic Design</h5>
            </div>
          </div>
          <div>
            <h3>Hic solutasetp</h3>
            <div style={{lineHeight:'25px'}} >
              <h5 className='pointer'>Molestiae accusamus iure</h5>
              <h5 className='pointer'>Excepturi dignissimos</h5>
              <h5 className='pointer'>Suscipit distinctio</h5>
              <h5 className='pointer'>Dilecta</h5>
              <h5 className='pointer'>Sit quas consectetur</h5>
            </div>
          </div>
          <div>
            <h3>Nobis illum</h3>
            <div style={{lineHeight:'25px'}}>
              <h5 className='pointer'>Ipsum</h5>
              <h5 className='pointer'>Laudantium dolorum</h5>
              <h5 className='pointer'>Dinera</h5>
              <h5 className='pointer'>Trodelas</h5>
              <h5 className='pointer'>Flexo</h5>
            </div>
          </div>
       </div>
       </div>
        <Outlet/>
    </div>
  )
}
