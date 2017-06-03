# react-apollo-handler  
This package is being made for handing Loading/Error component while your Apollo Client fetch data from GraphQL Server.  

* You can use this package for React.js or React Native.

## Installation  
* `npm install --save react-apollo-handler`

## Usage
```jsx
const ComponentWithHandler = apolloHandler(LoadingComponent, ErrorComponent)(MyComponent);

export default graphql(query)(ComponentWithHandler);
```

## Example
```jsx
import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import apolloHandler from 'react-apollo-handler'; // this package
import LoadingSpinner from './LoadingSpinner'; // your custom Loading Component
import ErrorComponent from './ErrorComponent'; // your custom component to display if error occur

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>This is just a home page</h1>
      </div>
    );
  }
}

const query = gql`
  {
    todos {
      id
      title
    }
  }
`;

const HomePageWithHandler = apolloHandler(LoadingSpinner, ErrorComponent)(HomePage);

// ErrorComponent is optional, so you can just do like this :
// const HomePageWithHandler = apolloHandler(LoadingSpinner)(HomePage);

export default graphql(query)(HomePageWithHandler);

```

## License
MIT