import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArtistsListItem from './ArtistsListItem';
import Masonry from 'react-masonry-component';

export default class ArtistsList extends Component {
    render() {
        const masonryOptions = {
            itemSelector: '.Artist',
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
        };
        const {artists} = this.props;
        return<Masonry
            className='NotesGrid'
            options={masonryOptions}
        >
            {
                artists.map(artist =>
                    <ArtistsListItem
                        key={artist.id} artist={artist}
                    >
                        {artist.text}
                    </ArtistsListItem>
                )
            }
        </Masonry>;
    }
}
ArtistsList.propTypes = {
    artists: PropTypes.array.isRequired
};