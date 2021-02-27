import React, { useState } from 'react';
import { connect } from 'react-redux';
import { format } from 'date-fm'
// import store from '../store';
import { addList } from '../store/action-creators';
function Header(props) {
  const [txt, setTxt] = useState('');
  const handleChange = e => {
    setTxt(e.target.value);
  };
  const handleAdd = () => {
    if ('' !== txt) {
      //const action = addList(txt);
      // store.dispatch(action);
      props.handleAdd(txt);
      setTxt('');
    }
  };
  return (
    <div className="header">
      <h4>当前时间为{format()}</h4>
      <input type="text" value={txt} onChange={handleChange} />
      <input type="button" value="Add" onClick={handleAdd} />
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    handleAdd(txt) {
      dispatch(addList(txt));
    }
  };
};
export default connect(null, mapDispatchToProps)(Header);
