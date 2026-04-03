import { useDispatch } from "react-redux";
import { Btn, BtnYellow, Item, Text } from "./TasksItemStyled";
import { toggleCompleted } from "../../redux/operations";
import { useState } from "react";
import { changeTask } from "../../redux/operations";

export const TasksItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(false);

  return (
    <Item id={id}>
      <input
        type="checkbox"
        onChange={() => {
          dispatch(toggleCompleted(id));
        }}
        checked={completed}
      />
      {input && <input defaultValue={text} />}
      {!input && <Text>{text}</Text>}

      <BtnYellow
        onClick={(e) => {
          if (input) {
            if (text !== e.currentTarget.previousSibling.value) {
              dispatch(
                changeTask({ id, text: e.currentTarget.previousSibling.value }),
              );
            }
            setInput(false);
          } else {
            setInput(true);
          }
        }}
        type="button"
      >
        Change
      </BtnYellow>
      <Btn type="button" data-action="delete">
        Delete
      </Btn>
    </Item>
  );
};
