import { useSelector } from "react-redux";
import { getTasks } from "../../redux/selectors";
import { Section } from "../FilterSection/FilterSectionStyled";
import { Span, Text } from "./StatisticsSectionStyled";

export const StatisticsSection = () => {
  const tasks = useSelector(getTasks);
  return (
    <Section>
      <Text>
        All: <Span>{tasks.items.length}</Span>
      </Text>
      <Text>
        Completed:{" "}
        <Span>{tasks.items.filter((item) => item.completed).length}</Span>
      </Text>
    </Section>
  );
};
