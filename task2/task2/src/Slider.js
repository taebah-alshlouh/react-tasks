import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import './App.css';


const images = [
  { url: "https://international.visitjordan.com/uploads/Blogs/0a99c141-f42f-4146-a999-c0263b08b32d.jpg" },
  { url: "https://cdn.theculturetrip.com/wp-content/uploads/2021/04/boats-in-tala-bay-aqaba-jordan.jpg" },
  { url: "https://www.wideworldtrips.com/wp-content/uploads/2020/07/tafilah-tourist-attractions.jpg" },
  { url: "https://media-cdn.tripadvisor.com/media/photo-s/13/b3/02/b2/wwwyes-jordancom.jpg" },
  { url: "https://media.istockphoto.com/photos/jisr-az-zarqa-aerial-view-of-the-israeli-arab-coastal-town-skyline-picture-id1223788984?k=20&m=1223788984&s=612x612&w=0&h=WT9Xht_u7FQa5TDhd7GR9ttEDBwUsnarTqEROH2_njo=" },
  { url: "https://i2.wp.com/roadsandkingdoms.com/uploads/2018/03/shutterstock_512721451.jpg?fit=680%2C456&ssl=1" },
  { url: "https://digital.ihg.com/is/image/ihg/crowne-plaza-amman-5890815863-3x2" },
];

const Slider = () => {
  return (
    <div className="App">
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

export default Slider;