"use client";
/* eslint-disable @next/next/no-img-element */
import Reviews from "@/components/ui/Reviews";
import { useGetServiceQuery } from "@/redux/api/serviceApi";
import React from "react";

export default function ServiceDetails({ params }: { params: { id: string } }) {
  const id = params.id;
  const { data } = useGetServiceQuery(id);

  const serviceData = data?.data;


  return (
    <div className=" px-8 py-5">
      <div>
        <img
          src="https://images.unsplash.com/photo-1550963295-019d8a8a61c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsZWFuaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt="Shoes"
          className="h-28 w-full object-cover rounded-md"
        />
      </div>
      <div className="mt-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold">{serviceData?.title}</h2>
          <span className="badge badge-primary badge-sm">
            {serviceData?.category?.title}
          </span>
        </div>
        <p>
          <span className="font-semibold">Price:</span> {serviceData?.price}tk
        </p>
        <p>{serviceData?.description}</p>
      </div>
      <hr className="my-4" />
      <div className="mt-4">
        <Reviews serviceId={id} />
      </div>
    </div>
  );
}
