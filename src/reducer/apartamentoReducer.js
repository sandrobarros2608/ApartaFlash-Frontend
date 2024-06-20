export const apartamentoReducer = (state = [], action) => {
    switch (action.type) {
        
        case 'CargandoAptos':
            return action.payload;

        default:
            return state;
    }
}