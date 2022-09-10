import { createSlice } from "@reduxjs/toolkit";

const initialValOfState = {
    admin: [],
    user: [],
    jobs: [],
    isLoggedIn: false,
    currRole: ''
}
const userSlice = createSlice({
    name: 'users',
    initialState: {
        value: initialValOfState
    },
    reducers: {
        setUserRole: (state, action) => {
            state.value.currRole = action.payload.role;
            console.log("setting user role to", state.value.currRole);
        }
    },
})
export const {setUserRole} = userSlice.actions;
export default userSlice.reducer;