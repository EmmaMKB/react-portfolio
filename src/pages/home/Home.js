import React from "react";
import "./home.css";
import NavBar from "../../components/NavBar/NavBar";
import BannerSection from "../../layout/banner-section/banner-section";

const Home = () => {

    return(
        <div className="page home__page">
            <NavBar />
            <BannerSection />
        </div>
    )
}

export default Home;