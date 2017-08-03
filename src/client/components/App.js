import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ArtistsActions from '../actions/ArtistsActions';

import ArtistsList from './artists/ArtistsList';

const App = ({artists, actions}) => (
    <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to dsgr.
        </p>
        <div><ArtistsList artists={artists} actions={actions} /></div>
    </div>
);
App.propTypes = {
    artists: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    artists: state.artists
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ArtistsActions, dispatch)
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
