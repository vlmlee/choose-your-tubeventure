import React, { Component } from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';
import { Link } from 'react-router';

export default class View extends Component {
    constructor() {
        super();
        this.state = {
            // Adventure states, doesn't change while
            // the youtube video plays.
            YTplayer: '',
            name: '',
            createdAt: '',
            creator: '',
            youtubeId: '',
            firstDecision: '',
            decisions: '',

            // YTplayer states, will change as video plays
            choices: '',
            currentTime: 0,
            pauseAt: [ 10, 20, 34 ],
            goTo: [ 15, 27, 36 ],
            hidden: true
        };

        this.playVideo = this.playVideo.bind(this);
        this.pauseVideo = this.pauseVideo.bind(this);
        this.seekVideo = this.seekVideo.bind(this);
        this.retrieveNextState = this.retrieveNextState.bind(this);
        this.tick = this.tick.bind(this);
    }

    componentWillMount() {
        // fetch video id, first pause break,
        // and gotos. Something like..
        // fetch('http://localhost:9001/adventure/:id').then(response => {
        //     this.setState({
        //         pauseAt: response.decision[0].pauseAt,
        //         goto: response.decision[0].goto
        //     });
        // });
    }

    componentDidMount() {
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    playVideo(e) {
        const currentTime = e.target.getCurrentTime();
        if (this.state.YTplayer) {
            this.setState({
                currentTime: currentTime,
                hidden: true,
            });
        } else {
            this.setState({
                YTplayer: e.target,
                currentTime: currentTime,
                hidden: true,
            });
        }
        this.timer = setInterval(this.tick, 1000);
    }

    pauseVideo() {
        this.state.YTplayer.pauseVideo();
        this.setState({ hidden: false });
    }

    seekVideo(time) {
        this.state.YTplayer.seekTo(time, true).playVideo();
    }

    retrieveNextState() {
        clearInterval(this.timer);
    }

    cleanUp() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({ currentTime: this.state.currentTime + 1 });
        if (parseInt(this.state.currentTime, 10) === this.state.pauseAt[0]) {
            this.pauseVideo();
            clearInterval(this.timer);
            this.setState({
                pauseAt: this.state.pauseAt.slice(1),
                decision: this.state.decision + 1
            });
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

        const classes = classnames('decisions', {
            hidden: this.state.hidden,
        });

        return (
            <section>
                <Link to={`/edit/${this.props.params.id}`}>
                    {this.props.params.id}
                </Link>

                <YouTube
                    videoId={this.props.params.id}
                    className="YTplayer"
                    opts={opts}
                    onPlay={this.playVideo}
                    onPause={this.retrieveNextState}
                    onEnd={this.cleanUp} />

                <section className={classes}>
                    { this.state.YTplayer ?
                        this.state.goTo.map(i => (
                            <input key={i}
                                type="button"
                                onClick={() => this.seekVideo(i)}
                                value={`go to ${i}`} />
                    )) : "" }
                </section>
            </section>
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
