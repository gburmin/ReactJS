import { useCallback, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  selectWaifus,
  selectWaifusError,
  selectWaifusLoading,
} from "../../store/waifu/selectors";
import { getAllWaifus, getWaifuDelete } from "../../store/waifu/actions";
import {
  API_URL_ANIME_GIFS,
  API_URL_ANIME_PICS,
} from "../../store/waifu/actions";
import { nanoid } from "nanoid";

export const WaifusList = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  const waifus = useSelector(selectWaifus);
  const error = useSelector(selectWaifusError);
  const loading = useSelector(selectWaifusLoading);

  const requestWaifus = () => {
    dispatch(getWaifuDelete());
    dispatch(getAllWaifus(API_URL_ANIME_GIFS));
    dispatch(getAllWaifus(API_URL_ANIME_PICS));
    console.log(store);
  };

  useEffect(() => {
    requestWaifus();
  }, []);

  const renderWaifu = useCallback(
    (waifu) => (
      <li key={nanoid()}>
        <img
          src={waifu.url}
          alt=""
          height="200px"
          style={{ display: "flex", marginBottom: "5px" }}
        ></img>
      </li>
    ),
    []
  );

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <>
        <h3>Error</h3>
        <button onClick={requestWaifus}>Retry</button>
      </>
    );
  }

  return (
    <>
      {" "}
      <ul>{waifus.map(renderWaifu)}</ul>
      <button onClick={requestWaifus}>New pic</button>
    </>
  );
};
