
const ClassPageCard = ({ classpag }) => {
    const { name, image,
        availableSeats, instructorName,status,price} = classpag;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name : {name}</h2>
                <p>Instructor name : {instructorName}</p>
                <p>Available seats : {availableSeats}</p>
                <p>Price : {price}</p>
                <p>Status : {status}</p>


            </div>
        </div>
    );
};

export default ClassPageCard;