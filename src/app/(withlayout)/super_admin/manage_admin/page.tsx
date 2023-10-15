import Table from "@/components/ui/Table";
import Link from "next/link";
import React from "react";

export default function ManageAdmin() {
  const rowItems = ["", "Name", "email", "Favorite Color"];
  const tableData = [
    { id: 1, name: "Someone", job: "Software Developer", color: "BlueSky" },
    { id: 2, name: "Someone", job: "Software Developer", color: "BlueSky" },
    { id: 3, name: "Someone", job: "Software Developer", color: "BlueSky" },
    { id: 4, name: "Someone", job: "Software Developer", color: "BlueSky" },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold">Manage Admin Page</h2>
      <div className="mt-12">
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <Link href="manage_admin/create">
            <button className="btn btn-primary">Create Admin</button>
          </Link>
        </div>
        <Table rowItems={rowItems} tableData={tableData} />
      </div>
    </div>
  );
}
