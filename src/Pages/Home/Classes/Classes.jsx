import { useEffect, useState } from "react";
import ClassesCard from "./ClassesCard";

const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('https://summer-camp-school-server-snowy.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {
            classes.map(item=> <ClassesCard
            key={item._id}
            item={item}
            ></ClassesCard>)
          }
        </div>
    );
};

export default Classes;