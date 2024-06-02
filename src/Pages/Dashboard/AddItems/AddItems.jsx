import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    // console.log(image_hosting_key);

    const onSubmit = async (data) => {
        // console.log(data);
        const imageFile = {image: data.image[0]}
        // console.log(imageFile);
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        })
        if(res.data.success){
            const menuItem = {
                name: data.name,
                category: data.category,
                price: data.price,
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes)
            if(menuRes.data.insertedId){
                reset()
                // show success popup
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
    }

    return (
        <div className="w-11/12 mx-auto">
            <SectionTitle heading={'add an item'} subHeading={'Whats New?'}></SectionTitle>
            <div className="card rounded-md max-w-screen-md mx-auto w-full shadow-2xl bg-base-200">
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Name<span className="text-xl text-[#ED1D24] font-bold">*</span></span>
                        </label>
                        <input type="text" placeholder="name" {...register("name", { required: true })} className="input input-bordered rounded-md" />
                        {errors.name && <span className="text-[#ED1D24]">Name field is required</span>}
                    </div>
                    <div className="flex justify-between gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category<span className="text-xl text-[#ED1D24] font-bold">*</span></span>
                            </label>
                            <select {...register("category", { required: true })} className="select select-bordered w-full">
                                <option value="" >Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                            {errors.category && <span className="text-[#ED1D24]" >Category field is required</span>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price<span className="text-xl text-[#ED1D24] font-bold">*</span></span>
                            </label>
                            <input type="number" placeholder="Price" {...register("price", { required: true })} className="input input-bordered  rounded-md" />
                            {errors.price && <span className="text-[#ED1D24]">Price field is required</span>}
                        </div>
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details<span className="text-xl text-[#ED1D24] font-bold">*</span></span>
                        </div>
                        <textarea className="textarea textarea-bordered h-24" {...register("recipe", { required: true })} placeholder="Bio"></textarea>
                        {errors.recipe && <span className="text-[#ED1D24]">Recipe field is required</span>}
                    </label>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image<span className="text-xl text-[#ED1D24] font-bold">*</span></span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                        {errors.image && <span className="text-[#ED1D24]">Image field is required</span>}
                    </div>
                    <div className="form-control mt-6 max-w-[400px] w-full mx-auto">
                        <input type="submit" value="Add Item" className="btn text-white  bg-[#D1A054]" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;
