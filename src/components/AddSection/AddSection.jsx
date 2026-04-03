import { useDispatch } from "react-redux";
import { Btn, Section } from "../FilterSection/FilterSectionStyled";
import { Forma, Input, Title } from "./AddSectionStyled";
import { postTask } from "../../redux/operations";

export const AddSection = () => {
  const dispatch = useDispatch();

  return (
    <Section>
      <Forma
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(postTask(e.currentTarget.elements.text.value));
          e.currentTarget.reset();
        }}
      >
        <Title>Add some task</Title>
        <label>
          <Input type="text" name="text" placeholder="Buy some milk" required />
        </label>
        <Btn>Add task</Btn>
      </Forma>
    </Section>
  );
};
