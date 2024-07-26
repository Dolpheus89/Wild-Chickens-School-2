import { useLoaderData } from "react-router-dom";
import NavBar from "../components/NavBar";
import StudentsRow from "../components/StudentsRow";
import "../styles/Students.css";

const fakeData = [
  {
    imgSrc: "welcomeChicken.png",
    name: "Luce Stucru",
    birthdate: "01/08/1989",
    campus: "Remote",
    email: "lucestucru@wildchickensschool.com",
    grades: [
      { grade: 18, subject: "Math" },
      { grade: 17, subject: "Science" },
    ],
  },
];

export default function Students() {
  /* Étape 1 - Get the students */
  /* Étape 4 - Filtrez la liste et mettre a jour le nombre de résultats*/

  console.info(useLoaderData);
  return (
    <div id="students">
      <NavBar title={`Students`} page="students" />
      <label>
        Campus :
        <select name="campus" id="campus-filter">
          <option value="">---------</option>
          {/*Étape 3 - Remplissez le sélecteur de campus */}
        </select>
      </label>
      <span className="result">Nombre de résultats : {fakeData.length}</span>
      <table id="students-array">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Nom</th>
            <th>Date de Naissance</th>
            <th>Campus</th>
            <th>Email</th>
            <th>Moyenne</th>
          </tr>
        </thead>
        <tbody>
          {/* Étape 2 - Affichez tous les students  */}
          <StudentsRow data={fakeData[0]} />
        </tbody>
      </table>
    </div>
  );
}
