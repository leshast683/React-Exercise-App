
import { useState } from 'react';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';
import './App.css';

const exercises = [
  { name: 'Push-ups', type: 'repetition' },
  { name: 'Plank', type: 'duration' },
  { name: 'Squats', type: 'repetition' },
  { name: 'Running', type: 'duration' }
];

export default function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const renderExercise = () => {
    if (!selectedExercise) return null;
    
    return selectedExercise.type === 'repetition' ? (
      <RepetitionExercise name={selectedExercise.name} />
    ) : (
      <DurationExercise name={selectedExercise.name} />
    );
  };

  return (
    <main>
      {!selectedExercise ? (
        <div className="exercise-menu">
          <h1>Exercise Menu</h1>
          <div className="exercise-buttons">
            {exercises.map((exercise) => (
              <button 
                key={exercise.name}
                onClick={() => setSelectedExercise(exercise)}
              >
                {exercise.name} ({exercise.type})
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          {renderExercise()}
          <button className="back-button" onClick={() => setSelectedExercise(null)}>
            Back to Menu
          </button>
        </div>
      )}
    </main>
  );
}
