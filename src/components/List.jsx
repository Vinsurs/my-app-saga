import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import store from '../store';
import { delList } from '../store/action-creators';
import { GET_LIST_ASYNC } from '../store/action-types';
function List(props) {
  //const [list, setList] = useState(store.getState());
  // useEffect(() => {
  //   store.subscribe(() => {
  //     setList(store.getState());
  //   });
  // }, []);
  const { handleGet } = props;
  useEffect(() => {
    //store.dispatch({ type: GET_LIST_ASYNC });
    handleGet();
  }, [handleGet]);
  // const handleDel = key => {
  //   store.dispatch(delList(key));
  // };
  return (
    <ul>
      {props.list.map((v, k) => (
        <li key={k}>
          <span>{v}</span>
          <button onClick={() => props.handleDel(k)}>delete</button>
        </li>
      ))}
    </ul>
  );
}
const mapStateToProps = state => {
  return {
    list: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleDel(key) {
      dispatch(delList(key));
    },
    handleGet() {
      dispatch({ type: GET_LIST_ASYNC });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
