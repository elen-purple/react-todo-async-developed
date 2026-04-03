import { AddSection } from "./components/AddSection/AddSection";
import { FilterSection } from "./components/FilterSection/FilterSection";
import { StatisticsSection } from "./components/StatisticsSection/StatisticsSection";
import { TasksList } from "./components/TasksList/TasksList";
import { GlobalStyle } from "../src/components/GlobalStyle/GlobalStyle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "./redux/operations";
import { getTasks } from "./redux/selectors";

function App() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getTasks);
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <FilterSection />
      <StatisticsSection />
      <AddSection />
      <TasksList />
    </>
  );
}

export default App;
