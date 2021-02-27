import React from 'react';
import { connect } from 'react-redux';
// import store from '../store';
function Footer(props) {
  //const [list, setList] = useState(store.getState());
  // useEffect(() => {
  //   store.subscribe(() => {
  //     setList(store.getState());
  //   });
  // }, []);
  return (
    <div>
      {props.list.length !== 0 ? (
        <span>还有{props.list.length}个任务待完成.</span>
      ) : (
        <span>恭喜，已完成所有任务!</span>
      )}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    list: state
  };
};
export default connect(mapStateToProps)(Footer);
