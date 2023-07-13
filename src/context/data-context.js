import { useContext, createContext } from "react";
import { useState } from "react";

export const DataContext = createContext();

export function DataProvider({ children }) {
 
 const initialHabitDetailsState = {
    name: "",
    repeat: "",
    goal: "",
    timeofDay: "",
    startDate: "",
  };

  const [habit, setHabit] = useState(initialHabitDetailsState);

  const habitHandler = (event) => {
  };

  return (
    <DataContext.Provider
      value={{ habit, setHabit, habitHandler, initialHabitDetailsState }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);