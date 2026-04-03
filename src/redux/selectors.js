import { createSelector } from "reselect";
import { statusFilters } from "./constants";

export const getTasks = (state) => state.tasks;

export const getFilters = (state) => state.filters;

export const getFilteredTasks = createSelector(
  [getTasks, getFilters],
  (tasks, filters) => {
    if (filters.status === statusFilters.all) {
      return tasks.items;
    } else if (filters.status === statusFilters.active) {
      return tasks.items.filter(({ completed }) => !completed);
    } else if (filters.status === statusFilters.completed) {
      return tasks.items.filter(({ completed }) => completed);
    } else {
      return tasks.items;
    }
  },
);

export const getAllTasks = createSelector(
  [getTasks],
  (tasks) => tasks.items.length,
);

export const getCompletedTasks = createSelector(
  [getTasks],
  (tasks) => tasks.items.filter((item) => item.completed).length,
);
