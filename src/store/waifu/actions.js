export const API_URL_ANIME_GIFS = "https://api.waifu.pics/sfw/happy";
export const API_URL_ANIME_PICS = "https://api.waifu.pics/sfw/highfive";
export const API_URL_SHIBES_PICS =
  "http://shibe.online/api/shibes?count=[5]&urls=[true]&httpsUrls=[true]";

export const STATUSES = {
  IDLE: 0,
  REQUEST: 1,
  SUCCESS: 2,
  FAILURE: 3,
};

export const GET_WAIFU_REQUEST = "WAIFU::GET_WAIFU_REQUEST";
export const GET_WAIFU_SUCCESS = "WAIFU::GET_WAIFU_SUCCESS";
export const GET_WAIFU_FAILURE = "WAIFU::GET_WAIFU_FAILURE";
export const GET_WAIFU_DELETE = "WAIFU::GET_WAIFU_DELETE";

export const getWaifuRequest = () => ({
  type: GET_WAIFU_REQUEST,
});

export const getWaifuSuccess = (data) => ({
  type: GET_WAIFU_SUCCESS,
  payload: data,
});

export const getWaifuDelete = () => ({
  type: GET_WAIFU_DELETE,
  payload: [],
});

export const getWaifuFailure = (err) => ({
  type: GET_WAIFU_FAILURE,
  payload: err,
});

export const getAllWaifus = (url) => async (dispatch) => {
  dispatch(getWaifuRequest());

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }
    const result = await res.json();
    console.log(`Result: ${JSON.stringify(result)}`);

    dispatch(getWaifuSuccess(result));
  } catch (err) {
    dispatch(getWaifuFailure(err.message));
  }
};
