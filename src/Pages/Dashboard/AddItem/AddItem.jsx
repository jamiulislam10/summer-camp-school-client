import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";

import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddItem = () => {
    const {user}= useAuth()
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name,InsName, price,email, available} = data;
                const newItem = {name, price: parseFloat(price),InsName,email,available, image:imgURL}
                console.log(newItem)
                axiosSecure.post('/addclass', newItem)
                .then(data => {
                    console.log('after posting new menu item', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })

    };
    
    return (
        <div className="w-full px-10">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full mb-4">
                <label className="label">
                    <span className="label-text font-semibold">Class Name*</span>
                </label>
                <input type="text" placeholder="Class name"
                    {...register("name", { required: true, maxLength: 120 })}
                    className="input input-bordered w-full " />
            </div>
            <div className="form-control w-full mb-4">
                <label className="label">
                    <span className="label-text font-semibold">Instructor Name*</span>
                    {/* <input defaultValue="test" {...register("example")} /> */}
                </label>
                <input type="text" value={user?.displayName} placeholder="Instructor name"
                    {...register("InsName", { required: true, maxLength: 120 })}
                    className="input input-bordered w-full " />
            </div>
            <div className="form-control w-full mb-4">
                <label className="label">
                    <span className="label-text font-semibold">Instructor Email*</span>
                </label>
                <input type="text"  value={user?.email} placeholder="Instructor email"
                    {...register("email", { required: true, maxLength: 120 })}
                    className="input input-bordered w-full " />
            </div>
            <div className="flex my-4">
    
                <div className="form-control w-full ml-4">
                    <label className="label">
                        <span className="label-text font-semibold">Available seat*</span>
                    </label>
                    <input type="number" {...register("available", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                </div>
            </div>
            <div className="flex my-4">
    
                <div className="form-control w-full ml-4">
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>
                    </label>
                    <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                </div>
            </div>

            <div className="form-control w-full my-4">
                <label className="label">
                    <span className="label-text"> Image*</span>
                </label>
                <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
            </div>
            <input className="btn btn-sm mt-4" type="submit" value="Add" />
        </form>
    </div>
    );
};

export default AddItem;