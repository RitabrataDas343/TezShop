import React from "react";

export default function Title({ name, title }) {
    return (
        <div>
            <div className="row">
                <div className="col-10 mx-auto text-title text-center my-2">
                    <div className="text-capitalize font-weight-bold">
                        {name} <strong className="text-blue">{title}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
