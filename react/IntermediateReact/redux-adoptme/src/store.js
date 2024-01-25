import { configureStore } from "@reduxjs/toolkit"
import AdoptedPetSlice from "./AdoptedPetSlice"
import searchParamsSlice from "./searchParamsSlice"
import { petApi } from "./petApiService"

const store = configureStore({
  reducer: {
    AdoptedPetSlice,
    searchParamsSlice,
    [petApi.reducerPath]: petApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petApi.middleware),
})

export default store