import { useDispatch, useSelector } from "react-redux";
import { getFilters, getTasks } from "../../redux/selectors";
import { TasksItem } from "../TasksItem/TasksItem";
import { statusFilters } from "../../redux/constants";
import { Section } from "../FilterSection/FilterSectionStyled";
import { List } from "./TasksListStyled";
import { deleteTask, fetchTasks } from "../../redux/operations";
import { useEffect } from "react";

export const TasksList = () => {
  const tasks = useSelector(getTasks);
  const filters = useSelector(getFilters);
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
        {filters.status === statusFilters.all
          ? tasks.items.map(({ id, text, completed }) => (
              <TasksItem key={id} id={id} text={text} completed={completed} />
            ))
          : filters.status === statusFilters.active
            ? tasks.items
                .filter(({ completed }) => !completed)
                .map(({ id, text, completed }) => (
                  <TasksItem
                    key={id}
                    id={id}
                    text={text}
                    completed={completed}
                  />
                ))
            : filters.status === statusFilters.completed
              ? tasks.items
                  .filter(({ completed }) => completed)
                  .map(({ id, text, completed }) => (
                    <TasksItem
                      key={id}
                      id={id}
                      text={text}
                      completed={completed}
                    />
                  ))
              : tasks.items.map(({ id, text, completed }) => (
                  <TasksItem
                    key={id}
                    id={id}
                    text={text}
                    completed={completed}
                  />
                ))}
      </List>
    </Section>
  );
};
