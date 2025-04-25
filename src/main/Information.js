import React from 'react'
import p3 from "../main/p3.jfif";

const Information = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
            <img src={p3} alt="" srcset="" />
        </div>
        <div className="col">
            <h2>Life Insurance Explained</h2>
            <div className="conta">
                <div className="box"><p>1</p></div>
                <div className="box">Life insurance is a valuable financial tool that safeguards your family's well-being by providing financial protection and security in the face of unexpected events.</div>
            </div>
            <div className="conta">
                <div className="box"><p>2</p></div>
                <div className="box">Life insurance offers peace of mind, knowing that your loved ones will be supported and can maintain their lifestyle, even in your absence.</div>
            </div>
            <div className="conta">
                <div className="box"><p>3</p></div>
                <div className="box">Life insurance provides a financial safety net, ensuring that your family can cover expenses, such as mortgage payments, education costs, and day-to-day living expenses.</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Information
