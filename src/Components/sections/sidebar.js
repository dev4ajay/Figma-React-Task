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
          <li><Link to='/alldocument' className='list-indexs'> <span className={pathname =="/alldocument" ? "active":""}>3</span> PAN/Aadhaar Details</Link></li>
          <li><Link  to='/legaldocument' className='list-indexs'> <span className={pathname =="/legaldocument"?"active":""}>4</span> Legal Documents</Link></li>
          <li><Link to="/bankdetails" className='list-indexs'> <span  className={pathname== "/bankdetails" ? "active":""}>5</span> Bank Details</Link></li>
          <li><Link to="/serviceinfo" className='list-indexs'> <span  className={pathname== "/serviceinfo" ? "active":""}>6</span> Service Info</Link></li>
          <li><Link to="/previewdocument" className='list-indexs'> <span  className={pathname== "/previewdocument" ? "active":""}>7</span> Preview Document</Link></li>
          <li><Link to="/reachincreased"  className='list-indexs'> <span className={pathname== "/reachincreased" ? "active":""}>8</span> Reach Increased</Link></li>
          
        </ul>
      </div> 
    </div>
    </div>
    </section>
  )
}

export default Sidebar