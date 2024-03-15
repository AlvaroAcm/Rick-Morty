import react, { useEffect, useState } from "react";
import {
  getAllCharacters,
} from "../../store/slices/charactersSlice/charactersSlice";
import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import Card from "../Card/Card";
import { formattedDateDMY } from "../../services/commonFunctions/formattedDateDMY";
import Pagination from "../Pagination/Pagination";


const Home = () => {
  const dispatch = useDispatch();

  const { characters, info} = useSelector(
    ({ characters }) => characters
  );

  
  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);

  
  return (
    <div>
      <header></header>
      <div className="characters__container">
        {characters.results !== undefined &&
          characters.results.map((character) => {
            return (
              <Card
                key={character.id}
                name={character.name}
                image={character.image}
                status={character.status}
                species={character.species}
                gender={character.gender}
                location={character.location.name}
                origin={character.origin.name}
                url={character.episode[0]}
                createdAt={formattedDateDMY(character.created)}
              />
            );
          })}
      </div>
      <footer>{<Pagination
      totalPages={info.pages}
      
      />}</footer>
    </div>
  );
};

export default Home;
