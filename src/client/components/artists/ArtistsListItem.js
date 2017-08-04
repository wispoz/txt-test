import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ArtistsList.less';
export default class ArtistsListItem extends Component {
    render() {
        const { artist } = this.props;
        return <div className='Artist'>
            <img src={artist.img} />
            <span className='Artist__del-icon'>×</span>
            <h4 className='Artist__title'>{artist.title}</h4>
            <div className='Artist__text'>{artist.text}</div>
        </div>;

    }
}
ArtistsListItem.propTypes = {
    artist: PropTypes.object.isRequired
};