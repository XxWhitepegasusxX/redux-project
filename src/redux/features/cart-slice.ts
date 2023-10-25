import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
    value: CartState[];
}

type CartState = {
    id: string,
    name: string,
    price: number,
    imageUrl: string,
}

const initialState = {
    value: [],
} as InitialState;

export const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state: InitialState, action: PayloadAction<CartState>) => {
            const item = state.value.find(item => item.id === action.payload.id);

            if(item){
                return {
                    value: [...state.value]
                }
            }

            return{
                value: [...state.value, action.payload],
            };
        },
        remove: (state, action: PayloadAction<string>) => {
            const index = state.value.findIndex(item => item.id === action.payload);
            state.value.splice(index, 1);
            return state;
        }
    }
})

export const { add, remove } = cart.actions;
export default cart.reducer;