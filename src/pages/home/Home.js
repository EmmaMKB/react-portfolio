import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import BannerSection from "../../layout/banner-section/banner-section";

const Home = () => {

    return(
        <div className="page">
            <NavBar />
            <BannerSection />
        </div>
    )
}

export default Home;