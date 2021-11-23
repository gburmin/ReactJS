import { changeName } from "../store/profile/actions";
import { useSelector, useDispatch } from "react-redux";
import { useState, useCallback } from "react";

export const withProfile = (Component) => {
  return (props) => {
    const { name } = useSelector((state) => state.profile);

    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const handleChange = useCallback((e) => {
      setValue(e.target.value);
    }, []);

    const setName = useCallback(() => {
      dispatch(changeName(value));
    }, [dispatch, value]);

    return (
      <Component
        {...props}
        handleChange={handleChange}
        setName={setName}
        name={name}
      />
    );
  };
};
