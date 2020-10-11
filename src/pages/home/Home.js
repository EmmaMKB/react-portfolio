import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import BannerSection from "../../layout/banner-section/banner-section";
import Footer from "../../components/Footer/Footer";

const Home = () => {

    return(
        <div className="page">
            <NavBar />
            <BannerSection />
            <Footer />
        </div>
    )
}

export default Home;