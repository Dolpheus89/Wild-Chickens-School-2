import { useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/Instructions.css";

const instructionData = [
  {
    title: "🐔 Step 1 - Get the students",
    content:
      "Votre première mission est d'obtenir les students depuis l'API.\nVous devez fetcher l'endpoint \"https://wild-chicken-api.netlify.app/chickens\".\nVous pouvez ajouter un loader à la route /students dans le fichier src/main.jsx (et utiliser useLoaderData dans la page Students).\nVous pouvez vérifier le résultat avec un console.info pour cette étape.",
  },
  {
    title: "🐔 Étape 2 - Affichez tous les students",
    content: `Dans la page Students, mappez vos datas pour afficher la liste de tout les students. Vous pouvez utiliser le composant StudentsRow : passez les données via une prop data. N'oubliez pas d'ajouter une prop key à chaque élément créé via votre map.`,
  },
  {
    title: "🐔 Étape 3 - Obtenez les accessoires",
    content: "test 3",
  },
];

export default function Instructions() {
  const [step, setStep] = useState(0);

  return (
    <div id="instructions">
      <NavBar title={`Instructions`} page="instructions" />
      <section>
        <h2>{instructionData[step].title}</h2>
        <div>
          {instructionData[step].content.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <div id="stepSelection">
          {step > 0 && (
            <button onClick={() => setStep(step - 1)}>Precedent</button>
          )}
          {step < instructionData.length - 1 && (
            <button onClick={() => setStep(step + 1)}>Suivant</button>
          )}
        </div>
      </section>
    </div>
  );
}

// Cupcake Union
// 🍪 Step 1 - Get the cupcakes
// You started a json server when running npm run dev. You can check the API is available at localhost:3310/api/.

// Your first mission is to get the cupcakes from the API.

// You should fetch the localhost:3310/api/cupcakes endpoint. You can add a loader to the /cupcakes route in the client/src/main.jsx file (and useLoaderData in CupcakeList page).

// You can check the result with a console.info for this step.

// 🧁 Step 2 - Show all the cupcakes
// In the CupcakeList page, map you cupcakes to display the list using JSX. You can use the Cupcake component: pass the cupcake data through a prop data

// Remember to add a key prop to each element created through your map. You can use the cupcake id here ;)

// 🍪 Step 3 - Get the accessories
// For this step, get the accessory list from the API. This time you don't need to fetch the data in the loader before rendering. You can do the fetch using an effect.

// In the CupcakeList page, fetch the localhost:3310/api/accessories endpoint.

// Once again, you can check the result with a console.info.

// Hint
// 🧁 Step 4 - Fill the accessories selector
// The select in CupcakeList only contains an empty option.

// Fill the list with one option per accessory.

// Hint
// 🧁 Step 5 - Filter the list
// When the selected accessory changes, filter the cupcake list before mapping.

// Note that when no accessories are selected, your filter should keep the whole list.

// Hint
// ⭐ Step 6 - Create a whole page
// Create a CupcakeDetails page. Add a route to display this page with the path /cupcakes/:id.

// You should wrap each cupcake in CupcakeList with a <Link /> towards the CupcakeDetails page.

// In the page, display the cupcake (you will have to load it before).
