import { changeName } from "../../../store/profile/actions";
import { useSelector, useDispatch } from "react-redux";
import { useState, useCallback } from "react";

export const ProfileTestIds = {
  click: "Profile-click",
};

export const Profile = () => {
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
    <>
      <div>
        <h4>Profile</h4>
      </div>
      <div>
        <input type="text" value={value} onChange={handleChange} />
      </div>
      <div>
        <button data-testid={ProfileTestIds.click} onClick={setName}>
          Change Name
        </button>
      </div>
      <div>{name}</div>
    </>
  );
};
