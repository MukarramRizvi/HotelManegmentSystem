import React from 'react'
// import { useParams } from 'react-router-dom'
// import { DataApi } from '../../Data'

const Products = () => {
    // const {id} = useParams()
    // console.log(id) 

    // const filterDta = DataApi[0].filter((e,i)=>{
    //     return e.id == id
    // })
    // console.log(filterDta)
  return (
    <div>
      {/* {
        filterDta.map((e,i)=>{
            return(
                <center><div key={i} style={{border:"1px solid black", color:"white",background:"transparent",backdropFilter:"blur(40px)", width:400,textAlign:"center", marginTop:"100px", borderRadius:"10px", height:"450px", borderBottom:"none" }}>
                    <img src={e.image} alt="" style={{width:150,}} />
                    <h2>{e.title}</h2><br />
                    <p>{e.description}</p><br />
                    <h3>Price:{e.price}</h3>
                </div></center>
            )
        })
      } */}
    </div>
  )
}

export default Products
