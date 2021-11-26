export const selectWaifu = (state) => state.waifus;
export const selectWaifus = (state) => selectWaifu(state).waifus;
export const selectWaifusError = (state) => selectWaifu(state).error;
export const selectWaifusLoading = (state) => selectWaifu(state).loading;
