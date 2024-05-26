import PropTypes from 'prop-types'; 

const MenuItem = ({item}) => {
    const {name, price, recipe, image} = item
    return (
        <div className='flex flex-col md:flex-row space-x-4 space-y-4'>
            <img 
            style={{borderRadius: "0px 200px 200px 200px"}} 
            className='w-[120px] h-[110px] object-cover object-right mx-auto  ' src={image} alt="" />
            <div>
                <h3 className='uppercase text-xl'>{name} ------------</h3>
                <p>{recipe}</p>
            </div> 
            <p className='text-yellow-600 text-xl text-center '>${price}</p>
        </div>
    );
};

export default MenuItem;

MenuItem.propTypes = {
    item: PropTypes.object,
}