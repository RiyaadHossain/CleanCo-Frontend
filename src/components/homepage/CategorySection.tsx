import { FaHome } from "react-icons/fa";
import "../../app/globals.css";
import CategoryCard from "../reuseable/CategoryCard";

export default function CategorySection() {
  const categories = [
    { id: 1, title: "Home Cleaning"},
    { id: 2, title: "Garden Cleaning"},
    { id: 3, title: "Office Cleaning"},
  ];

  return (
    <div className="section-padding">
      <div className="flex justify-center gap-5 items-center">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
          />
        ))}
      </div>
    </div>
  );
}
