import React from "react";
import "./home.css";
import NavBar from "../../components/NavBar/NavBar";
import BannerSection from "../../layout/banner-section/banner-section";
import Footer from "../../components/Footer/Footer";

const Home = () => {

    return(
        <div className="page home__page">
            <NavBar />
            <BannerSection />
            <Footer />
        </div>
    )
}

export default Home;