const createValidateComponent =
  (isReactNative, React, connect) => {
    const {Component} = React
    const validateComponentConnector = createValidateComponentConnector(isReactNative, React, connect)
    return (config, mapStateToProps, mapDispatchToProps) =>
      WrappedComponent => {
        const ConnectValidatedComponent = validateComponentConnector(WrappedComponent, mapStateToProps, mapDispatchToProps);
        class ConnectedComponent extends Component {
          render() {
            return (<ConnectValidatedComponent
              {...config}
              {...this.props}
            />)
          }
        }
        return hoistStatics(ConnectedComponent, WrappedComponent)
      }
  };

export default createValidateComponent;
