import React from "react";

const Characters = ({ characters = [] }) => {
    return (
        <div className="row">
            {
                characters.map((item, index) => (
                    <div key={index} className="col mb-5">
                        <div className="card md-150px" style={{ minWidth: '150px' }}>
                            <img src={item.image} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <hr/>
                                <p>Especies: {item.species}</p>
                                <p>Ubicacion: {item.location.name}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Characters;