import { FaHome } from "react-icons/fa";
import CategoryCard from "../reuseable/CategoryCard";

export default function CategorySection() {
  const categories = [
    { id: 1, title: "Home Cleaning" },
    { id: 2, title: "Garden Cleaning" },
    { id: 3, title: "Office Cleaning" },
    { id: 3, title: "Office Cleaning" },
  ];

  return (
    <div className="section-padding">
      <div className="card_div">
        {categories.map((category) => (
          <CategoryCard key={category.id} title={category.title} />
        ))}
      </div>
    </div>
  );
}
