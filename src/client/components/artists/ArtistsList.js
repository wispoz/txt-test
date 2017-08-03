import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ArtistsListItem from './ArtistsListItem';
import {mapValues} from 'lodash';
export default class ArtistsList extends Component {
    render() {
        const {artists, actions} = this.props;
        return <div><ul className="todo-list">
            {artists.map(artist =>
                <ArtistsListItem key={artist.id} artist={artist} {...actions}/>
            )}
        </ul></div>;
    }
}
ArtistsList.propTypes = {
    artists: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};