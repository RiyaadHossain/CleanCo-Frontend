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

  const superNadminItems = (
    <>
      <li>
        <Link href={`/${role}/manage_admin`}>Manage Admin</Link>
      </li>
      <li>
        <Link href={`/${role}/manage_service`}>Manage Service</Link>
      </li>
      <li>
        <Link href={`/${role}/manage_content`}>Manage Content</Link>
      </li>
    </>
  );

  if (role === ENUM_USER_ROLE.customer) return userItems;

  return superNadminItems;
}
