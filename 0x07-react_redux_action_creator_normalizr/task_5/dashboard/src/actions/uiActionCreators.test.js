import { LOGIN, LOGOUT, HIDE_NOTIFICATION_DRAWER, DISPLAY_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { login, logout, hideNotificationDrawer, displayNotificationDrawer } from "./uiActionCreators";

  describe('actions', () => {
    it('login', () => {
        const user = { email:'hailefikere16@gmail.com', password: 12345 };
        const data = { type: LOGIN, user };
        const result = login(user.email, user.password);
        expect(result).toEqual(data);
    });

    it('logout', () => {
        const data = { type: LOGOUT };
        const result = logout();
        expect(result).toEqual(data);
    });

    it('displayNotificationDrawer', () => {
        const data = { type: DISPLAY_NOTIFICATION_DRAWER };
        const result = displayNotificationDrawer();
        expect(result).toEqual(data);
    });

    it('hideNotificationDrawer', () => {
        const data = { type: HIDE_NOTIFICATION_DRAWER };
        const result = hideNotificationDrawer();
        expect(result).toEqual(data);
    });
  });
