import PropTypes from 'prop-types';

const FoodCard = ({ item }) => {
    const { name, price, recipe, image } = item;

    return (
        <div className="card rounded-none mx-auto shadow-xl bg-[#F3F3F3]">
            <div className="h-64 overflow-hidden relative">
                <img className="object-cover w-full h-full" src={image} alt={name} />
                <p className="text-lg font-semibold text-white absolute top-3 right-3 py-1 w-16 text-center bg-[#111827] ">${price}</p>
            </div>
            <div className="card-body text-center p-4">
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-gray-700">{recipe}</p>
                <div className="card-actions justify-center mt-4">
                    <button className="w-24 pb-1 rounded-lg shadow-none text-[#BB8506] border-b-2 border-[#BB8506]">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        recipe: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default FoodCard;
