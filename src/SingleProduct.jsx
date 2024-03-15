/* eslint-disable react/prop-types */
const SingleProduct = ({ product, handleCart }) => {
    console.log(handleCart);
    return (

        <div className='h-[500px] text-center flex flex-col gap-4 shadow-xl rounded-xl p-5'>
            <img className='w-[150px] h-[160px] mx-auto' src={product.image} alt="" />
            <h1 className='text-2xl font-bold'>{product.title.slice(0, 12)}</h1>
            <p className='w-[500px]'>{product.description.slice(0, 100)}</p>
            <h1 className="font-bold">${product.price}</h1>
            <button onClick={() => handleCart(product)} className='h-9 w-28 p-1 rounded-md bg-slate-400 mx-auto'>Add to cart</button>
        </div>

    );
};

export default SingleProduct;