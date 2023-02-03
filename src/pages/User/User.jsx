import {RiMovie2Line} from "react-icons/ri"
import {IoIosArrowDropright} from "react-icons/io"
import { pb } from "../../Pocketbase.config"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export const User = () => {

  const navigate = useNavigate()
  
  const [userData, setUserData] = useState(null)


  useEffect(() => {
    if(pb.authStore.isValid){
      console.log(pb.authStore);
      setUserData(pb.authStore.baseModel)
    } else navigate("/auth")
  
  }, [])
  



  return (
    <div>

      <div className="user-header grid">

          {userData && <img src={userData.avatarURL} height="80" width="80" alt="user icon" />}
          <hgroup>
            { userData && <h3>{userData.username}</h3>}
            <p>This is my stupid profile, hope you like it!</p>
            <h6>Watch List: <mark>23</mark> </h6>
            <button onClick={()=> {
              pb.authStore.clear()
              navigate("/")
              }}
              className="secondary"
              style={{marginTop:"1em"}}>
                LOG OUT
              </button>
          </hgroup>

        </div>

      <hr />

      <div className="watchlist">
        <h1> <RiMovie2Line/> Watchlist</h1>

        <div className="watchlist__grid">
          <div>
            <article>
              <header><b>Name</b></header>
              <div className="grid">
                <img src="https://picsum.photos/300" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, labore.</p>
              </div>
              <footer><button>Checkout <IoIosArrowDropright/></button></footer>
            </article>
          </div>

          <div>
            <article>
              <header><b>Name</b></header>

              <div className="grid">
                <img src="https://picsum.photos/300" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, labore.</p>
              </div>

              <footer>
                <button>Checkout <IoIosArrowDropright/></button>
              </footer>
            </article>
          </div>

          <div>
            <article>
              <header><b>Name</b></header>

              <div className="grid">
                <img src="https://picsum.photos/300" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, labore.</p>
              </div>

              <footer>
                <button>Checkout <IoIosArrowDropright/></button>
              </footer>
            </article>
          </div>

          <div>
            <article>
              <header><b>Name</b></header>

              <div className="grid">
                <img src="https://picsum.photos/300" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, labore.</p>
              </div>

              <footer>
                <button>Checkout <IoIosArrowDropright/></button>
              </footer>
            </article>
          </div>

          <div>
            <article>
              <header><b>Name</b></header>

              <div className="grid">
                <img src="https://picsum.photos/300" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, labore.</p>
              </div>

              <footer>
                <button>Checkout <IoIosArrowDropright/></button>
              </footer>
            </article>
          </div>

          <div>
            <article>
              <header><b>Name</b></header>

              <div className="grid">
                <img src="https://picsum.photos/300" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, labore.</p>
              </div>

              <footer>
                <button>Checkout <IoIosArrowDropright/></button>
              </footer>
            </article>
          </div>

          <div>
            <article>
              <header><b>Name</b></header>

              <div className="grid">
                <img src="https://picsum.photos/300" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, labore.</p>
              </div>

              <footer>
                <button>Checkout <IoIosArrowDropright/></button>
              </footer>
            </article>
          </div>

          <div>
            <article>
              <header><b>Name</b></header>

              <div className="grid">
                <img src="https://picsum.photos/300" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, labore.</p>
              </div>

              <footer>
                <button>Checkout <IoIosArrowDropright/></button>
              </footer>
            </article>
          </div>

          <div>
            <article>
              <header><b>Name</b></header>

              <div className="grid">
                <img src="https://picsum.photos/300" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, labore.</p>
              </div>

              <footer>
                <button>Checkout <IoIosArrowDropright/></button>
              </footer>
            </article>
          </div>

          <div>
            <article>
              <header><b>Name</b></header>

              <div className="grid">
                <img src="https://picsum.photos/300" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, labore.</p>
              </div>

              <footer>
                <button>Checkout <IoIosArrowDropright/></button>
              </footer>
            </article>
          </div>

          <div>
            <article>
              <header><b>Name</b></header>

              <div className="grid">
                <img src="https://picsum.photos/300" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, labore.</p>
              </div>

              <footer>
                <button>Checkout <IoIosArrowDropright/></button>
              </footer>
            </article>
          </div>

          <div>
            <article>
              <header><b>Name</b></header>

              <div className="grid">
                <img src="https://picsum.photos/300" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, labore.</p>
              </div>

              <footer>
                <button>Checkout <IoIosArrowDropright/></button>
              </footer>
            </article>
          </div>

          <div>
            <article>
              <header><b>Name</b></header>

              <div className="grid">
                <img src="https://picsum.photos/300" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, labore.</p>
              </div>

              <footer>
                <button>Checkout <IoIosArrowDropright/></button>
              </footer>
            </article>
          </div>

          <div>
            <article>
              <header><b>Name</b></header>

              <div className="grid">
                <img src="https://picsum.photos/300" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, labore.</p>
              </div>

              <footer>
                <button>Checkout <IoIosArrowDropright/></button>
              </footer>
            </article>
          </div>

          <div>
            <article>
              <header><b>Name</b></header>

              <div className="grid">
                <img src="https://picsum.photos/300" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, labore.</p>
              </div>

              <footer>
                <button>Checkout <IoIosArrowDropright/></button>
              </footer>
            </article>
          </div>

          <div>
            <article>
              <header><b>Name</b></header>

              <div className="grid">
                <img src="https://picsum.photos/300" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, labore.</p>
              </div>

              <footer>
                <button>Checkout <IoIosArrowDropright/></button>
              </footer>
            </article>
          </div>

          <div>
            <article>
              <header><b>Name</b></header>

              <div className="grid">
                <img src="https://picsum.photos/300" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, labore.</p>
              </div>

              <footer>
                <button>Checkout <IoIosArrowDropright/></button>
              </footer>
            </article>
          </div>

          <div>
            <article>
              <header><b>Name</b></header>

              <div className="grid">
                <img src="https://picsum.photos/300" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, labore.</p>
              </div>

              <footer>
                <button>Checkout <IoIosArrowDropright/></button>
              </footer>
            </article>
          </div>

          <div>
            <article>
              <header><b>Name</b></header>

              <div className="grid">
                <img src="https://picsum.photos/300" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, labore.</p>
              </div>

              <footer>
                <button>Checkout <IoIosArrowDropright/></button>
              </footer>
            </article>
          </div>

          <div>
            <article>
              <header><b>Name</b></header>

              <div className="grid">
                <img src="https://picsum.photos/300" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, labore.</p>
              </div>

              <footer>
                <button>Checkout <IoIosArrowDropright/></button>
              </footer>
            </article>
          </div>

          <div>
            <article>
              <header><b>Name</b></header>

              <div className="grid">
                <img src="https://picsum.photos/300" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, labore.</p>
              </div>

              <footer>
                <button>Checkout <IoIosArrowDropright/></button>
              </footer>
            </article>
          </div>

          <div>
            <article>
              <header><b>Name</b></header>

              <div className="grid">
                <img src="https://picsum.photos/300" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, labore.</p>
              </div>

              <footer>
                <button>Checkout <IoIosArrowDropright/></button>
              </footer>
            </article>
          </div>

          <div>
            <article>
              <header><b>Name</b></header>

              <div className="grid">
                <img src="https://picsum.photos/300" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, labore.</p>
              </div>

              <footer>
                <button>Checkout <IoIosArrowDropright/></button>
              </footer>
            </article>
          </div>

          <div>
            <article>
              <header><b>Name</b></header>

              <div className="grid">
                <img src="https://picsum.photos/300" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, labore.</p>
              </div>

              <footer>
                <button>Checkout <IoIosArrowDropright/></button>
              </footer>
            </article>
          </div>


        </div>
      </div>

    </div>
  )
}



