import React, { useEffect, useState } from "react";
import "./filter.css";
import "./radio.css";
import "./select.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCharacters,
  setFilterValue,
} from "../../store/slices/charactersSlice/charactersSlice";
import { getAllLocations } from "../../store/locationSlice/locationSlice";
import { species } from "../../services/schemes/speciesScheme";

const Filter = () => {
  const dispatch = useDispatch();

  const [statusColor, setStatusColor] = useState({});

  const [alive, setAlive] = useState(false);
  const [dead, setDead] = useState(false);
  const [unknown, setUnknown] = useState(false);

  const handleColorStatusCharacter = () => {};

  const { filterValue } = useSelector(({ characters }) => characters);
  const handleFilterValue = (e) => {
    const textValue = e.target.value;
    dispatch(setFilterValue({ ...filterValue, name: textValue }));
  };

  const handleRadioChange = (e) => {
    const { name, checked, value } = e.target;
    dispatch(setFilterValue({ ...filterValue, status: value }));
    setAlive(value === "alive");
    setDead(value === "dead");
    setUnknown(value === "unknown");

    console.log({ value });
  };

  const handleSpeciesValue = (e) => {
    const speciesName = e.target.value;
    dispatch(setFilterValue({ ...filterValue, species: speciesName }));
  };

  useEffect(() => {
    dispatch(getAllLocations());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllCharacters(undefined, filterValue));
  }, [filterValue, dispatch]);

  const { locations } = useSelector(({ locations }) => locations);
  console.log({ locations, filterValue });

  return (
    <div className="input__container">
      <div className="search__container">
        <label htmlFor="search">
          <span className="icon-search"></span>
        </label>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Character Name"
          onChange={handleFilterValue}
        />
      </div>
      <div className="select__container">
        <label htmlFor="select" id="labelSelect">
          Species
        </label>
        <select onChange={handleSpeciesValue} name="select" id="select">
          <option>Species</option>
          {species.map((species) => (
            <option key={species.id} value={species.name}>
              {species.name}
            </option>
          ))}
        </select>
      </div>
      <div className="div__radio__input--container">
        <div className="label__container">
          <label htmlFor="Alive" className={`alive ${alive ? "aliveActive" : ""}`}>
            Alive
          </label>
          <label className={`dead ${dead ? "deadActive" :""}`} htmlFor="Dead">
            Dead
          </label>
          <label className={`unknown ${unknown ? "unknownActive" : ""}`} htmlFor="unknown">
            Unknown
          </label>
        </div>
        <div className="radio__input">
          <input
            onChange={handleRadioChange}
            type="radio"
            name="status"
            id="Alive"
            value={"alive"}
            className="input green"
          />

          <input
            onChange={handleRadioChange}
            type="radio"
            name="status"
            id="Dead"
            value={"dead"}
            className="input red"
          />

          <input
            onChange={handleRadioChange}
            type="radio"
            name="status"
            id="unknown"
            value={"unknown"}
            className="input gray"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
