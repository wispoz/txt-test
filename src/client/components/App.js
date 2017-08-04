import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';
import ArtistsStore from '../stores/ArtistsStore';
import ArtistsActions from '../actions/ArtistsActions';
import ArtistsList from './artists/ArtistsList';
function getStateFromFlux() {
    return {
        isLoading: ArtistsStore.isLoading(),
        artists: ArtistsStore.getArtists()
    };
}
const App = React.createClass({
    getInitialState() {
        return getStateFromFlux();
    },
    componentWillMount() {
        ArtistsActions.loadArtists();
    },
    componentDidMount() {
        ArtistsStore.addChangeListener(this._onChange);
    },
    _onChange() {
        this.setState(getStateFromFlux());
    },
    render () {
      return  <div className="App">
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to dsgr.
            </p>
          <div><ArtistsList artists={this.state.artists}/></div>
        </div>;
    }
});
export default App;
