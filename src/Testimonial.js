import React from 'react'
import { Outlet, Link } from "react-router-dom"
import logo from './img/logo.png';
import './App.css';

import testimonial1 from './img/testimonials/testimonials-1.jpg';
import testimonial2 from './img/testimonials/testimonials-2.jpg';
import testimonial3 from './img/testimonials/testimonials-3.jpg';
import testimonial4 from './img/testimonials/testimonials-4.jpg';
export default function Testimonial() {
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

        <div className="container4" style={{marginTop:'5%'}}>
        <h2 style={{opacity:'0.7',textAlign:'center'}}>TESTIMONIALS</h2>
        <br />
        <h2 style={{textAlign:'center',opacity:'0.9'}}>Necessitatibus eius consequatur</h2>
        <div className="main01">
          <div className="item01">
            <img className='item1img' src={testimonial1} alt="error" />
            <p style={{marginTop:'8px'}}>“Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deleniti iusto molestias, dolore vel fugiat ab placeat ea?”</p>
            <br /><h2 style={{color:'#116530'}}>JAMES SMITH</h2>
          </div>
          <div className="item01">
          <img className='item1img' src={testimonial2} alt="error" />
            <p style={{marginTop:'8px'}}>“Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deleniti iusto molestias, dolore vel fugiat ab placeat ea?”</p>
            <br /><h2 style={{color:'#116530'}}>KATE SMITH</h2>
          </div>
          <div className="item01">
          <img className='item1img' src={testimonial3} alt="error" />
            <p style={{marginTop:'8px'}}>“Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deleniti iusto molestias, dolore vel fugiat ab placeat ea?”</p>
            <br /><h2 style={{color:'#116530'}}>CLAIRE ANDERSON</h2>
          </div>
          <div className="item01">
          <img className='item1img' src={testimonial4} alt="error" />
            <p style={{marginTop:'8px'}}>“Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deleniti iusto molestias, dolore vel fugiat ab placeat ea?”</p>
            <br /><h2 style={{color:'#116530'}}>DAN SMITH</h2>
          </div>
        </div>
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
