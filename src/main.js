import React, { Component } from 'react';

const apolloHandler = (LoadingComponent, ErrorComponent) => (WrappedComponent) => {
  return class extends Component {
    render() {
      const { loading, error } = this.props.data;

      if (error) return <ErrorComponent error={error} />;

      if (loading) return <LoadingComponent />;

      return <WrappedComponent {...this.props} />;
    }
  }
}

export default apolloHandler;
