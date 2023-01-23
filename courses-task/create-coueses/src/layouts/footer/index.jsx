import React from 'react'

const FooterLay = () => {
  return (
    <div className='containerr' >
    <div className='coursesContainer' style={{display:"flex",  justifyContent:"space-around", alignItems:"center",padding:"6%"}}>
<div >
    <div >
    <img src="	https://preview.colorlib.com/theme/courses/assets/img/logo/logo2_footer.png" alt></img>
    </div>
    <div>
        <p style={{color:"white"}}>The automated process starts as soon as</p>
        <p style={{color:"white"}}>your clothes go into the machine.</p>
    </div>
    <div >
        <button  className='iconButton'>
        <a href="#" ><i class="fab fa-twitter"  ></i></a>
        </button>
        <button  className='iconButton'>
    <a href="https://bit.ly/sai4ull"><i class="fab fa-facebook-f"></i></a>
        </button>
        <button  className="iconButton">
    <a href="#"><i class="fab fa-pinterest-p"></i></a>
        </button>
   
    </div>
</div>

<div>
    <h1 style={{color:"white"}}>Our solutions</h1>
    <a href="#" className='aHover'><p>Design & creatives</p></a>
    <a href="#" className='aHover' ><p>Telecommunication</p></a>
    <a href="#" className='aHover' ><p>Restaurant</p></a>
    <a href="#" className='aHover' ><p>Programing</p></a>
    <a href="#" className='aHover' ><p>Architecture</p></a>
</div>
<div>
    <h1 style={{color:"white"}}>Support</h1>
    <a href="#" className='aHover'><p>Design & creatives</p></a>
    <a href="#" className='aHover' ><p>Telecommunication</p></a>
    <a href="#" className='aHover' ><p>Restaurant</p></a>
    <a href="#" className='aHover' ><p>Programing</p></a>
    <a href="#" className='aHover' ><p>Architecture</p></a>
</div>
<div>
<h1 style={{color:"white"}}>Company</h1>
    <a href="#" className='aHover'><p>Design & creatives</p></a>
    <a href="#" className='aHover'><p>Telecommunication</p></a>
    <a href="#" className='aHover'><p>Restaurant</p></a>
    <a href="#" className='aHover'><p>Programing</p></a>
    <a href="#" className='aHover'><p>Architecture</p></a>
</div>
    </div>
    
    <div className='CopyrightContainer'>
        <p style={{color:"white", paddingLeft:"26%"}}>Copyright ©2023 All rights reserved | This template is made with<i class="fa-solid fa-heart" style={{color:"purple"}}></i> by Colorlib</p>
    </div>
</div>
  )
}

export default FooterLay