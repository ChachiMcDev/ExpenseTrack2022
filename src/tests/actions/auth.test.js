import { login, logout } from '../../actions/auth';

test('should create login action object', () => {
    const action = login('abcd123456');

    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'abcd123456'
    });
})

test('should create logout action object', () => {
    const action = logout();

    expect(action).toEqual({
        type: 'LOGOUT'
    });
})