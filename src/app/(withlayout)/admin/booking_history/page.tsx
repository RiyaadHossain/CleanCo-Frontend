"use client";
import Table from "@/components/ui/Table";
import {
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
} from "@/redux/api/categoryApi";
import Link from "next/link";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export default function BookingHistory() {
  const rowItems = ["", "Title", "CreatedAt", "Actions"];

  const { data } = useGetCategoriesQuery({ page: 1, limit: 100 });
  const [deleteCategory, { isLoading, isSuccess, isError }] =
    useDeleteCategoryMutation();

  const handleDelete = (id: string) => {
    deleteCategory(id);
  };

  useEffect(() => {
    if (isSuccess)
      toast.success("Category Delete succesfully", { id: "success" });
    if (isLoading)
      toast.loading("Processing...", { id: "process", duration: 800 });
    if (isError) toast.error("Failed to delete", { id: "err" });
  }, [isSuccess, isError, isLoading]);

  const tableData = data?.data?.map((data: any, i: number) => (
    <tr key={data._id} className="hover">
      <th>{i + 1}</th>
      <td>{data.title}</td>
      <td>{data.createdAt}</td>
      <td>
        <td>
          <div className="flex gap-3">
            <Link href={`manage_category/edit/${data._id}`}>
              <button className="btn btn-sm">
                <AiFillEdit className="text-blue-500 text-2xl" />
              </button>
            </Link>
            <button
              onClick={() => handleDelete(data._id)}
              className="btn btn-sm"
            >
              <AiFillDelete className="text-red-600 text-2xl" />
            </button>
          </div>
        </td>
      </td>
    </tr>
  ));

  return (
    <div>
      <h2 className="text-3xl font-bold">Booking History Page</h2>
      <div className="mt-12">
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <Table rowItems={rowItems} tableData={tableData} />
      </div>
    </div>
  );
}
