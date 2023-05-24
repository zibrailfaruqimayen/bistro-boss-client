const FoodCard = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="rounded-lg" src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 rounded-xl text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-center">{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-b-4  border-0 mt-4 text-yellow-700 bg-base-200 border-yellow-700 hover:border-yellow-700 hover:bg-black hover:text-yellow-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
