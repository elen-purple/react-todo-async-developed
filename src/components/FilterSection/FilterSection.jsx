import { useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/filterSlice";
import { statusFilters } from "../../redux/constants";
import { Btn, List, Section } from "./FilterSectionStyled";

export const FilterSection = () => {
  const dispatch = useDispatch();
  return (
    <Section>
      <List>
        <li>
          <Btn onClick={() => dispatch(setStatusFilter(statusFilters.all))}>
            All
          </Btn>
        </li>
        <li>
          <Btn onClick={() => dispatch(setStatusFilter(statusFilters.active))}>
            Active
          </Btn>
        </li>
        <li>
          <Btn
            onClick={() => dispatch(setStatusFilter(statusFilters.completed))}
          >
            Completed
          </Btn>
        </li>
      </List>
    </Section>
  );
};
