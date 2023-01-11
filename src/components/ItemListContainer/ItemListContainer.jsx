import React from 'react'
import { useParams } from 'react-router-dom';
import Card from "../Card/Card";
import Greeting from "../Greeting/Greeting";

const ItemListContainer = () => {

    const cards = [
        {
          id: 1,
          categoria: "habitacional",
          foto: "https://scontent.fcun1-1.fna.fbcdn.net/v/t39.30808-6/291887504_2675742675893451_7013954534672046963_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=QYE6jRaKsQEAX-Mabi_&_nc_ht=scontent.fcun1-1.fna&oh=00_AfBxhd--V1yeTXgQoByou-oE_6gznECluJRqHund21C__w&oe=63C4857E",
          nombre:
        "Casa Habitacional Mexicana de primer nivel",
      descripcion:
        "Casa de uso habitacional de alta gama con interiores de alto valor, con consideraciones de alto presupuesto por metro cuadrado",
      precio: 859,
        },
        {
          id: 2,
          categoria: "habitacional",
          foto: "https://scontent.fcun1-1.fna.fbcdn.net/v/t39.30808-6/292140910_2675742759226776_7051964672698650208_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=z7rTph5E2egAX_PrMxw&_nc_ht=scontent.fcun1-1.fna&oh=00_AfAY4LcGaFgOeeL-DCh2f_aJsL1TP7YltDCoVhslhicpng&oe=63C4DE99",
          nombre: "Casa Habitacional Mexicana de segundo nivel",
          descripcion:
            "Casa de uso habitacional de gama media con interiores de valor comercial medio, con consideraciones de presupuesto moderado precio por metro cuadrado",
          precio: 649,
        },
        {
          id: 3,
          categoria: "habitacional",
          foto: "https://scontent.fcun1-1.fna.fbcdn.net/v/t39.30808-6/271933813_2536669443134109_6670339364111890826_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=ALsnS9jRN8IAX967FG3&_nc_ht=scontent.fcun1-1.fna&oh=00_AfDURx9eSzHK6dV9QXIBuGnitNLWIGXRXJEwqfT6gthMJQ&oe=63C45673",
          nombre: "Casa Economica de nivel interes social precio por metro cuadrado",
          descripcion:
            "Casa de nivel economico bajo por metro cuadrado",
          precio: 499,
        },
        {
          id: 4,
          categoria: "comercial",
          foto: "https://scontent.fcun1-1.fna.fbcdn.net/v/t39.30808-6/293841469_570087941244160_5489608332249780383_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=zCw1KGgw2qcAX_nQZYL&_nc_ht=scontent.fcun1-1.fna&oh=00_AfD8ICK3NvgoVq2tXwKxlBbU9aBqmJEox3KvKClOhnKnzQ&oe=63C50A4A",
          nombre:
            "Plaza comercial estilo 1",
          descripcion:
            "Precio comercial estilo comercial 1",
          precio: 1099,
        },
        {
          id: 5,
          categoria: "comercial",
          foto: "https://scontent.fcun1-1.fna.fbcdn.net/v/t39.30808-6/273211542_2547223752078678_1500418032622597450_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=XA3_OazXwkkAX8lL1uI&_nc_ht=scontent.fcun1-1.fna&oh=00_AfBOZv_NK7-UOH56gvvFA12Ve2KU_S63S2zEXBH4QZiDIA&oe=63C3D1A5",
          nombre: "Plaza comercial estilo 2",
          descripcion:
            "Plaza comercial estilo 2 ",
          precio: 1599,
        },
        {
          id: 6,
          categoria: "comercial",
          foto: "https://scontent.fcun1-1.fna.fbcdn.net/v/t39.30808-6/222628284_2381656538635401_5332273096418414673_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=R76G-ZsDOvUAX-4VQS2&_nc_ht=scontent.fcun1-1.fna&oh=00_AfCbkO6SHiUjQ6dLDdu_ijgtxdo-GK8AZqPC2EW04zLCFw&oe=63C4F2C5",
          nombre: "Plaza comercial estilo 3",
          descripcion:
            "Plaza comercial estilo 3",
          precio: 2010,
        },
        {
          id: 7,
          categoria: "hotelero",
          foto: "https://scontent.fcun1-1.fna.fbcdn.net/v/t1.6435-9/129539787_2171434436324280_4725214453937294510_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=J4zp3Xk99MMAX9Fu0po&_nc_ht=scontent.fcun1-1.fna&oh=00_AfD4DNwT8oJk9R2ApuTm6jGLbkOSZZcfq71G6Qhk42gSOg&oe=63E69BD8",
          nombre:
            "Hoteles de calidad precio por metro cuadrado",
          descripcion:
            "Hoteles de calidad precio por metro cuadrado",
          precio: 2549,
        },
        {
          id: 8,
          categoria: "reparaciones",
          foto: "https://scontent.fcun1-1.fna.fbcdn.net/v/t1.6435-9/128748483_2169745686493155_6734867280783236447_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=Jm6JGp7R4WsAX-PItVp&_nc_ht=scontent.fcun1-1.fna&oh=00_AfBIDspiT10Q-pC28eFy_DaF4SvzNy4C64LLyWqpqnsCmA&oe=63E6C0EB",
          nombre: "Reparaciones en general",
          descripcion:
            "Reparaciones en general precio",
          precio: 989,
        },
        {
          id: 9,
          categoria: "otros",
          foto: "https://scontent.fcun1-1.fna.fbcdn.net/v/t39.30808-6/292276633_2675792532555132_1754910093244451107_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=n-5bCAuZd_8AX9j3yoA&_nc_ht=scontent.fcun1-1.fna&oh=00_AfC8b-A_R1vdbrVQnPmdiOPXw8kSfLnZS8rzKxda9xiUQA&oe=63C4E704",
          nombre: "Otros servicios de reparacion",
          descripcion:
            "Otros servicios de reparacion en nuestro catalogo",
          precio: 449,
        },
      ];

      const {categoria} = useParams()
      const filter = categoria ? cards.filter ((item) => item.categoria === categoria) : cards


  return (
    
    <div>
        <Greeting
        greeting={"Bienvenido a la Tienda en linea de Instrumentos Musicales"}
        />

    <div className="d-flex container-fluid row" style={{ margin: "auto" }}>
    {filter.map(({ nombre, descripcion, foto, precio, id }, index) => (
      <Card
        key={index}
        id={id}
        nombre={nombre}
        descripcion={descripcion}
        foto={foto}
        precio={precio}
      />
    ))}
  </div>
  </div>
  )
}

export default ItemListContainer