import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <div className="text-center">
          <button className="btn btn-outline border-b-4  border-0 mt-4   hover:text-white">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MenuCategory;
