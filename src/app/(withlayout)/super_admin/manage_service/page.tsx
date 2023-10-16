"use client";
import Table from "@/components/ui/Table";
import { useGetServicesQuery } from "@/redux/api/serviceApi";
import Link from "next/link";
import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export default function ManageService() {
  const rowItems = ["", "Name", "Job", "Favorite Color"];

  const { data } = useGetServicesQuery({ page: 1, limit: 100 });

  const onDeleteHandle = () => {};

  const tableData = data?.data?.map((data: any, i: number) => (
    <tr key={data.id} className="hover">
      <th>{i + 1}</th>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.age}</td>
      <td>{data.contactNo}</td>
      <td>
        <div>
          <button>
            <AiFillDelete className="text-red-600" />
          </button>
          <button>
            <AiFillDelete />
          </button>
        </div>
      </td>
    </tr>
  ));

  return (
    <div>
      <h2 className="text-3xl font-bold">Manage Service Page</h2>
      <div className="mt-12">
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <Link href="manage_service/create">
            <button className="btn btn-primary">Create Service</button>
          </Link>
        </div>
        <Table rowItems={rowItems} tableData={tableData} />
      </div>
    </div>
  );
}
