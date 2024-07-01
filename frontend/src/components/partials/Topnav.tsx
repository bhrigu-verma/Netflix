import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { SignInButton } from "@clerk/clerk-react";
import { SignOutButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpeg";
import Profile from "./Profile";
const Topnav = () => {
    const [query, setquery] = useState("");
    const [searches, setsearches] = useState([]);
    const GetSerches = async () => {
        try {
            const { data } = await axios.get(`/search/multi?query=${query}`);
            setsearches(data.results);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    useEffect(() => {
        GetSerches();
    }, [query]);

    return (
        <div className="w-[76%] h-[12vh] relative flex mx-auto  items-center">
            
            <i className="text-zinc-400 text-3xl ri-search-line"></i>
            <input
                onChange={(e) => setquery(e.target.value)}
                value={query}
                className="w-[50%]  text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
                type="text"
                placeholder="search anything"
            />
            {query.length > 0 && (
                <i
                    onClick={() => setquery("")}
                    className=" text-zinc-400 text-3xl ri-close-fill right-0"
                ></i>
            )}
              <Profile />
              {/* <SignInButton>
        <button className="text-white w-25vh font-bold bg-purple-500 rounded-lg">Sign in with Clerk</button>
      </SignInButton> */}
              <SignOutButton ><button className="text-zinc-300 w-25vh font-bold bg-purple-500 rounded-lg"> Sign Out</button></SignOutButton>
            <div className="z-[100] text-[16px] absolute w-[60%] max-h-[50vh] bg-zinc-700 top-[100%] left-[5%] overflow-auto">
                {searches.map((s, i) => (
                    <Link
                        to={`/${s.media_type}/details/${s.id}`}
                        key={i}
                        className="hover:text-black hover:bg-zinc-600 duration-300 font-semibold text-zinc-200 w-[100%] p-10 flex justify-start items-center border-b-[.5px] border-zinc-100"
                    >
                        <img
                            className="w-[15vh] h-[12vh] object-cover rounded mr-5 shadow-lg "
                            src={
                                s.backdrop_path || s.profile_path
                                    ? `https://image.tmdb.org/t/p/original/${
                                          s.backdrop_path || s.profile_path
                                      }`
                                    : noimage
                            }
                            alt=""
                        />
                        <div className="flex flex-col">
                        <span>
                            {s.name ||
                                s.title ||
                                s.original_name ||
                                s.original_title}
                        </span>
                        <div className='text-[10px] overflow-hidden h-[12px]'>{s.overview }</div>
                        <div className='text-[10px] overflow-hidden h-[12px]'>{s.release_date}</div>
                        </div>
                        </Link>
                ))}
            </div>
        </div>
    );
};

export default Topnav;
