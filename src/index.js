import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} height="200" width="200" alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Ronaldo"
      img="https://www.si.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTc5NTMwMzAxNjQ1NTMwMjQ5/gettyimages-891445.jpg"
      tel="+123 456 789"
      email="ronaldo@ronaldo.com"
    />
    <Card
      name="Tevez"
      img="https://imgsapp.mg.superesportes.com.br/app/noticia_126420360808/2020/06/26/3852287/20200626173011720845i.Tevez"
      tel="+7387384587"
      email="tevez@tevez.com"
    />
  </div>,
  document.getElementById("root")
);
