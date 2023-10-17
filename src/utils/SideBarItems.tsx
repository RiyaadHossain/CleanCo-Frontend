"use client";
import { ENUM_USER_ROLE } from "@/enums/common";
import Link from "next/link";

export default function SideBarItems({ role }: { role: string }) {
  const userItems = (
    <>
      <li>
        <a>My Services</a>
      </li>
      <li>
        <a>Booking History</a>
      </li>
    </>
  );

  const superAdminItems = (
    <>
      <li>
        <Link href={`/${role}/manage_admin`}>Manage Admin</Link>
      </li>
      <li>
        <Link href={`/${role}/manage_service`}>Manage Service</Link>
      </li>
      <li>
        <Link href={`/${role}/manage_category`}>Manage Category</Link>
      </li>
      <li>
        <Link href={`/${role}/booking_history`}>Booking History</Link>
      </li>
    </>
  );

  const adminItems = (
    <>
      <li>
        <Link href={`/${role}/manage_service`}>Manage Service</Link>
      </li>
      <li>
        <Link href={`/${role}/manage_category`}>Manage Category</Link>
      </li>
      <li>
        <Link href={`/${role}/booking_history`}>Booking History</Link>
      </li>
    </>
  );

  if (role === ENUM_USER_ROLE.super_admin) return superAdminItems;

  if (role === ENUM_USER_ROLE.admin) return adminItems;

  return userItems;
}
