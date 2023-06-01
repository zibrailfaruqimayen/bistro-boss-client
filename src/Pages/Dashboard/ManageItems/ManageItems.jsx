import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ManageItems = () => {
  const [menu] = useMenu();
  return (
    <div className="w-full px-10">
      <SectionTitle
        subHeading="hurry up!"
        heading="manage all items"
      ></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="bg-[#D1A054]">#</th>
              <th className="bg-[#D1A054]">Item Image</th>
              <th className="bg-[#D1A054]">Item Name</th>
              <th className="bg-[#D1A054]">Price</th>
              <th className="bg-[#D1A054]">Update</th>
              <th className="bg-[#D1A054]">Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>

                <td>${item.price}</td>
                <td>
                  <button className="btn btn-ghost text-white text-lg  bg-[#D1A054] hover:bg-[#f8ac3b] ">
                    <FaRegEdit></FaRegEdit>
                  </button>
                </td>
                <td>
                  <button className="btn btn-ghost text-white bg-red-500 hover:bg-red-900">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
