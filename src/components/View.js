import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { Link } from 'react-router';

export default class View extends Component {
    constructor() {
        super();
        this.state = {
            player: '',
            time: 0,
            decision: 0,
            pauseBreak: [ 10, 20, 34 ],
            goTo: [ 23, 27, 36 ],
        };
        this.playVideo = this.playVideo.bind(this);
        this.pauseVideo = this.pauseVideo.bind(this);
        this.seekVideo = this.seekVideo.bind(this);
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        // fetch video id, first pause break,
        // and gotos. Something like...

        // fetch('http://localhost:9001/videos/:id').then(response => {
        //     this.setState({
        //         pauseBreak: reponse.decision[0].pauseBreak,
        //         goto: response.decision[0].goto
        //     });
        // });
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    playVideo(e) {
        const currentTime = e.target.getCurrentTime();
        this.setState({ player: e.target, time: currentTime });
        this.timer = setInterval(this.tick, 1000);
    }

    pauseVideo() {
        this.state.player.pauseVideo();
    }

    seekVideo(time) {
        this.state.player.seekTo(time, true);
    }

    retrieveNextState() {
        fetch('http://localhost:9001/videos/' + {this.props.params.id} + '/' + {this.state.decision})
            .then(response => {
                this.setState({ pauseBreak: response.decision.pauseBreak })
            });
    }

    tick() {
        this.setState({ time: this.state.time + 1 });
        if (parseInt(this.state.time, 10) === this.state.pauseBreak[0]) {
            this.pauseVideo();
            clearInterval(this.timer);
            this.setState({ pauseBreak: this.state.pauseBreak.slice(1), decision: this.state.decision + 1 });
        }
    }

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
                View { this.state.timerTime ? this.state.timerTime : '' }
                <Link to={`/edit/${this.props.params.id}`}>
                    {this.props.params.id}
                </Link>
                <YouTube
                    videoId={this.props.params.id}
                    className="player"
                    opts={opts}
                    onPlay={this.playVideo}
                    onPause={this.retrieveNextState} />
                    { this.state.player ?
                        this.state.goTo.map(i => (
                            <input key={i}
                                type="button"
                                onClick={() => this.seekTo(i)}
                                value={`go to ${i}`} />
                    )) : "" }
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