import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import useAuth from '../../../Hooks/useAuth';


const ManageClass = () => {
    const {user}= useAuth();
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/addclass?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setClasses(data);
            });
    }, [])


    return (
        <div className="w-full">
        <Helmet>
            <title>Sports Academic School | manage class</title>
        </Helmet>

        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image </th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        classes.map((item, index) => <tr
                            key={item._id}
                        >
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td className="">${item.price}</td>
                            <td >Pending</td>
                            <td><button className='btn btn-sm btn-active btn-ghost'>Feedback</button></td>
                            <td><button className='btn btn-sm btn-active btn-ghost'>Update</button></td>
                            

                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ManageClass;