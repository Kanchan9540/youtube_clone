import { createSlice } from "@reduxjs/toolkit";
import { live_chat_count } from "./constant";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    // reducers: {
    //     addMessage: (state, action) => {
    //         //ater every 10 messgae ita remove the one msg from the top
    //         state.messages.splice(live_chat_count, 1);
    //        state.messages.push(action.payload);
    //     },
    // },

    reducers: {
        addMessage: (state, action) => {
            //ater every 25 message ita remove the one msg from the top
            if (state.messages.length === live_chat_count) {
                state.messages.shift(); // Remove the first message
            }
            state.messages.push(action.payload);
        },
    },

});

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;