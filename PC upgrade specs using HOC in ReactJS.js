/*
    LEVEL 6 KYU
    Source: https://www.codewars.com/kata/pc-upgrade-specs-using-hoc-in-reactjs/train/javascript
    Date: 03.22.2018
*/

const React = require('react');

// Don't change PcDisplay
const PcDisplay = (props) => {
  return (<div>
  <h1>{props.title}</h1>
  <p id="price">£{props.price}</p>
  <ul>
    <li><label>CPU</label> <span>{props.cpu}</span></li>
    <li><label>RAM</label> <span>{props.ram}</span></li>
    <li><label>SSD</label> <span>{props.ssd}</span></li>
  </ul>
  </div>);
};

// Implement HOC -> returns a functions that wraps the passed in `PcDisplay` component
let withPriceModel = (WrappedComponent, increase) => {
  return (props) => {
    return <WrappedComponent
             title={ props.title }
             price={ 50 + increase }
             cpu={ props.cpu }
             ram={ props.ram }
             ssd={ props.ssd }
           />
  }
};

// Build basic and pro model components using `withPriceModel`
let BasicModel = withPriceModel(PcDisplay, 0);

let ProModel = withPriceModel(PcDisplay, 60);



// TESTS
const { shallow, render } = require('enzyme');

describe("Setup basic and pro models", () => {
  it("basic & pro models should be React components", () => {
    
    Test.assertEquals(typeof BasicModel, 'function', "BasicModel should be a React component");
    Test.assertEquals(typeof ProModel, 'function', "ProModel should be a React component");
  });
});

describe("Show upgrade from basic model computer", () => {
  
  let basicModel, proModel;
  before(() => {
    basicModel = shallow(<BasicModel cpu="i3" ram="4gb" ssd="128gb" title="Base computer" />);
    proModel = shallow(<ProModel cpu="i7" ram="16gb" ssd="512gb" title="Pro computer" />);
  });
  
  it("basic PC model props", () => {
    const props = basicModel.props();
    Test.assertEquals(props.cpu, 'i3', "base model should have 'cpu' prop");
    Test.assertEquals(props.ram, '4gb', "base model should have 'ram' prop");
    Test.assertEquals(props.ssd, '128gb', "base model should have 'ssd' prop");
    Test.assertEquals(props.title, 'Base computer');
  });
  
  it("Basic PC model default price is 50", () => {
    const props = basicModel.props();
    Test.assertEquals(props.price, 50, "basic model should have price prop with value 50");
  });
  
  it("Display the basic model pc", () => {
    const basicModel = render(<BasicModel cpu="i3" ram="4gb" ssd="128gb" title="Base computer" />);
    const list = basicModel.find('li span');
    const price = basicModel.find('#price');
    
    Test.assertEquals(price.text(), "£50", "render price £50");
    Test.assertEquals(list.eq(0).text(), "i3", "render cpu i3");
    Test.assertEquals(list.eq(1).text(), "4gb", "render ram 4gb");
    Test.assertEquals(list.eq(2).text(), "128gb", "render ssd 128gb");
  });
  
  it("Pro model props", () => {
   const props = proModel.props();
   Test.assertEquals(props.cpu, 'i7', "pro model should have 'cpu' prop");
    Test.assertEquals(props.ram, '16gb', "pro model should have 'ram' prop");
    Test.assertEquals(props.ssd, '512gb', "pro model should have 'ssd' prop");
    Test.assertEquals(props.title, 'Pro computer');
  });
  
  it("Pro model price increase by 60", () => {
    const props = proModel.props();
    Test.assertEquals(props.price, 110, "pro model should have price prop with value 110");
  });
  
   it("Display the pro model pc", () => {
    const proModel = render(<ProModel cpu="i7" ram="16gb" ssd="512gb" title="Pro computer" />);
    const list = proModel.find('li span');
    const price = proModel.find('#price');
    
    Test.assertEquals(price.text(), "£110", "render price £110");
    Test.assertEquals(list.eq(0).text(), "i7", "render cpu i7");
    Test.assertEquals(list.eq(1).text(), "16gb", "render ram 16gb");
    Test.assertEquals(list.eq(2).text(), "512gb", "render ssd 512gb");
  });
  
  it("can't override price directly through ProModel props", () => {
    const proModel = shallow(<ProModel price={1000} title="Pro computer" />);
    const price = proModel.props().price;
    Test.assertEquals(price, 110, "pro model price prop should equal 110");
  });
  
  it("withPriceModel returns a function", () => {
    const Fake = () => <p>data</p>;
    const PriceFake = withPriceModel(Fake);
    
    Test.assertEquals(typeof PriceFake, 'function', "HOC return a function");
  });
  
  it("allow other 'display' components to be passed in `withPriceModel`", () => {
    const AnotherPcDisplay = () => <p>data</p>;
    const PriceFake = withPriceModel(AnotherPcDisplay, {});
    const baseModel = shallow(<PriceFake />);
    
    Test.assertEquals(baseModel.name(), 'AnotherPcDisplay', "should render 'AnotherPcDisplay' component");
  });
  
});