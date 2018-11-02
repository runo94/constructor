import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../assets/actions/texts';

class TextForm extends Component {

  render(){
    console.log(this.props.texts.value);
    return (
      <>
      <form>
          FirstName:
          <input type="text" />
          <button type="submit">Submit</button>
        </form>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  texts: state.texts
})

export default connect(mapStateToProps, actions)(TextForm);
