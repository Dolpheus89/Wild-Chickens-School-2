import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "../components/NavBar";
import bestChicken from "../assets/bestchicken.png";
import "../styles/Instructions.css";

const instructionData = [
  {
    title: "🐔 Étape 1 - Get the students",
    content: `Votre première mission est d'obtenir les students depuis l'API.\nVous devez fetcher l'endpoint \n"https://wild-chicken-api.netlify.app/chickens".\nVous pouvez ajouter un loader à la route "/students" dans le fichier "src/main.jsx" (et utiliser useLoaderData dans la page Students).\nVous pouvez vérifier le résultat avec un console.info pour cette étape.`,
  },
  {
    title: "🐔 Étape 2 - Affichez tous les students",
    content:
      "Dans la page Students, mappez vos datas pour afficher la liste de tout les students avec le composant StudentsRow : passez les données via une props data.\n N'oubliez pas d'ajouter une key à chaque élément créé via votre map.",
  },
  {
    title: "🐔 Étape 3 - Remplissez le sélecteur de campus",
    content:
      "Le select dans Students ne contient qu'une option vide.\nRemplissez la liste avec une option par campus.",
  },
  {
    title: "🐔 Étape 4 - Filtrez la liste",
    content:
      "Lorsque le campus sélectionné change, filtrez la liste des students avant de les mapper.\nNotez que lorsque aucun campus n'est sélectionné, votre filtre doit garder la liste entière.",
  },
  {
    title: "🐔 Étape 5 - Créez une page complète",
    content: `Créez une page StudentDetails. Ajoutez une route pour afficher cette page avec le chemin "/students/:id".\nVous devez envelopper chaque étudiant dans "Students.jsx" avec un "<Link />" vers la page StudentDetails.\nDans la page, affichez le student et les details de votre choix.\nFetcher l'endpoint \n"https://wild-chicken-api.netlify.app/chickens/:id" pour l'API.\n `,
  },
];

export default function Instructions() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setStep(step - 1);
  };

  return (
    <div id="instructions">
      <NavBar title={`Instructions`} page="instructions" />
      <section>
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.5 }}
          >
            <h2>{instructionData[step].title}</h2>
            <div>
              {instructionData[step].content.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <div id="stepSelection">
              {step > 0 && <button onClick={handlePrevious}>Precedent</button>}
              {step < instructionData.length - 1 && (
                <button onClick={handleNext}>Suivant</button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
        <img src={bestChicken} alt="stamp best chicken" id="bestChickenStamp" />
      </section>
    </div>
  );
}
