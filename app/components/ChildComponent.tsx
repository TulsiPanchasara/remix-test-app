import React from 'react';
import { connect } from 'react-redux';

const ChildComponent = (props:any) => {
  const MyContext = React.createContext(0);
  const { value, incrementAction, decreaseAction } = props;


  return (
    <div className='border ' >
      <div>I AM ChildComponent</div>

      <div onClick={() => decreaseAction()} >CLICK ME TO MINUS VALUE ===== {value}</div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
  value: state.counterReducer.value
}
}

const mapDispatchToProps = dispatch => ({
  incrementAction: () => dispatch({ type: 'counter/incremented' }),
  decreaseAction: () =>  dispatch({type: 'counter/decremented'})
})

export default connect(mapStateToProps, mapDispatchToProps )(ChildComponent)