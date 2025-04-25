import React from 'react'

const Process = () => {
  return (
    <div>
      <div className="row1">
        <div className="col1">
            <h2>Our 3-Step Process</h2>
            <p>ExplainLife offers a simple three-step process for obtaining hassle-free life insurance. <br /> Calculate your specific needs with our user-friendly calculator, receive instant personalized quotes, and apply for your chosen policy directly on our website.</p>
            <p>Safeguard your family's future easily with our streamlined process.</p>
            <div className="btn"><button>How much life insurance do I need? </button>
            <button>Get a quote </button></div>
        </div>
        <div className="col1">
            <h2>Life Insurance Explained</h2>
            <div className="conta">
                <div className="box"><p className='p1'>Calculate Needs</p><p>Use our calculator to understand your family's unique life insurance needs</p></div>
            </div>
            <div className="conta">
                <div className="box"><p className='p1'>Get a quote</p><p>Get instant quotes and see our personalized recommendation</p></div>
            </div>
            <div className="conta">
                <div className="box"><p className='p1'>Apply Now</p><p>Apply for your selected life insurance policy right here on our website! </p></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Process
