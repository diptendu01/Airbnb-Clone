import React from "react";
import rooms from "../images/rooms.png";
import room from "../images/room.png";
import { Link } from "react-router-dom";

interface hotelProp {
  hotels: any;
}

const Home = (props: hotelProp) => {
  return (
    <div className="grid grid-cols-4">
      {props.hotels.map((data: any) => {
        return (
          <>
            <Link to="/details" state={{ data: data }}>
              <div className="max-w-sm rounded-t-xl overflow-hidden w-72 h-11/12 ml-6 mt-7">
                <img
                  className="w-72 h-72 rounded-xl"
                  src={data.images[0]}
                  alt="Guest Room"
                />
                <div className="py-1">
                  <div className="font-semibold text-lg">{data.address}</div>
                  <p className="text-gray-700 text-sm">{data.name}</p>
                  <h1 className="text-grey-500 text-sm">{data.type}</h1>
                  <h1 className="font-semibold">€{data.price.rate}</h1>
                </div>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default Home;
