import React from 'react'
import '../main/Main.css';
// import p1 from "../main/p1.jpg";

const Home = () => {
  return (
    <div className="home">
        <div className="header">
            <h2>Providing Financial Security for Your Loved Ones</h2>
            <p>Get life insurance in minutes and make informed decisions to protect what matters most with our expert guidance.</p>
            <div className="btn"><button>How much life insurance do I need? <i className='bx bx-chevron-right' style={{ fontSize: '12px', color: 'red' }}></i></button>
            <button>Get a quote <i className='bx bx-chevron-right' ></i></button></div>
        </div>
        {/* <div className="image"><img src={p1} alt="" srcset="" /></div> */}

    </div>
  )
}

export default Home
