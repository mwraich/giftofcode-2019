import React, { Component } from 'react';
import { connect } from 'react-redux';
import {sendImportCatsRequest} from '../../containers/Cats/action'

class Cats extends Component {
  async componentDidMount() {
    await this.props.getCats();
  }
  render() {
    return (
      <React.Fragment>
        {this.props.cats.cats}
        <button onClick={this.props.getCats}>Update</button>
      </React.Fragment>
    )
  }
};

const mapStateToProps = state => ({
  cats: state.cats
});

const mapDispatchToProps = dispatch => ({
  getCats: () => dispatch(sendImportCatsRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cats);
