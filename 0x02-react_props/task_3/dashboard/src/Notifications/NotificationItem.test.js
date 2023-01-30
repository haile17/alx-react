import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe("Testing <NotificationItem />", () => {
    let wrapper;

    it("<NotificationItem / > randers without crashing", () => {
        wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists());
    });

    it("<NotificationItem /> randers the correct html by passing dummy type and value props,", () => {
        wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.find("li").text()).toBe("test");
        expect(wrapper.find("li").prop("data-notification-type")).toBe("default");
    });

    it("<NotificationItem / > randers the correct html by passing dummy html prop,", () => {
        wrapper = shallow(<NotificationItem html="<u>test</u>" />);
        expect(wrapper.find("li").html()).toBe("<li><u>test</li></u>");
    });
});