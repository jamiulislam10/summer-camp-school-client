
const ClassesCard = ({ item }) => {
  console.log(item);
  const { name, image, activities, students } = item;



  return (


    <div className="">
      <div className="">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img src={image} className="object-cover w-full h-64" alt="" />
          <div className="p-5 border border-t-0">

            <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Name : {name}
            </a>
            <p className="mb-2 text-gray-700">
              Activities : {activities}
            </p>
            <p className="mb-2 text-gray-700">
              Students :  {students}
            </p>

          </div>
        </div>


      </div>
    </div>



  );
};

export default ClassesCard;