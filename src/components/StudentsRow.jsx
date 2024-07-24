import { calculateAverage } from "../functions/averageGrade.js";
import PropTypes from "prop-types";

export default function StudentsRow({ data }) {
  const averageGrade = calculateAverage(data.grades);

  return (
    <tr>
      <td>
        <img src={data.imgSrc} alt={data.name} />
      </td>
      <td>{data.name}</td>
      <td>{data.birthdate}</td>
      <td>{data.campus}</td>
      <td>{data.email}</td>
      <td>{averageGrade.toFixed(2)}</td>
    </tr>
  );
}

StudentsRow.propTypes = {
  data: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    birthdate: PropTypes.string.isRequired,
    campus: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    grades: PropTypes.arrayOf(
      PropTypes.shape({
        grade: PropTypes.number.isRequired,
        subject: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};
