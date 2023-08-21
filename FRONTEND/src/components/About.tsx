import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts } from '../features/Products/ProductSlice'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { BsShare } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import styled from 'styled-components'

// import "./About.css"
const About = () => {
  // const count = useSelector((state: any) => state.product.count)
  const [clickedImg, setClickedImg] = useState("")
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  const allproducts = useSelector((state: any) => state.product.allproducts)
  // console.log(allproducts, count);

  const dispatch = useDispatch()
  const changeImg = (e: any) => {
    setClickedImg(e.target.src)
  }
  return (
    <Wrapper>
      <div>
        {allproducts.map((each: any) => (
          <section className="product">
            <div className="product__photo">
              <div className="photo-container">
                <div className="photo-main">
                  <div className="controls">
                    <BsShare />
                    <AiOutlineHeart />
                  </div>
                  <img src={clickedImg} />
                </div>
                <div className="photo-album">
                  <ul className='ul'>
                    {each?.images.map((img: any, index: number) => (

                      <li className='li' key={index}><img src={img.url} alt='image' onClick={(e) => changeImg(e)} /></li>

                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="product__info">
              <div className="title">
                <h1>{each.title}</h1>
              </div>
              <div className="price">
                rupees <span>{each.price}</span>
              </div>
              <div className="variant">
                <h3>SELECT A COLOR</h3>
                <ul>
                  {each?.color.map((col: any) => (
                    <div>
                      <li className='button-li'><button className='my-button' style={{ backgroundColor: `${col.title.toLowerCase()}` }}>{col.title}</button></li>

                    </div>
                  ))}

                </ul>
              </div>
              <div className="description">
                <h3>BDESCRIPTION</h3>
                <ul className='des-li'>
                  <li>ndvnalkvnl</li>
                  <li>ndvnalkvnl</li><li>ndvnalkvnl</li><li>ndvnalkvnl</li><li>ndvnalkvnl</li><li>ndvnalkvnl</li><li>ndvnalkvnl</li><li>ndvnalkvnl</li>
                </ul>
              </div>
              <button className="buy--btn">ADD TO CART</button>
            </div>
          </section>
        ))}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`

* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  display: grid;
  grid-template-rows: 1fr;
  font-family: "Raleway", sans-serif;
  background-color: #01e37f;
}

h3 {
  font-size: 0.7em;
  letter-spacing: 1.2px;
  color: #a6a6a6;
}

img {
  max-width: 50%;
  filter: drop-shadow(1px 1px 3px #a6a6a6);
  margin-left: 25%;
  margin-top: 10%;
}

/* ----- Product Section ----- */
.product {
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  margin-left: 50px;
  padding: 2.5em 0;
  margin-top: 15px;
  min-width: 600px;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 80px;
}

/* ----- Photo Section ----- */
.product__photo {
  position: relative;
}

.photo-container {
  position: absolute;
  left: -2.5em;
  display: grid;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
}

.photo-main {
  border-radius: 6px 6px 0 0;
  background-color: #9be010;
  background: radial-gradient(#e5f89e, #96e001);

  .controls {
      display: flex;
      justify-content: space-between;
      padding: 0.8em;
      color: #fff;
  }

  img {
      position: absolute;
      left: -3.5em;
      top: 2em;
      max-width: 50%;
      border-radius: 5px;
  }
}

.photo-album {
  padding: 0.7em 1em;
  border-radius: 0 0 6px 6px;
  background-color: #fff;

  .ul {
      display: flex;
      justify-content: space-around;
      list-style-type: none;
  }

  .li {
      float: left;
      width: 55px;
      height: 55px;
      padding: 7px;
      border: 1px solid #a6a6a6;
      border-radius: 3px;
  }
}

/* ----- Informations Section ----- */
.product__info {
  padding: 0.8em 0;
}

.title {
  h1 {
      margin-bottom: 0.1em;
      color: #4c4c4c;
      font-size: 1.5em;
      font-weight: 900;
  }

  span {
      font-size: 0.7em;
      color: #a6a6a6;
  }
}

.price {
  margin: 1.5em 0;
  color: #ff3f40;
  font-size: 1.2em;

  span {
      padding-left: 0.15em;
      font-size: 2.9em;
  }
}

.variant {
  overflow: auto;

  h3 {
      margin-bottom: 1.1em;
  }

  li {
      float: left;
      width: 35px;
      height: 35px;
      padding: 3px;
      border: 1px solid transparent;
      border-radius: 3px;
      cursor: pointer;

      &:first-child,
      &:hover {
          border: 1px solid #a6a6a6;
      }
  }

 
}

.description {
  clear: left;
  margin: 2em 0;

  h3 {
      margin-bottom: 1em;
  }

  ul {
      font-size: 0.8em;
      list-style: disc;
      margin-left: 1em;
  }

  li {
      text-indent: -0.6em;
      margin-bottom: 0.5em;
  }
}

.buy--btn {
  padding: 1.5em 3.1em;
  border: none;
  border-radius: 7px;
  font-size: 0.8em;
  font-weight: 700;
  letter-spacing: 1.3px;
  color: #fff;
  background-color: #ff3f40;
  box-shadow: 2px 2px 25px -7px #4c4c4c;
  cursor: pointer;

  &:active {
      transform: scale(0.97);
  }
}

.button-li{
  list-style-type: none;
}

.des-li{
  list-style-type: none;
}

.my-button{
  border: 1px solid #000;
  padding: 10px;
  border-radius: 50%;
  font-size: 10px;
  cursor: pointer;
}
`
export default About