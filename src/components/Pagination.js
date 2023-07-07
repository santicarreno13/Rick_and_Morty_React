import React from "react";

const Pagination = ({  }) => {
    return (
        <div>
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <button className="page-link">Anterior</button>
                </li>
                <li className="page-item">
                    <button className="page-link">Siguiente</button>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;