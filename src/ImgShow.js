import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./ImgShow.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function ImgShow() {
  return (
    <>
      <h1 className="ImgShow-h1" >Wir arbeiten mit verschiedenen Restaurants</h1>
      <div className="ImgShow">
        <Carousel breakPoints={breakPoints}>
          <Item ><img src="../imgshow/1.png" /></Item>
          <Item><img src="../imgshow/2.png" /></Item>
          <Item><img src="../imgshow/3.png" /></Item>
          <Item><img src="../imgshow/4.png" /></Item>
          <Item><img src="../imgshow/5.png" /></Item>
          <Item><img src="../imgshow/6.png" /></Item>
          <Item><img src="../imgshow/7.png" /></Item>
          <Item><img src="../imgshow/8.png" /></Item>
        </Carousel>
      </div>
    </>
  );
}

export default ImgShow;