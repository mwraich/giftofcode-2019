import React, { Component } from 'react';
import { connect } from 'react-redux';
import {sendImportCatsRequest} from '../../containers/Cats/action'
import {fetchFosterHomes} from '../../containers/FosterHomes/actions/index'
class Cats extends Component {
  async componentDidMount() {
    await this.props.getCats();
  }
  render() {
    return (
      <React.Fragment>
        {this.props.cats.cats}
        <button onClick={this.props.fosterHomes}>Update</button>
      </React.Fragment>
    )
  }
};

const mapStateToProps = state => ({
  cats: state.cats
});

const mapDispatchToProps = dispatch => ({
  getCats: () => dispatch(sendImportCatsRequest()),
  fosterHomes: () => dispatch(fetchFosterHomes())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cats);
