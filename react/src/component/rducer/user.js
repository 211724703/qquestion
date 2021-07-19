import produce from 'immer';

const initialState = {
    name: '',
    password: ''
};


export default produce((state, action) => {
    switch (action.type) {
        case 'SIGN_UP_USER':
            {
                state.name = action.payLoad.name;
                state.password = action.payLoad.password
            }
    }
}, initialState)



