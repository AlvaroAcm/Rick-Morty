import react, { useEffect, useState } from "react";
import {
  getAllCharacters,
  getAllPages,
} from "../../store/slices/charactersSlice/charactersSlice";
import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import Card from "../Card/Card";
import { formattedDateDMY } from "../../services/commonFunctions/formattedDateDMY";
import Pagination from "../Pagination/Pagination";

const Home = () => {
  const[nextPage, setNextPage] = useState(1)
  const dispatch = useDispatch();

  const handleNextPage = ()=>{
    setNextPage(nextPage + 1)
  }

  useEffect(() => {
    dispatch(getAllCharacters(nextPage));
    dispatch(getAllPages());
  }, [dispatch, nextPage]);

  const { characters, info } = useSelector(({ characters }) => characters);

 const resultString = info && info.next

 const numberPage = resultString && resultString[resultString.length - 1]

 console.log({numberPage});
  

  return (
    <div>
      <header></header>
      <div className="characters__container">
        {characters.results !== undefined &&
          characters.results.map((character) => {
            return (
              <Card
                key={character.name}
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
          <footer>
            <Pagination
            currentPage={nextPage}
            nextPage={handleNextPage}/>
          </footer>
    </div>
  );
};

export default Home;
