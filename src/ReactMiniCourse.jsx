//1
const JSX1 = <div></div>;

//2
const JSX2 = (
    <div>
        <h1>Paragraph One</h1>
        <p>Paragraph Two</p>
        <ul>
            <li>Paragraph Three</li>
            <li>Paragraph Four</li>
            <li>Paragraph Five</li>
        </ul>
    </div>
)

//3
const JSX3 = (
    <div>
      {/* */}
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
    </div>
  );

//4
const JSX4 = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // Add your code below this line
  ReactDOM.render(JSX, document.getElementById('challenge-node'));

//5
const JSX5 = (
    <div className='myDiv'>
        <h1>Add a class to this div</h1>
    </div>
);

//6
const JSX6 = (
    <div>
        <h2>Welcome to React!</h2> <br />
        <p>Be sure to close all tags!</p>
        <hr />
    </div>
);

//7
const MyComponent7 = function () {
    // Change code below this line

    return (
        <div ClassName='customClass'>text</div>
    );

    // Change code above this line
}

//8
class MyComponent8 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // Change code below this line
        return (
            <div>
                <h1>Hello React!</h1>
            </div>
        );


        // Change code above this line
    }
};

//9
const ChildComponent = () => {
    return (
        <div>
            <p>I am the child</p>
        </div>
    );
};

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>I am the parent</h1>
                { /* Change code below this line */}
                <ChildComponent />

                { /* Change code above this line */}
            </div>
        );
    }
};

//10
const TypesOfFruit = () => {
    return (
        <div>
            <h2>Fruits:</h2>
            <ul>
                <li>Apples</li>
                <li>Blueberries</li>
                <li>Strawberries</li>
                <li>Bananas</li>
            </ul>
        </div>
    );
};

const Fruits = () => {
    return (
        <div>
            { /* Change code below this line */}

            { /* Change code above this line */}
        </div>
    );
};

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                { /* Change code below this line */}

                { /* Change code above this line */}
            </div>
        );
    }
};