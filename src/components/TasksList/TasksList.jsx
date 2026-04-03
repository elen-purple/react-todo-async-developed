import { useDispatch, useSelector } from "react-redux";
import { TasksItem } from "../TasksItem/TasksItem";
import { Section } from "../FilterSection/FilterSectionStyled";
import { List } from "./TasksListStyled";
import { deleteTask, fetchTasks } from "../../redux/operations";
import { useEffect } from "react";
import { getFilteredTasks } from "../../redux/selectors";

export const TasksList = () => {
  const filteredTasks = useSelector(getFilteredTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Section>
      <List
        onClick={(e) => {
          if (e.target.dataset.action === "delete") {
            dispatch(deleteTask(e.target.closest("li").id));
          }
        }}
      >
        {filteredTasks.map(({ id, text, completed }) => (
          <TasksItem key={id} id={id} text={text} completed={completed} />
        ))}
      </List>
    </Section>
  );
};
