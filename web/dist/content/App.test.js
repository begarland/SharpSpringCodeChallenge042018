import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import App from './App';
import { appState } from '../redux/store/templates/appState';
Enzyme.configure({ adapter: new Adapter() });
describe('<App/>', () => {
    const AppAllProps = (React.createElement(App, { appState: appState }));
    let AppAllPropsShallow;
    beforeEach(() => {
        AppAllPropsShallow = shallow(AppAllProps);
    });
    describe('all props', () => {
        it('should exist', () => {
            expect(AppAllPropsShallow.exists()).toEqual(true);
        });
    });
});
//# sourceMappingURL=App.test.js.map