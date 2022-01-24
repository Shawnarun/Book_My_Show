import axios from "axios";
import React, {useState, useEffect} from "react";
import {FcCustomerSupport, FcNews } from "react-icons/fc";
import { GiTicket } from "react-icons/gi";
import { RiInstagramFill } from "react-icons/ri";
import { SiTwitter, SiFacebook, SiLinkedin, SiPinterest, SiYoutube } from "react-icons/si";



// Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainment.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// config
import PremiereImage from "../Config/TempPosters.config";

const HomePage = () => {

  const[popularMovies, setPopularMovies] = useState ([]);
  const[upcomingMovies, setUpcomingMovies] = useState ([]);
  const[topRatedMovies, setTopRatedMovies] = useState ([]);


  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setUpcomingMovies(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
  }, []);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      setTopRatedMovies(getTopRatedMovies.data.results);
    };
    requestTopRatedMovies();
  }, []);


  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="container mx-auto px-4 ">
          <h1 className="text-2xl font-bold text-gray-800 my-3">
            The best of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>

        <div className="bg-bms-800 py-12 ">
          <div className="container mx-auto px-4 flex flex-col gap-3">
            <div className="hidden md:flex">
              <img
                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Rupay"
                className="w-full h-full"
              />
            </div>
            <PosterSlider 
             images = {popularMovies} 
             title="Premieres" 
             subtitle="Brand new releases every Friday" isDark/>
            </div>
        </div>
        </div>

        <div className="container mx-auto px-4 my-8">
          <PosterSlider
             images = {upcomingMovies} 
             title="Upcoming Movies"
            isDark={false}/>
        </div>
      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={topRatedMovies}
          title="Top Rated Movies"
          isDark={false}
        />
      </div>


      <div className = "sm:hidden md:hidden lg:block">
      <div className="space-y-2 py-4 bg-gray-900">
        <div className = "container ml-96 w-1/2">
        <div className = "flex mx-auto justify-center gap-56 mt-8">
      <div className="w-16 h-16">
                <FcCustomerSupport className="w-full h-full" />
              </div>
      <div className="w-16 h-16">
                <GiTicket className="w-full h-full" />
              </div>
      <div className="w-16 h-16">
                <FcNews className="w-full h-full" />
              </div>
            </div>
          </div>
        <div className = "container ml-96 w-1/2 ">
        <div className = "flex mx-auto justify-between gap-16">
          <h2 className = "text-gray-600 text-base hover:text-gray-300 cursor-pointer">Customer Support 24x7</h2>
          <h2 className = "text-gray-600 text-base hover:text-gray-300 cursor-pointer">Check your Tickets</h2>
          <h2 className = "text-gray-600 text-base hover:text-gray-300 cursor-pointer">Subscribe to NewsLetter</h2>
        </div></div>  
      <div className="container py-2 ml-40 w-2/3">
            <h2 className="text-gray-500 text-sm w-2/3 hover:text-gray-300 cursor-pointer">
                MOVIES PLAYING IN NATIONAL CAPITAL REGION ( NCR )
            </h2>
            <h3 className = "text-gray-500 text-xs py-2">
              The Suicide Squad | Jungle Cruise | Free Guy | Black Widow | Nobody | Infinite | The Tomorrow War | Jolt | Luca | Vivo | The Forever Purge | Cruella | Don't Breathe 2 | Wrath of a Man | F9 
            </h3>
            </div>
      <div className="container ml-40 w-2/3">
            <h2 className="text-gray-500 text-sm w-2/3 hover:text-gray-300 cursor-pointer">
                MOVIES BY GENRE
            </h2>
            <h3 className = "text-gray-500 text-xs py-2">
              Action movies | Thriller movies | Horror movies | Comedy movies | Crime movies | Sci-Fi movies | Drama movies | Romantic movies | Period movies | Traditional movies | Devotional movies | Adaptation movies | Mystery movies | Fantasy movies | Supernatural movies | Animation movies
            </h3>
            </div>
      <div className="container py-2 ml-40 w-2/3">
            <h2 className="text-gray-500 text-sm w-2/3 hover:text-gray-300 cursor-pointer">
                MOVIES BY LANGUAGE
            </h2>
            <h3 className = "text-gray-500 text-xs py-2">
              Movies in english | Movies in hindi | Movies in Korean | Movies in Tamil | Movies in telugu | Movies in japanese | Movies in portugese | Movies in assamese | Movies in nepali | Movies in urdu | Movies in spanish | Movies in bengali | Movies in konkani | Movies in marathi 
            </h3>
            </div>
      <div className="container ml-40 w-2/3">
            <h2 className="text-gray-500 text-sm w-2/3 hover:text-gray-300 cursor-pointer">
                COUNTRIES
            </h2>
            <h3 className = "text-gray-500 text-xs py-2">
              UAE | Indonesia | Sri Lanka | Singapore | West Indies
            </h3>
            </div>

        <div className = "container ml-96 w-1/2">
            <h2 className="flex justify-center text-gray-600 text-base">
            --------------- CONTACT US ---------------
            </h2>
        <div className = "flex justify-center gap-4 py-4">
      <div className="w-8 h-8 hover:bg-gray-900 hover:opacity-75 cursor-pointer">
                <RiInstagramFill className="w-full h-full" />
              </div>
      <div className="w-8 h-8 hover:bg-gray-900 v cursor-pointer">
                <SiFacebook className="w-full h-full" />
              </div>
      <div className="w-8 h-8 hover:bg-gray-900 hover:opacity-75 cursor-pointer">
                <SiTwitter className="w-full h-full" />
              </div>
      <div className="w-8 h-8 hover:bg-gray-900 hover:opacity-75 cursor-pointer">
                <SiLinkedin className="w-full h-full" />
              </div>
      <div className="w-8 h-8 hover:bg-gray-900 hover:opacity-75 cursor-pointer">
                <SiYoutube className="w-full h-full" />
              </div>
      <div className="w-8 h-8 hover:bg-gray-900 hover:opacity-75 cursor-pointer">
                <SiPinterest className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
   </>
  );
};

export default HomePage;