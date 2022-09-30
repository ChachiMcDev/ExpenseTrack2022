import authReducer from '../../reducers/auth';



test('reducers', () => {
    const state = authReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({});
});


test('should login and store uid', () => {
    const action = {
        type: 'LOGIN',
        uid: 'daslfke344324'
    };

    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});


test('should logout user and clear uid', () => {
    const action = {
        type: 'LOGOUT'
    };

    const state = authReducer({ uid: 'blahblah1223' }, action);
    expect(state).toEqual({});
});