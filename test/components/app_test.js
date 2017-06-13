//app_test.js is to test app.js component. Here we verify if test "React simple starter" is present.
// we imports from test helper file. that is test_helper.js
//to run tests: npm run test:watch . Watch reexcutes when ever there is any change in test file.
import { renderComponent, expect} from '../test_helper';
import App from '../../src/components/app'; //component file to test.


// Use 'describe' to group together similar tests
describe('App',() => {//name of the component we are testing.
    
   /* // Use 'it' to test a single attribute of a target.
    it('Shows the correct text', () =>{//small description of the test.Which is shown in output.
        
        //create an instance of App
        
        const component = renderComponent(App); //from helper class to create instance of App.
        
        // Use 'expect' to make an 'assertion' about a target
        expect(component).to.contain('React simple starter'); //common syntax: to.contain is matcher. We have different types of mathers.
        
        
    });*/
    
    let component;
    
    beforeEach(() =>{
       
        component = renderComponent(App);
        
    });
    
    it('shows a comment box', () => {
       
        expect(component.find('.comment-box')).to.exist;
        
    });
    
    it('shows a comment list', () => {
        
        expect(component.find('.comment-list')).to.exist;
    });
    
}); 


