import React from "react";
import { ServiceDetails } from "./PortfolioData";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <section className="w-full h-auto">
      <h1 className="text-center text-4xl my-4">Services</h1>
      <div className="grid place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {ServiceDetails.map((service) => (
          <div className="w-[320px] h-[410px] border-red-500 border-4 rounded-xl ">
            <img
              src={service.photoUrl}
              alt={service.serviceTitle}
              className="h-[200px] object-cover rounded-t-lg w-full"
            />
            <h1 className=" font-semibold text-2xl my-1 ml-2">
              {service.serviceTitle}
            </h1>
            <p className="font-medium text-sm ml-2">
              {service.serviceDescription}
            </p>
            <button className="border-4 border-stone-600 rounded-full  bg-slate-400 m-1 px-1 py-0.5">
              <NavLink to={service.navigate} >{service.navigate}</NavLink>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
