import { useEffect, useState } from "react";
import ClassPageCard from "./ClassPageCard";

const ClassesPage = () => {
    const [classpage, setClasspage] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classpage')
            .then(res => res.json())
            .then(data => setClasspage(data))
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mb-4">
        {
         classpage.map(classpag => <ClassPageCard
         key={classpag._id}
         classpag={classpag}
         ></ClassPageCard>)
        }
      </div>
    );
};

export default ClassesPage;