import React from "react";
import data from "../data/sidemenu.json";
import { CommonContext } from "./context/GlobalContext";
import caret from "../assets/Icons/chevron-right.svg";
import folder from "../assets/Icons/folder.svg";
import word from "../assets/Icons/word.svg";
import info from "../assets/Icons/exclamation-circle-solid.svg";
import ham from "../assets/Icons/filter-bars.svg";
import arrow from "../assets/Icons/arrow.svg";

const Sidebar = () => {
  const { accordionId, setAccordionId, accordionSubId, setAccordionSubId } =
    React.useContext(CommonContext);
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <>
      {openMenu ? (
        <div className="sidemenu">
          <div className="toggle">
            <p className="heading">Transaction Contents</p>
            <img src={arrow} alt="toggle" onClick={() => setOpenMenu(false)} />
          </div>
          <div className="values">
            <div>
              <p>12</p>
              <span>Stages</span>
            </div>
            <div>
              <p>23</p>
              <span>Subfolder</span>
            </div>
            <div>
              <p>1235</p>
              <span>Document</span>
            </div>
            <img src={ham} alt="ham" />
          </div>
          <p className="filter-by">Filter by Client/ matter Name</p>
          {data.map((bar) => (
            <div key={bar.id}>
              <div className="menu-outer">
                <div
                  className="menu-item"
                  onClick={() =>
                    setAccordionId(accordionId === bar.id ? null : bar.id)
                  }
                >
                  <span className={accordionId === bar.id ? "active" : ""}>
                    <img src={caret} alt="expand icon" />
                  </span>
                  <img src={folder} alt="folder icon" />
                  <p>{bar.name}</p>
                </div>
                <img src={info} alt="info icon" />
              </div>
              {bar.menu.map((el) => (
                <div key={el.id}>
                  {accordionId === bar.id && (
                    <>
                      {el.menu?.length > 0 ? (
                        <div className="menu-outer pl-3">
                          <div
                            className="menu-item"
                            onClick={() =>
                              setAccordionSubId(
                                accordionSubId === el.id ? null : el.id
                              )
                            }
                          >
                            <span
                              className={
                                accordionSubId === el.id ? "active" : ""
                              }
                            >
                              <img src={caret} alt="expand icon" />
                            </span>
                            <img src={folder} alt="folder icon" />
                            <p>{el.name}</p>
                          </div>
                          <img src={info} alt="info icon" />
                        </div>
                      ) : (
                        <div className="menu-outer">
                          <div className="menu-item">
                            <img
                              className="word-img"
                              src={word}
                              alt="word icon"
                            />
                            <p>{el.name}</p>
                          </div>
                          <img src={info} alt="info icon" />
                        </div>
                      )}
                      {el.menu?.map((la) => (
                        <div key={la.id}>
                          {accordionSubId === el.id && (
                            <div className="menu-outer">
                              <div className="menu-item">
                                <img
                                  className="word-img"
                                  src={word}
                                  alt="word icon"
                                />

                                <p>{la.name}</p>
                              </div>
                              <img src={info} alt="info icon" />
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
      ) : (
        <img
          src={arrow}
          alt="toggle"
          className="toggle-img"
          onClick={() => setOpenMenu(true)}
        />
      )}
    </>
  );
};

export default Sidebar;
