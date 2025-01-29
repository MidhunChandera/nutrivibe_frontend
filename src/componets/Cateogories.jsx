import React from 'react'
import { useNavigate } from 'react-router-dom';
function Cateogories() {
     const navigate=useNavigate()
  return (
    <>
      <div className="container">
        <h3 className='text-center mt-3'>Our Products</h3>
        <div className="row">
            <div  onClick={() => navigate('/shop/whey')} className="col-md-2">
                <div className="card  border-0 ">
                   <img src="https://assets.hyugalife.com/banner/feature/Whey_Protein_dweb_1.png?compress=true&format=webp&q=75&w=260&h=340" alt="" />
                </div>
                <p className='text-center'>Whey protien</p>
            </div>
            <div onClick={() => navigate('/shop/vegan')} className="col-md-2">
            <div className="card  border-0 ">
                   <img src="https://assets.hyugalife.com/banner/feature/Vegan_Plant_Based_Protein_dweb.png?compress=true&format=webp&q=75&w=260&h=340" alt="" />
                </div>
                <p className='text-center'>Vegan protien</p>
            </div>
            <div onClick={() => navigate('/shop/creatine')} className="col-md-2">
            <div  className="card  border-0 ">
                   <img src="https://assets.hyugalife.com/banner/feature/Creatine_dweb_3.png?compress=true&format=webp&q=75&w=260&h=340" alt="" />
                </div>
                <p className='text-center'>Creatine</p>
            </div>
            <div onClick={() => navigate('/shop/preworkout')} className="col-md-2">
            <div  className="card  border-0 ">
                   <img src="https://assets.hyugalife.com/banner/feature/Pre_Workout_dweb.png?compress=true&format=webp&q=75&w=260&h=340" alt="" />
                </div>
                <p className='text-center'>Preworkout</p>
            </div>
            <div onClick={() => navigate('/shop/multivitamin')} className="col-md-2">
            <div className="card  border-0 ">
                   <img src="https://assets.hyugalife.com/banner/feature/multivitamins_dweb_1.png?compress=true&format=webp&q=75&w=260&h=340" alt="" />
                </div>
                <p className='text-center'>Multivitamin</p>
            </div>
            <div onClick={() => navigate('/shop/omega')} className="col-md-2">
            <div className="card  border-0 ">
                   <img src="https://assets.hyugalife.com/banner/feature/Omega_3_Fish_Oil_dweb_1.png?compress=true&format=webp&q=75&w=260&h=340" alt="" />
                </div>
                <p className='text-center'>Omega 3</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Cateogories
