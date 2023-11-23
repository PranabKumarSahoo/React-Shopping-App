import { Link } from "react-router-dom";

export function ShoppingError() {
    return (
        <div className="container-fluid d-flex flex-column text-center gap-3" style={{marginTop: "200px"}}>
            <h2>Invalid UserName & Password!!</h2>
            <div>
                <Link to="/login" className="btn">Try Again</Link>
            </div>
        </div>
    )
}
