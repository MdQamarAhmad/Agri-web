import React from 'react'
import './App.css'
import { Outlet, Link } from "react-router-dom"
import logo from './img/logo.png';
import imgsq1 from './img/img_sq_1.jpg';
import team1 from './img/team/team-1.jpg';
import team2 from './img/team/team-2.jpg';
import team3 from './img/team/team-3.jpg';
import team4 from './img/team/team-4.jpg';
export default function About() {
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
            <li><Link className='li' to="#">Testimonials</Link></li>
            <li><Link className='li' to="blogs">Blogs</Link></li>
            <li><Link className='li' to="#" style={{display:'flex'}}>Dropdown<span style={{display:'flex',alignItems:'center',marginLeft:'2px',marginTop:'2px'}}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg></span></Link></li>
            <li><Link className='li' to="contact">Contact</Link></li>
          </ul>
        <div className='risp1' ><i className="fa-solid fa-bars"></i></div>
        </nav>
        <div className='about'>
         <h1 style={{fontSize:'40px',fontWeight:'bolder',marginBottom:'8px'}}>About</h1>
        <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias</p>
        <div style={{display:'flex'}}>
            <h4 style={{fontWeight:'bolder',cursor:'pointer'}}><Link to="/" style={{color:'greenyellow'}}>Home</Link> </h4>
            <p>/</p>
            <p>About</p>
        </div>
        </div>
        <div className="container2"  >
        <div className="section11">
          <h2 style={{ color: '#116530' }}>Plants Make Life Better</h2><br />
          <p style={{ lineHeight: '25px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim necessitatibus placeat, atque qui voluptatem velit explicabo vitae repellendus architecto provident nisi ullam minus asperiores commodi! Tenetur, repellat aliquam nihil illo.</p>
          <br /><br />
          <div style={{ display: 'flex' }}><i className="fa-solid fa-check" style={{ color: "#26820d" }}></i>
            <p style={{ marginBottom: '8px', marginLeft: '8px' }}>Lorem ipsum dolor sit amet</p>
          </div>
          <div style={{ display: 'flex' }}>
            <i className="fa-solid fa-check" style={{ color: "#26820d" }}></i>
            <p style={{ marginBottom: '8px', marginLeft: '8px' }}>Velit explicabo vitae repellendu</p>
          </div>
          <div style={{ display: 'flex' }}>
            <i className="fa-solid fa-check" style={{ color: "#26820d" }}></i>
            <p style={{ marginBottom: '8px', marginLeft: '8px' }}>Repellat aliquam nihil illo</p>
          </div>
          <br />
          <button style={{ width: '130px', height: '50px', border: 'none', borderRadius: '10px', backgroundColor: '#116530' }}> GET IN TOUCH</button>
        </div>
        <div className="section22">
          <img src={imgsq1} alt="error" />
        </div>
      </div>
      <br /><br /><br />
      <p style={{textAlign:'center',fontSize:'30px',color:'#116530',marginBottom:'1%'}}>Team</p>
      <p style={{textAlign:'center',fontSize:'30px',opacity:"0.8"}}>Necessitatibus eius consequatur</p>
      <br /><br /><br />
      <div className='team' >
       <h1 style={{backgroundImage:`url(${team1})`, width:'100%',height:'40vh',backgroundSize:'cover',backgroundPosition:'center'}}>
        <p style={{fontWeight:'250',fontSize:'30px',textAlign:'center',position:'relative',top:'110%'}}>Joshua Stefan</p>
        <p style={{fontWeight:'200',fontSize:'20px',textAlign:'center',color:'#116530',position:'relative',top:'114%'}}>Farmer</p>
       </h1>
       <h1 style={{backgroundImage:`url(${team2})`, width:'100%',height:'40vh',backgroundSize:'cover',backgroundPosition:'center'}}>
        <p style={{fontWeight:'250',fontSize:'30px',textAlign:'center',position:'relative',top:'110%'}}>Sheena Anderson</p>
        <p style={{fontWeight:'200',fontSize:'20px',textAlign:'center',color:'#116530',position:'relative',top:'114%'}}>Marketing</p>
       </h1>
       <h1 style={{backgroundImage:`url(${team3})`, width:'100%',height:'40vh',backgroundSize:'cover',backgroundPosition:'center'}}>
        <p style={{fontWeight:'250',fontSize:'30px',textAlign:'center',position:'relative',top:'110%'}}>Evan Smith</p>
        <p style={{fontWeight:'200',fontSize:'20px',textAlign:'center',color:'#116530',position:'relative',top:'114%'}}>Content</p>
       </h1>
       <h1 style={{backgroundImage:`url(${team4})`, width:'100%',height:'40vh',backgroundSize:'cover',backgroundPosition:'center'}}>
        <p style={{fontWeight:'250',fontSize:'30px',textAlign:'center',position:'relative',top:'110%'}}>Kaylie Jones</p>
        <p style={{fontWeight:'200',fontSize:'20px',textAlign:'center',color:'#116530',position:'relative',top:'114%'}}>Accountant</p>
       </h1>
      </div>
      <br /><br /><br /><br />

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ color: '#116530' }}>Services</h2>
        <br />
        <h1>Providing Fresh Produce Every Single Day</h1>
      </div>
      <br /><br /><br />

      <div className='itemHead'>
        <div className="items">
          <svg className='logoF' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#116530" d="M505 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L383 95c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l88-88zM305.5 27.3c-6.2-6.2-16.4-6.2-22.6 0L271.5 38.6c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4-30.5 30.5c-3.4-27.3-15.5-53.8-36.5-74.8l-11.3-11.3c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4-30.5 30.5c-3.4-27.3-15.5-53.8-36.5-74.8L101.8 231c-6.2-6.2-16.4-6.2-22.6 0L67.9 242.3c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4L9.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l68.9-68.9 12.2 12.2c37.5 37.5 98.3 37.5 135.8 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-21.8-21.8-49.6-34.1-78.1-36.9l31.9-31.9 12.2 12.2c37.5 37.5 98.3 37.5 135.8 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-21.8-21.8-49.6-34.1-78.1-36.9l31.9-31.9 12.2 12.2c37.5 37.5 98.3 37.5 135.8 0L486.5 231c6.2-6.2 6.2-16.4 0-22.6L475.2 197c-5.2-5.2-10.6-9.8-16.4-13.9L505 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-59.4 59.4c-20.6-4.4-42-3.7-62.3 2.1c6.1-21.3 6.6-43.8 1.4-65.3L409 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L329.1 52.9c-3.7-5-7.8-9.8-12.4-14.3L305.5 27.3z" /></svg>
          <br /><h2>Planting</h2>
          <p>Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie</p>
        </div>
        <div className="items">
          <svg className='logoF' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#116530" d="M0 48C0 21.5 21.5 0 48 0L336 0c26.5 0 48 21.5 48 48l0 416c0 26.5-21.5 48-48 48l-96 0 0-80c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 80-96 0c-26.5 0-48-21.5-48-48L0 48zM80 224c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm80 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm112-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 112l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16L80 96c-8.8 0-16 7.2-16 16zM176 96c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm80 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm384 80l0 16c0 44.2-35.8 80-80 80l-16 0 0-16c0-44.2 35.8-80 80-80l16 0zm0 128c0 44.2-35.8 80-80 80l-16 0 0-16c0-44.2 35.8-80 80-80l16 0 0 16zm0 112c0 44.2-35.8 80-80 80l-16 0 0-16c0-44.2 35.8-80 80-80l16 0 0 16zM512 496l0 16-16 0c-44.2 0-80-35.8-80-80l0-16 16 0c44.2 0 80 35.8 80 80zm0-96l-16 0c-44.2 0-80-35.8-80-80l0-16 16 0c44.2 0 80 35.8 80 80l0 16zm0-128l0 16-16 0c-44.2 0-80-35.8-80-80l0-16 16 0c44.2 0 80 35.8 80 80zM528 32c13.3 0 24 10.7 24 24l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-104c0-13.3 10.7-24 24-24zm96 64l0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32c0-13.3 10.7-24 24-24s24 10.7 24 24zM456 72c13.3 0 24 10.7 24 24l0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32c0-13.3 10.7-24 24-24z" /></svg>
          <br /><h2>Mulching</h2>
          <p>Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie</p></div>
        <div className="items">
          <svg className='logoF' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#116530" d="M96 224l0 32 0 160c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-88.2c9.9 6.6 20.6 12 32 16.1l0 24.2c0 8.8 7.2 16 16 16s16-7.2 16-16l0-16.9c5.3 .6 10.6 .9 16 .9s10.7-.3 16-.9l0 16.9c0 8.8 7.2 16 16 16s16-7.2 16-16l0-24.2c11.4-4 22.1-9.4 32-16.1l0 88.2c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-160 32 32 0 49.5c0 9.5 2.8 18.7 8.1 26.6L530 427c8.8 13.1 23.5 21 39.3 21c22.5 0 41.9-15.9 46.3-38l20.3-101.6c2.6-13-.3-26.5-8-37.3l-3.9-5.5 0-81.6c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 14.4-52.9-74.1C496 86.5 452.4 64 405.9 64L272 64l-16 0-64 0-48 0C77.7 64 24 117.7 24 184l0 54C9.4 249.8 0 267.8 0 288l0 17.6c0 8 6.4 14.4 14.4 14.4C46.2 320 72 294.2 72 262.4l0-6.4 0-32 0-40c0-24.3 12.1-45.8 30.5-58.9C98.3 135.9 96 147.7 96 160l0 64zM560 336a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM166.6 166.6c-4.2-4.2-6.6-10-6.6-16c0-12.5 10.1-22.6 22.6-22.6l178.7 0c12.5 0 22.6 10.1 22.6 22.6c0 6-2.4 11.8-6.6 16l-23.4 23.4C332.2 211.8 302.7 224 272 224s-60.2-12.2-81.9-33.9l-23.4-23.4z" /></svg>
          <br /><h2>Plowing</h2>
          <p>Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie</p></div>
        <div className="items">
          <svg className='logoF' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#116530" d="M505 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L383 95c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l88-88zM305.5 27.3c-6.2-6.2-16.4-6.2-22.6 0L271.5 38.6c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4-30.5 30.5c-3.4-27.3-15.5-53.8-36.5-74.8l-11.3-11.3c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4-30.5 30.5c-3.4-27.3-15.5-53.8-36.5-74.8L101.8 231c-6.2-6.2-16.4-6.2-22.6 0L67.9 242.3c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4L9.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l68.9-68.9 12.2 12.2c37.5 37.5 98.3 37.5 135.8 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-21.8-21.8-49.6-34.1-78.1-36.9l31.9-31.9 12.2 12.2c37.5 37.5 98.3 37.5 135.8 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-21.8-21.8-49.6-34.1-78.1-36.9l31.9-31.9 12.2 12.2c37.5 37.5 98.3 37.5 135.8 0L486.5 231c6.2-6.2 6.2-16.4 0-22.6L475.2 197c-5.2-5.2-10.6-9.8-16.4-13.9L505 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-59.4 59.4c-20.6-4.4-42-3.7-62.3 2.1c6.1-21.3 6.6-43.8 1.4-65.3L409 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L329.1 52.9c-3.7-5-7.8-9.8-12.4-14.3L305.5 27.3z" /></svg>

          <br /> <h2>Mowing</h2>
          <p>Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie</p></div>
        <div className="items">
          <svg className='logoF' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#116530" d="M0 48C0 21.5 21.5 0 48 0L336 0c26.5 0 48 21.5 48 48l0 416c0 26.5-21.5 48-48 48l-96 0 0-80c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 80-96 0c-26.5 0-48-21.5-48-48L0 48zM80 224c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm80 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm112-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 112l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16L80 96c-8.8 0-16 7.2-16 16zM176 96c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm80 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm384 80l0 16c0 44.2-35.8 80-80 80l-16 0 0-16c0-44.2 35.8-80 80-80l16 0zm0 128c0 44.2-35.8 80-80 80l-16 0 0-16c0-44.2 35.8-80 80-80l16 0 0 16zm0 112c0 44.2-35.8 80-80 80l-16 0 0-16c0-44.2 35.8-80 80-80l16 0 0 16zM512 496l0 16-16 0c-44.2 0-80-35.8-80-80l0-16 16 0c44.2 0 80 35.8 80 80zm0-96l-16 0c-44.2 0-80-35.8-80-80l0-16 16 0c44.2 0 80 35.8 80 80l0 16zm0-128l0 16-16 0c-44.2 0-80-35.8-80-80l0-16 16 0c44.2 0 80 35.8 80 80zM528 32c13.3 0 24 10.7 24 24l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-104c0-13.3 10.7-24 24-24zm96 64l0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32c0-13.3 10.7-24 24-24s24 10.7 24 24zM456 72c13.3 0 24 10.7 24 24l0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32c0-13.3 10.7-24 24-24z" /></svg>

          <br /> <h2>Seeding</h2>
          <p>Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie</p></div>
        <div className="items">
          <svg className='logoF' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#116530" d="M96 64c0-35.3 28.7-64 64-64L266.3 0c26.2 0 49.7 15.9 59.4 40.2L373.7 160 480 160l0-33.8c0-24.8 5.8-49.3 16.9-71.6l2.5-5c7.9-15.8 27.1-22.2 42.9-14.3s22.2 27.1 14.3 42.9l-2.5 5c-6.7 13.3-10.1 28-10.1 42.9l0 33.8 56 0c22.1 0 40 17.9 40 40l0 45.4c0 16.5-8.5 31.9-22.6 40.7l-43.3 27.1c-14.2-5.9-29.8-9.2-46.1-9.2c-39.3 0-74.1 18.9-96 48l-80 0c0 17.7-14.3 32-32 32l-8.2 0c-1.7 4.8-3.7 9.5-5.8 14.1l5.8 5.8c12.5 12.5 12.5 32.8 0 45.3l-22.6 22.6c-12.5 12.5-32.8 12.5-45.3 0l-5.8-5.8c-4.6 2.2-9.3 4.1-14.1 5.8l0 8.2c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-8.2c-4.8-1.7-9.5-3.7-14.1-5.8l-5.8 5.8c-12.5 12.5-32.8 12.5-45.3 0L40.2 449.1c-12.5-12.5-12.5-32.8 0-45.3l5.8-5.8c-2.2-4.6-4.1-9.3-5.8-14.1L32 384c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l8.2 0c1.7-4.8 3.7-9.5 5.8-14.1l-5.8-5.8c-12.5-12.5-12.5-32.8 0-45.3l22.6-22.6c9-9 21.9-11.5 33.1-7.6l0-.6 0-32 0-96zm170.3 0L160 64l0 96 32 0 112.7 0L266.3 64zM176 256a80 80 0 1 0 0 160 80 80 0 1 0 0-160zM528 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0 64c-48.6 0-88-39.4-88-88c0-29.8 14.8-56.1 37.4-72c14.3-10.1 31.8-16 50.6-16c2.7 0 5.3 .1 7.9 .3c44.9 4 80.1 41.7 80.1 87.7c0 48.6-39.4 88-88 88z" /></svg>

          <br /> <h2>Fresh Vegetables</h2>
          <p>Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie</p></div>
        <div className="items">
          <svg className='logoF' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#116530" d="M176 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16c-44.2 0-80-35.8-80-80c0-8.8 7.2-16 16-16zM56 16l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L56 64C42.7 64 32 53.3 32 40s10.7-24 24-24zM24 88l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 136c-13.3 0-24-10.7-24-24S10.7 88 24 88zm8 96c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zM272 16c0-8.8 7.2-16 16-16c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16c-44.2 0-80-35.8-80-80zM400 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16c-44.2 0-80-35.8-80-80c0-8.8 7.2-16 16-16zm80 144c0 44.2-35.8 80-80 80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16zM352 128c8.8 0 16 7.2 16 16c0 44.2-35.8 80-80 80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-96 16c0 44.2-35.8 80-80 80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16zM0 304c0-26.5 21.5-48 48-48l416 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 304zM48 416l0 48 48 0c0-26.5-21.5-48-48-48zM96 304l-48 0 0 48c26.5 0 48-21.5 48-48zM464 416c-26.5 0-48 21.5-48 48l48 0 0-48zM416 304c0 26.5 21.5 48 48 48l0-48-48 0zm-96 80a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" /></svg>
          <br /> <h2>Watering</h2>
          <p>Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie</p></div>
        <div className="items">
          <svg className='logoF' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#116530" d="M96 64c0-35.3 28.7-64 64-64L266.3 0c26.2 0 49.7 15.9 59.4 40.2L373.7 160 480 160l0-33.8c0-24.8 5.8-49.3 16.9-71.6l2.5-5c7.9-15.8 27.1-22.2 42.9-14.3s22.2 27.1 14.3 42.9l-2.5 5c-6.7 13.3-10.1 28-10.1 42.9l0 33.8 56 0c22.1 0 40 17.9 40 40l0 45.4c0 16.5-8.5 31.9-22.6 40.7l-43.3 27.1c-14.2-5.9-29.8-9.2-46.1-9.2c-39.3 0-74.1 18.9-96 48l-80 0c0 17.7-14.3 32-32 32l-8.2 0c-1.7 4.8-3.7 9.5-5.8 14.1l5.8 5.8c12.5 12.5 12.5 32.8 0 45.3l-22.6 22.6c-12.5 12.5-32.8 12.5-45.3 0l-5.8-5.8c-4.6 2.2-9.3 4.1-14.1 5.8l0 8.2c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-8.2c-4.8-1.7-9.5-3.7-14.1-5.8l-5.8 5.8c-12.5 12.5-32.8 12.5-45.3 0L40.2 449.1c-12.5-12.5-12.5-32.8 0-45.3l5.8-5.8c-2.2-4.6-4.1-9.3-5.8-14.1L32 384c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l8.2 0c1.7-4.8 3.7-9.5 5.8-14.1l-5.8-5.8c-12.5-12.5-12.5-32.8 0-45.3l22.6-22.6c9-9 21.9-11.5 33.1-7.6l0-.6 0-32 0-96zm170.3 0L160 64l0 96 32 0 112.7 0L266.3 64zM176 256a80 80 0 1 0 0 160 80 80 0 1 0 0-160zM528 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0 64c-48.6 0-88-39.4-88-88c0-29.8 14.8-56.1 37.4-72c14.3-10.1 31.8-16 50.6-16c2.7 0 5.3 .1 7.9 .3c44.9 4 80.1 41.7 80.1 87.7c0 48.6-39.4 88-88 88z" /></svg>
          <br /><h2>Vegetable selling</h2>
          <p>Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie</p></div>
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
