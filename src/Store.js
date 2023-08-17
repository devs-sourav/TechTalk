import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user/UserSlice'

export default configureStore({
  reducer: {
    loggedUser : userReducer
    },
})
