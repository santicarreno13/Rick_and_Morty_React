import React from "react";

const Pagination = ({ prev, next, onPrevious, onNext }) => {

    const handelPrevious = () => {
        onPrevious();
    }
    const handelNext = () => {
        onNext();
    }

    return (
        <div className="my-5">
            <ul className="pagination justify-content-center">
                {
                    prev ?
                        <li className="page-item">
                            <button className="btn btn-info" onClick={handelPrevious}>Anterior</button>
                        </li>
                        :
                        null
                }
                {
                    next ?
                        <li className="page-item">
                            <button className="btn btn-success" onClick={handelNext}>Siguiente</button>
                        </li>
                        :
                        null
                }

            </ul>
        </div>
    );
}

export default Pagination;