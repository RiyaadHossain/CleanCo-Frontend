import Table from "@/components/ui/Table";
import Link from "next/link";
import React from "react";

export default function ManageContent() {
  const rowItems = ["", "Content", "status", "Action"];
  const tableData = [
    { id: 1, name: "Someone", job: "Software Developer", color: "BlueSky" },
    { id: 2, name: "Someone", job: "Software Developer", color: "BlueSky" }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Manage Content </h2>
      <Table rowItems={rowItems} tableData={tableData} />
    </div>
  );
}
