import { useEffect, useState } from "react";

const InstructorPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    return (
  <div className="">

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Image </th>
                    <th>Class Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((item, index) => <tr
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
                      
                        <td >${item.email}
                        </td>

                    </tr>)
                }


            </tbody>
        </table>
    </div>
  </div>
    );
};

export default InstructorPage;