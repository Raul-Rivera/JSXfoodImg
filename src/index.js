//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const imgWeb = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img
        className="img"
        src="https://scontent.fewr1-6.fna.fbcdn.net/v/t1.18169-9/10998880_1642546519306536_5770878980110254626_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=ssHO9CG3c1EAX-iOPK0&_nc_ht=scontent.fewr1-6.fna&oh=00_AT84m_u_0s5CJumSEewUUv_Nm7N1Jf457FuNLLMWr8ut8A&oe=62353338"
        alt="asadoPure"
      />
      <img
        className="img"
        src="https://micevichedehoy.com/wp-content/uploads/2019/10/jalea-mixta_700x467.jpg"
        alt="jalea"
      />
      <img
        className="img"
        src="https://t2.rg.ltmcdn.com/es/posts/8/6/2/causa_limena_31268_600.jpg"
        alt="causa"
      />
      <img src={imgWeb + "?grayscale"} alt="taa" />
    </div>
  </div>,
  document.getElementById("root")
);
