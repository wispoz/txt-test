import React, {Component} from 'react';
import PropTypes from 'prop-types';
export default class ArtistsListItem extends Component {
    render() {
        const { artist } = this.props;
          return <li>{artist.text}</li>;
    }
}
ArtistsListItem.propTypes = {
    artist: PropTypes.object.isRequired
};