import NavBar from "../components/NavBar";
import StudentsRow from "../components/StudentsRow";
import "../styles/Students.css";

const fakeData = {
  imgSrc: "welcomeChicken.png",
  name: "Luce Stucru",
  birthdate: "01/08/1989",
  campus: "Remote",
  email: "lucestucru@wildchickensschool.com",
  grades: [
    { grade: 18, subject: "Math" },
    { grade: 17, subject: "Science" },
  ],
};

export default function Students() {
  return (
    <div id="students">
      <NavBar title={`Students`} page="students" />
      <label id="labelAnchor">
        Campus :
        <select name="campus" id="campus-filter">
          <option value="">---------</option>
          {/* */}
        </select>
      </label>
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
          {/* */}
          <StudentsRow data={fakeData} />
          <StudentsRow data={fakeData} />
          <StudentsRow data={fakeData} />
          <StudentsRow data={fakeData} />
          <StudentsRow data={fakeData} />
          <StudentsRow data={fakeData} />
          <StudentsRow data={fakeData} />
          <StudentsRow data={fakeData} />
          <StudentsRow data={fakeData} />
          <StudentsRow data={fakeData} />
          <StudentsRow data={fakeData} />
          <StudentsRow data={fakeData} />
          <StudentsRow data={fakeData} />
        </tbody>
      </table>
    </div>
  );
}
