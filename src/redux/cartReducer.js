import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: [] // [ {itemID: 1, product: {}, quantity: 1} ]
}

export const counterSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		add: (state, action) => {

			const product = action.payload.product
			// const quantity = action.payload.quantity

			const exist = state.items.filter(item => {
				if (item.product.id === product.id) {
					return true;
				}
				return false;
			})
			if (exist && exist.length > 0) {
				const items = state.items.map(item => {
					if (item.product.id === product.id) {
						const it = { ...item }
						return { ...item, quantity: it.quantity + action.payload.quantity };
					}
					return item;
				})
				state.items = items;
			} else {
				state.items.push({
					itemID: state.items.length + 1,
					product: action.payload.product,
					quantity: action.payload.quantity,
				})
			}
		},
		remove: (state, action) => {
			debugger;
			state.items = state.items.filter(it => it.itemID !== action.payload)
		},
		reset: (state) => {
			state.items = []
		},

	},
})

export const { add, remove, reset, } = counterSlice.actions

export default counterSlice.reducer