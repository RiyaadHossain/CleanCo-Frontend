"use client";
import React from "react";
import ServiceCard from "../reuseable/ServiceCard";
import { useGetServicesQuery } from "@/redux/api/serviceApi";

export default function UpcomingService() {
  const { data } = useGetServicesQuery({
    page: 1,
    limit: 100,
    status: "upcoming",
  });

  return (
    <div className="section-padding">
      <h2 className="section-heading">Upcomming Services</h2>
      <div className="card_div">
        {data?.data?.map((data: any) => (
          <ServiceCard key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
}
