/* eslint-disable react/prop-types */

const ClassesCard = ({item}) => {
    console.log(item);
    const {name,image,activities,students}= item;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Name : {name}</h2>
    <p>Activities : {activities}</p>
    <p>Students : {students}</p>
  
  </div>
</div>
    );
};

export default ClassesCard;