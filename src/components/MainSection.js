import React from "react";
import { CommonContext } from "./context/GlobalContext";
import caret from "../assets/Icons/chevron-right.svg";
import data from "../data/sidemenu.json";

const MainSection = () => {
  const { accordionId, setAccordionId, accordionSubId, setAccordionSubId } =
    React.useContext(CommonContext);

  return (
    <div className="main-section">
      {data.map((bar) => (
        <div key={bar.id}>
          <div className="card-item">
            <span
              onClick={() =>
                setAccordionId(accordionId === bar.id ? null : bar.id)
              }
              className={accordionId === bar.id ? "active" : ""}
            >
              <img src={caret} alt="expand icon" />
            </span>
            <p>{bar.id}</p>
            <p>Asama/ phase</p>
            <button>Completed</button>
            <p>-</p>
            <p className="desc">Goksu Safi Avukarthik</p>
            <p>11.12.2022</p>
          </div>
          {bar.menu.map((el) => (
            <div key={el.id}>
              {accordionId === bar.id && (
                <>
                  {el.menu?.length > 0 ? (
                    <div className="card-item pl-3">
                      <span
                        onClick={() =>
                          setAccordionSubId(
                            accordionSubId === el.id ? null : el.id
                          )
                        }
                        className={accordionSubId === el.id ? "active" : ""}
                      >
                        <img className="pl-3" src={caret} alt="expand icon" />
                      </span>
                      <p>{el.id}</p>
                    </div>
                  ) : (
                    <div className="card-item">
                      <p>{el.id}</p>
                    </div>
                  )}
                  {el.menu?.map((la) => (
                    <div key={la.id}>
                      {accordionSubId === el.id && (
                        <div>
                          <div className="card-item">
                            <p>{la.id}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MainSection;
