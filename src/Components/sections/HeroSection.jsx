import React from 'react'
import Logo from "../../assets/icons/image_15-removebg-preview.png"
function Header() {
  return (
    <section className='header-img'>
            <div  className='sp-logo px-4 py-4'>
                <img src={Logo} alt='logo' />
            </div>
    <div className='container'>
            
          
            <div className='  sp-texts '>
                <h1>Partner With Us</h1>
             
            </div>
            <div className=' sp-text mb-2'>
            <p>Be our partner in just few steps and start Increasing your reach by <br/>gaining new customers.</p>
            </div>
        <div className='header-content' >
            <div className='sp-text-emty'>
            </div>

        </div>    
    </div>
    </section>
  )
}

export default Header