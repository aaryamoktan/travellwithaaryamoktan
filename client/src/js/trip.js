import React,{useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import "../css/born.css"
import Product from './apimain';
const Trip = (req,res) => {
  const params = useParams();
 
  const filter =Product.filter((ele)=>
  {
    return ele.main === params.main
  })
  const [data,setdata] = useState(filter);
  return (
    <>
      <div className='bornfire'>
        <div className='upper'>
          <div className='img'>
            <img src={"https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1564687006000/photosp/ef11930c-bf24-4707-82c0-a86c07e724a4/stock-photo-travel-adventure-map-word-words-travelling-traveler-wanderlust-travel-more-ef11930c-bf24-4707-82c0-a86c07e724a4.jpg"} alt="" />
          </div>
          <div className='info'><p>Our two personal favourites are the In Your Shoes mode, where different players answer on your behalf; it shows how others perceive you – which will always elicit a surprising revelation or two. The other is the Journaling mode, in which you can pick any of the more profound questions, and let it serve as a self-exploration writing prompt for your journal – if you are into keeping one, like ourselves.

            The best thing about the game is that theres no winning here; all you need is to open up and see where the game takes you. And before you ask, the game costs 200LE, and you can order it by sending a DM on The Bonfire Experience Instagram account.</p></div> 
        </div>
      </div>
      <div className='ourplan'>
        
      </div><div class="image">
      {
        data.map((ele) => {
        const { img, title,category } = ele;
        return (
          <>
              <div className='card'>
              <h3 className='h3'>{title}</h3>
                <img src={img} alt="" />
                <Link to={`/service/${category}/${title}`}>Book-Now</Link>
              </div> 
          </>
        )
      })}</div>



    </>
  )  
}

export default Trip