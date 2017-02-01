import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { Link } from 'react-router';

export default class View extends Component {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                controls: 0,
                autoplay: 0,
                disablekb: 1,
            }
        };
        return (
            <div>
                View
                <Link to={`/edit/${this.props.params.id}`}>
                    {this.props.params.id}
                </Link>
                    <YouTube
                        videoId={this.props.params.id}
                        className="player"
                        opts={opts} />
            </div>
        );
    }
}

// onReady={func}
// onPlay={func}
// onPause={func}
// onEnd={func}
// onError={func}
// onStateChange={func}
// onPlaybackRateChange={func}
// onPlaybackQualityChange={func}