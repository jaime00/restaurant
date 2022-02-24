import { Link } from 'wouter'

const Dish = ({ id, name, description, created_at }) => {
    return (
        <>
            <Link to={`/dish/${id}`}>
                <div className="card mx-2 cursor-pointer" style={{ width: "18rem", cursor: "pointer" }}>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{created_at}</h6>
                        <p className="card-text">{description}.</p>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Dish;