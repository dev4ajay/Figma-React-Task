import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Sidebar() {
  const {pathname} = useLocation()

  return (
    <section>
    <div className='container'>
    <div className='sidebar-box mt-4'>
      <div className='sidebar-head'>Partner With Us</div>
      <div className='sidebar-text mt-2'>Be our partner in just few steps and start Increasing your reach by gaining new customers.</div>
      <div className='sidebar-menu mt-3'>
        <ul>
          <li><Link to='/business' className='list-indexs'> <span className={pathname =="/business" ? "active":""}>1</span> Business Information</Link></li>
          <li><Link to='/owner' className='list-indexs'> <span className={pathname =="/owner" ? "active":""}>2</span> Owner & Manager Details</Link></li>
          <li><a className='list-indexs'> <span>3</span> PAN/Aadhaar Details</a></li>
          <li><a className='list-indexs'> <span>4</span> Legal Documents</a></li>
          <li><a className='list-indexs'> <span>5</span> Bank Details</a></li>
          <li><a className='list-indexs'> <span>6</span> Service Info</a></li>
          <li><a className='list-indexs'> <span>7</span> Preview Document</a></li>
          <li><a className='list-indexs'> <span>8</span> Reach Increased</a></li>
          
        </ul>
      </div> 
    </div>
    </div>
    </section>
  )
}

export default Sidebar