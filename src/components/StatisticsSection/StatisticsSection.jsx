import { useSelector } from "react-redux";
import { Section } from "../FilterSection/FilterSectionStyled";
import { Span, Text } from "./StatisticsSectionStyled";
import { getAllTasks } from "../../redux/selectors";
import { getCompletedTasks } from "../../redux/selectors";

export const StatisticsSection = () => {
  const allTasks = useSelector(getAllTasks);
  const completedTasks = useSelector(getCompletedTasks);
  return (
    <Section>
      <Text>
        All: <Span>{allTasks}</Span>
      </Text>
      <Text>
        Completed:
        <Span>{completedTasks}</Span>
      </Text>
    </Section>
  );
};
