import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";

import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();

  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgURL,
          };
          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("after posting new menu item", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="w-full">
      <SectionTitle
        subHeading="What's new?"
        heading="ADD AN ITEM"
      ></SectionTitle>
      <form className="px-12" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-6">
          <label className="label">
            <span className="label-text font-semibold">Recipe name*</span>
          </label>
          <input
            type="text"
            placeholder="Recipe name"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex w-full space-x-5 mb-6">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              className="select select-bordered"
              defaultValue="Category"
              {...register("category", { required: true })}
            >
              <option disabled>Category</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Dessert</option>
              <option>Desi</option>
              <option>Drinks</option>
            </select>
          </div>
          <div className="form-control w-full  ">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              {...register("price", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">Recipe Details*</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-40"
            placeholder="Recipe Details"
            {...register("recipe", { required: true })}
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs mb-8">
          <label className="label">
            <span className="label-text">Item Image</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <button className="btn border-0 bg-gradient-to-r from-[#835D23] to-[#B58130]">
          <input type="submit" value="Add Item" />
          <FaUtensils className="ml-2"></FaUtensils>
        </button>
      </form>
    </div>
  );
};

export default AddItem;
