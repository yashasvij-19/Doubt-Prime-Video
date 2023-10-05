import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../styles/Carousel.css";
import { Link } from "react-router-dom";

export default () => (
  <Carousel>
    <div id="mainDiv">
      <div id="detailSection">
        <h4>#1 in India</h4>
        <a
          href="https://www.primevideo.com/detail/0I6U0N56BVTVGY24EM2FARBNIC/ref=atv_mv_hom_c_3N84Xx_HS21916d_1_1?jic=16%7CCgNhbGwSA2FsbA%3D%3D"
          target="_blank"
        >
          <img
            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_RockyAurRani/0e8bfd6d-8e80-487c-81e7-d3fddeb101f4._AC_SX1500_FMwebp_.png"
            alt="RARKPK"
          />
        </a>
        <Link to="/content-details" style={{ textDecoration: "none" }}>
          <p>More Details</p>
        </Link>
        <i class="fa-solid fa-circle-plus"></i>
      </div>
    </div>
    <div id="mainDiv1">
      <div id="detailSection">
        <h4>#3 in India</h4>
        <a
          href="https://www.primevideo.com/detail/0STFO0E97XRJ8WFI3RZLCPGSHZ/ref=atv_mv_hom_c_3N84Xx_dVc8kx_1_4?jic=16%7CCgNhbGwSA2FsbA%3D%3D"
          target="_blank"
        >
          <img
            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Jailer/23c4ad0b-077b-4e55-be83-ae2a2bbb590a._AC_SX1500_FMwebp_.png"
            alt="Jailer"
          />
        </a>
        <Link to="/content-details" style={{ textDecoration: "none" }}>
          <p>More Details</p>
        </Link>
        <i class="fa-solid fa-circle-plus"></i>
      </div>
    </div>
    <div id="mainDiv2">
      <div id="detailSection">
        <h4>#9 in India</h4>
        <a
          href="https://www.primevideo.com/detail/0OW1WLFZSIM5W9UKBLAGACGL66/ref=atv_mv_hom_c_3N84Xx_IhYTI8_1_5?jic=16%7CCgNhbGwSA2FsbA%3D%3D"
          target="_blank"
        >
          <img
            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Neeyat_Refresh/3231282a-4745-461d-8659-466d0daf07a6._AC_SX1500_FMwebp_.png"
            alt="Neeyat"
          />
        </a>
        <Link to="/content-details" style={{ textDecoration: "none" }}>
          <p>More Details</p>
        </Link>
        <i class="fa-solid fa-circle-plus"></i>
      </div>
    </div>
    <div id="mainDiv3">
      <div id="detailSection">
        <h4>#7 in India</h4>
        <a
          href="https://www.primevideo.com/detail/0LZ2E62QE2TFXNTGOA0YSBO2JL/ref=atv_mv_hom_c_3N84Xx_Cvug8p_1_2?jic=16%7CCgNhbGwSA2FsbA%3D%3D"
          target="_blank"
        >
          <img
            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SatyapremKiKatha_Refresh/6e4d6907-18ad-4d87-ac1f-fd4c0290c310._AC_SX1500_FMwebp_.png"
            alt="SatyaPrem ki Katha"
          />
        </a>
        <Link to="/content-details" style={{ textDecoration: "none" }}>
          <p>More Details</p>
        </Link>
        <i class="fa-solid fa-circle-plus"></i>
      </div>
    </div>
    <div id="mainDiv4">
      <div id="detailSection">
        <a target="_blank">
          <img
            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Pizza3TheMummy/0d69d1b9-2a4d-4535-b77d-eb1e2f4abd02._AC_SX1500_FMwebp_.png"
            alt="Pizza 3 The Mummy"
          />
        </a>
        <Link to="/content-details" style={{ textDecoration: "none" }}>
          <p>More Details</p>
        </Link>
        <i class="fa-solid fa-circle-plus"></i>
      </div>
    </div>
    <div id="mainDiv5">
      <div id="detailSection">
        <a
          href="https://www.primevideo.com/detail/0PO73W4V7FVMFWNG031T23HKJZ/ref=atv_mv_hom_c_3N84Xx_9U1nte_1_7?jic=16%7CCgNhbGwSA2FsbA%3D%3D"
          target="_blank"
        >
          <img
            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Maaveeran_SH/5cbbf3ac-0050-44c9-b551-a6b98b335898._AC_SX1500_FMwebp_.png"
            alt="Maaveeran"
          />
        </a>
        <Link to="/content-details" style={{ textDecoration: "none" }}>
          <p>More Details</p>
        </Link>
        <i class="fa-solid fa-circle-plus"></i>
      </div>
    </div>
    <div id="mainDiv6">
      <div id="detailSection">
        <a
          href="https://www.primevideo.com/detail/0N376V6Y5CZUAYUMX5ARI8JLVT/ref=atv_mv_hom_c_3N84Xx_Q69rAZ_1_7?jic=16%7CCgNhbGwSA2FsbA%3D%3D"
          target="_blank"
        >
          <img
            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Spy/3214ce4e-f9a0-4d99-8fc0-b413df289850._AC_SX1500_FMwebp_.png"
            alt="Maaveeran"
          />
        </a>
        <Link to="/content-details" style={{ textDecoration: "none" }}>
          <p>More Details</p>
        </Link>
        <i class="fa-solid fa-circle-plus"></i>
      </div>
    </div>
  </Carousel>
);
