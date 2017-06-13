import { renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
    
    let component ;
    
    beforeEach(() => {
     component = renderComponent(CommentBox);  
    });
    
    //for matchers we use chai jquery: https://github.com/chaijs/chai-jquery
    
    it('has the correct class', () => {
        
        expect(component).have.class('comment-box');
    });
    
    it('has a text area', () => {
    /* const component = renderComponent(CommentBox); this returns jquery object of the component.
    This line has to repeat in each test so we can keep it in beforeEach constructor.
    */ 
     expect(component.find('textarea')).to.exist;   
        
    });
    
    
    it('has a button', () => {
       
     expect(component.find('button')).to.exist;
        
    });
    
    describe('entering some text', () =>{ // nested describe to tell below two tests are realted.
    //we can have beforeEach method here also if there is need.
    
    beforeEach(() => { 
    
        component.find('textarea').simulate('change','new comment'); //change is a event and 'new comment is just text'
        
    });
        
        
    it('shows text that is entered', () => {
        
        expect(component.find('textarea')).to.have.value('new comment');
    });
    
    it('when submitted, clears the input', () => {
      //console.log(component);  
      component.simulate('submit');    
      expect(component.find('textarea')).to.have.value('');  
        
    }); 
        
    });
    
    
    
});