import { connect } from "react-redux";


const FirstComponent = (props:any) => {
    const { value, incrementAction, decreaseAction } = props;

  const click = () => {
    const v = incrementAction();
    console.log('v', v)

  }

  return (
    <div className="border border-black" >
      <button className="cursor-pointer" onClick={() => click()} >
        CLICK ME TO CHECK REDUX EXAMPLE =========== {value}
      </button>
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

export default connect(mapStateToProps, mapDispatchToProps )(FirstComponent)