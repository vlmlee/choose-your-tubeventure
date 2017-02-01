import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { Link } from 'react-router';

export default class View extends Component {
    constructor() {
        super();
        this.state = {
            player: '',
            time: 0,
            pauseBreak: [ 10, 20, 34 ],
        };
        this.playVideo = this.playVideo.bind(this);
        this.tick = this.tick.bind(this);
        this.pauseVideo = this.pauseVideo.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    playVideo(e) {
        const currentTime = e.target.currentTime();
        this.setState({ player: e.target, time: currentTime });
        this.timer = setInterval(this.tick, 1000);
    }

    pauseVideo(e) {
        this.state.player.pauseVideo();
    }

    tick() {
        this.setState({ time: this.state.time + 1 });

        if (parseInt(this.state.time) === this.state.pauseBreak[0]) {
            this.pauseVideo();
            clearInterval(this.timer);
            this.setState({ pauseBreak: this.state.pauseBreak.unshift() });
        }
    }

    render() {
        console.log(this.state.time);
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
                View { this.state.timerTime ? this.state.timerTime : '' }
                <Link to={`/edit/${this.props.params.id}`}>
                    {this.props.params.id}
                </Link>
                <YouTube
                    videoId={this.props.params.id}
                    className="player"
                    opts={opts}
                    onPlay={this.playVideo} />
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