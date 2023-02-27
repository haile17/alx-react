import { LOGIN, LOGOUT, HIDE_NOTIFICATION_DRAWER, DISPLAY_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { login, logout, hideNotificationDrawer, displayNotificationDrawer } from "./uiActionCreators";
import configureStore from "redux-moke-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

const middleWares = [thunk];
const mockStore = configureStore(middleWares);


  describe('actions', () => {
    it('login', () => {
        const user = { email:'hailefikere16@gmail.com', password: 12345 };
        const data = { type: LOGIN, user };
        
        expect(login(email, password)).toEqual ({
            type: LOGIN,
            user: { email: "hailefikere16@gmail.com", password: "12345" },
        });
    });

    it('logout', () => {
        expect(logout).toEqual({ type: LOGOUT});
    });

    it('displayNotificationDrawer', () => {
        expect(displayNotificationDrawer).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER});
    });

    it('hideNotificationDrawer', () => {
        expect(hideNotificationDrawer).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
    });
  });
