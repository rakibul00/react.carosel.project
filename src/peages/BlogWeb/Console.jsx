import React from 'react'
import "./Blog.css"

function Console() {
  return (
    <div>
        <div id="carouselExampleFade" class="carousel slide carousel-fade mt-5">
     <div class="carousel-inner container">
     <div class="carousel-item active ">
      <div className="row">
        <div className="col-md-6">
        <img src="img/rakib.1st.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div className="col-md-6">
          <p className="ShorTitle">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="Longtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam molestiae, molestias excepturi voluptatem harum vitae quam quasi mollitia iure? Excepturi doloremque soluta laborum placeat repellat? Ea, a consectetur. Harum numquam repellendus aperiam. Accusantium neque porro, aspernatur similique ea fugiat sequi laboriosam ex velit impedit recusandae natus atque qui eum!
          </p>
          <h3 className="Myid">mohummad rakibul islam</h3>
          <p className="Myid">23 Feb,2023</p>

        </div>
      </div>
     </div>
     <div class="carousel-item">
      <div className="row">
        <div className="col-md-6">
        <img src="img/rakib.2nd.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div className="col-md-6">
          <p className="ShortTitle">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="Longtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, enim sequi! Id non est eum autem, in, tenetur quaerat modi sint nostrum saepe earum ea ad dicta eius cumque, velit perferendis qui quibusdam officia corrupti? Voluptatem excepturi nobis unde consequuntur sequi sit numquam, quaerat distinctio exercitationem ea, eos impedit culpa.
          </p>
          <h3 className="Myid">join git hub</h3>
          <p className="Myid">23 Feb,2023</p>
        </div>
      </div>
     </div>
     <div class="carousel-item">
      <div className="row">
        <div className="col-md-6">
        <img src="img/rakib.3d.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div className="col-md-6">
          <p className="ShortTitle">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="Longtitle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus tempora impedit dicta quaerat est maxime corporis provident esse nostrum, porro sed harum, dolorem labore accusamus voluptas! Ad veniam aut unde eius suscipit non accusantium blanditiis dolorem ea perspiciatis, architecto ipsa quod quos, beatae consectetur iusto temporibus voluptas quae laborum rem.
          </p>
          <h3 className="Myid">welcome</h3>
          <p className="Myid">23 Feb,2023</p>
          
        </div>
      </div>
     </div>
     </div>
     < button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
     <span class="visually-hidden">Previous</span>
     </button>
     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
     <span class="carousel-control-next-icon" aria-hidden="true"></span>
     <span class="visually-hidden">Next</span>
      </button>
      </div>
    </div>
  )
}

export default Console