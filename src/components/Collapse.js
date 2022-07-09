import React, {useState} from "react";

export default function Collapse({ title, type, description, housing }) {
  const [open, setOpen] = useState(false);
    return (
    <div className="collapse">
      <div
        className="collapse-header"
        onClick={() => setOpen(!open)}
      >
        <div className="collapse-header-title">{title}</div>
        <i
          className={`fa-solid ${
            !open ? "fa-angle-down" : "fa-angle-up"
          } collapse-header-icon`}
        ></i>
      </div>
      {open ? (
        <div className="collapse-body">
          <>
            {type === "Description" ? (
              <p className="collapse-body-description">{housing !== undefined ? housing.description : description}</p>
            ) : type === "Equipements" ? (
              <ul className="collapse-body-menu">
                {housing.equipments.map((item, key) => {
                  return (
                    <li key={key} className="collapse-body-menu-item">
                      {item}
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </>
        </div>
      ) : null}
    </div>
  );
}
