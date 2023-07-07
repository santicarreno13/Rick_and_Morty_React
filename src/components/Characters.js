import React from "react";

const Characters = ({ characters = [] }) => {
    return (
        <div className="row">
            {
                characters.map((item, index) => (
                    <div key={index} className="col mb-5">
                        <div className="card md-150px text-white bg-dark" style={{ minWidth: '150px' }}>
                            <img src={item.image} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <hr/>
                                <p>Especies: {item.species}</p>
                                <p>Ubicacion: {item.location.name}</p>
                                <p>Género: {item.gender}</p>
                                <p>Origen: {item.origin.name}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Characters;