/*
    LEVEL 5 KYU
    Source: https://www.codewars.com/kata/truncate-paragraph-using-higher-order-component-in-react-js/train/javascript
    Date: 03.22.2018
*/

const React = require('react');

const withTruncateParagraph = (Component) => {
  class WithTruncateParagraph extends React.Component {
    render() {
      const  { textLength = 10 } = this.props;
      const  txt = (textLength >= 0) ? this.props.children.substring(0, textLength) + '...' : this.props.children
      return <Component {...this.props}>{txt}</Component> 
    }
  }
  WithTruncateParagraph.displayName = `WithTruncateParagraph(${Component.displayName || Component.name || 'Component'})`
  return WithTruncateParagraph
};



// TESTS
const ShallowRenderer = require('react-test-renderer/shallow');

const Paragraph = (props) => <p>{props.children}</p>;
const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`;

const ShortParagraph = withTruncateParagraph(Paragraph);

function executeRender(jsx){
  const renderer = new ShallowRenderer();
  renderer.render(jsx);
  return renderer.getRenderOutput();
}

function joinChildren(children) {
  return children.join ? children.join('') : children;
}

// Here are some starter tests, remember TDD :)
describe("HOC withTruncateParagraph", () => {
  
  it("return a function", () => {
    Test.assertEquals(typeof ShortParagraph, 'function', "withTruncateParagraph should return a function");
  });
  
  it('should shorten length of text by 10 and add ellipsis ', () => {
    const result = executeRender(<ShortParagraph>{text}</ShortParagraph>);
    Test.assertEquals(joinChildren(result.props.children), 'Lorem Ipsu...', "Truncate to 10 characters with ellipsis at the end");
  });
  
});