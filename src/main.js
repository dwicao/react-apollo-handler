import React, { Component, PropTypes } from 'react';

const apolloHandler = (LoadingComponent, ErrorComponent) => (WrappedComponent) => {
  class EnhancedComponent extends Component {
    render() {
      const { loading, error } = this.props.data;

      if (error) return <ErrorComponent error={error} />;

      if (loading) return <LoadingComponent />;

      return <WrappedComponent {...this.props} />;
    }
  }

  EnhancedComponent.propTypes = {
    data: PropTypes.object.isRequired,
  };

  return EnhancedComponent;
}

export default apolloHandler;
