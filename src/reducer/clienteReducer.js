export const clienteReducer = (state = [], action) => {
    switch (action.type) {

        case 'CrearCliente':
            return [
                ...state,
                {
                    ...action.payload,
                }
            ];

        default:
            return state;
    }
}