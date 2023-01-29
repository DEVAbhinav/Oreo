import React, { useEffect, useState } from "react";
import Varanasi from "../../images/varanasi.jpg";
import SubDetails from "./SubDetails";
import axios from "axios";
import { Helmet } from "react-helmet";
import StickyBox from "react-sticky-box";
import Sidebar from "react-sticky-box";
import styles from "./styles.module.css";
import { StickyContainer, Sticky } from "react-sticky"
import { FaUserAlt, FaCommentDots} from "react-icons/fa";
import { AiFillHeart, AiFillCalendar, AiFillEye} from "react-icons/ai";
import blogData  from "../../data/blogData";


function Blogs({match}) {
  const route = match.params.name;
  // console.log(route);
  const [data, setData] = useState({});
  const [mode, setMode] = useState('online');
  const getDataForPage = async () => {
    try {
      // remove below network call and use local blogData
      // const res = await axios.get(`/${route}`);
      // const result = await res.data;
      // setData(result);
      // localStorage.setItem("data", JSON.stringify(result))
      const result = blogData[route];
      setData(result);
      localStorage.setItem("data", JSON.stringify(result))

    } catch (err) {
      setMode('offline')
      let collection = localStorage.getItem("data");
      setData(JSON.parse(collection))
      console.log(err);
    }
  };
  useEffect(() => {
    getDataForPage();
  }, [data]);

  const { title, intro, article, keyword, description, pageName, image } = data;
  return (
    <React.Fragment>
      <Helmet>        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content={keyword}
        />
        <meta
          name="description"
          content={description}
        />
      <meta name="author" content="@taxiinvaranasi" />
      <meta name="theme-color" content="#ffa43e" />

      <meta itemprop="name" content={pageName} />
      <meta
        itemprop="description"
        content={description}
      />
      <meta
        itemprop="image"
        content="https://www.taxiinvaranasi.in/images/logo.jpeg"
      />

      <meta name="twitter:card" content="Summary" />
      <meta name="twitter:site" content="@taxiinvaranasi" />
      <meta name="twitter:title" content={pageName} />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta name="twitter:creator" content="@taxiinvaranasi" />
      <meta
        name="twitter:image:src"
        content="https://www.taxiinvaranasi.in/images/logo.jpeg"
      />

      <meta property="og:title" content={pageName} />
      <meta property="og:type" content="Travel & Tourism" />
      <meta property="og:url" content="https://www.taxiinvaranasi.in/" />
      <meta
        property="og:image"
        content="https://www.taxiinvaranasi.in/images/logo.jpeg"
      />
      <meta
        property="og:description"
        content="Book a car rental in Varanasi with us for the lowest fare and most efficient car hire and Outstation taxi service. Hire us to visit Kashi Vishwanath, Sarnath Darshan, airport to kashi vishwanath and many more places for inside Varanasi as well as outstation taxi service and take your touring experience to another level."
      />
      <meta
        property="og:site_name"
        content={pageName}
      />
      <title>
        {pageName}
      </title>
    </Helmet>
      {        
        mode === 'offline' ?
          <div className="alert alert-warning text-center font-medium" role="alert">
              You are in offline mode or some issue with connectivity
          </div>
          : null
      }      
      <div className="container">
        <div className="col-lg-8 col-md-10 col-sm-12 col-12 mx-auto">
          <h1 className="font-25 my-4 font-bold font-weight-bold text-brown underlined-heading">{title}</h1>
          <img src={image} className="img-fluid my-3" alt={title} />
          {intro
            ? intro.map((introdetail, index) => {
                return <p key={index} className="font-regular text-brown font-16">{introdetail}</p>;
              })
            : ""}
          {article
            ? article.map((subDetails) => {
                return (
                  <SubDetails key={subDetails.id} subDetails={subDetails} />
                );
              })
            : ""}
          <h2 className="font-demi font-18 mt-4 text-brown">
            {pageName}
          </h2>
          <hr className="bg-orange" />
          <div className="blog-post mb-3 mt-0 font-medium text-brown font-14">
            <FaUserAlt /> 4500+ pickups&nbsp;&nbsp;&nbsp;
            <AiFillCalendar /> We will wait for
            you&nbsp;&nbsp;&nbsp;
            <FaCommentDots /> Fastest Cab in
            Varanasi&nbsp;&nbsp;&nbsp;
            <AiFillHeart /> 5 favourites&nbsp;&nbsp;&nbsp;
            <AiFillEye /> 1.128k views
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Blogs;