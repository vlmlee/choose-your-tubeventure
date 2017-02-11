import React, { Component } from 'react';
import YouTube from 'react-youtube';
import moment from 'moment';
import classnames from 'classnames';
import UserInfo from '../presentational/UserInfo.js';
import Header from '../presentational/Header.js';

export default class View extends Component {
    constructor() {
        super();
        this.state = {
            // adventure states, doesn't change while
            // the youtube video plays.
            YTplayer: '',
            name: '',
            createdAt: '',
            creator: '',
            youtubeId: '',
            start: {},
            decisions: [],
            endings: [],

            // YTplayer states, changes as video plays
            currentTime: 0,
            pauseAt: '',
            choices: '',
            endTime: '',
            hidden: true
        };

        this.playVideo = this.playVideo.bind(this);
        this.pauseVideo = this.pauseVideo.bind(this);
        this.handleUserPause = this.handleUserPause.bind(this);
        this.gotoVideo = this.gotoVideo.bind(this);
        this.tick = this.tick.bind(this);
        this.cleanUp = this.cleanUp.bind(this);
        this.resetVideo = this.resetVideo.bind(this);
    }

    componentDidMount() {
        // fetch video id, first pause break,
        // and gotos. Something like..
        fetch(`http://www.chooseyourtubeventure.site:9001/adventure/${this.props.params.id}`)
            .then(response => {
                return response.json();
            })
            .then(responseJSON => {
                const viewState = Object.assign({}, responseJSON);
                this.setState(
                    viewState,
                );
                this.setState({
                    start: viewState.decisions[0],
                    pauseAt: parseInt(viewState.decisions[0].pauseTime, 10),
                    choices: viewState.decisions[0].choices,
                });
            })
            .catch(err => console.log(err));
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
        clearInterval(this.timer);
        this.state.YTplayer.pauseVideo();
        this.setState({ hidden: false });
    }

    handleUserPause() {
        clearInterval(this.timer);
    }

    gotoVideo(time, nextPauseTime) {
        const end = this.state.endings.find(i => i.pauseTime === nextPauseTime);
        if (this.state.endTime !== '' ) {
            this.setState({
                pauseAt: parseInt(this.state.start.pauseTime, 10),
                choices: this.state.start.choices,
                endTime: '',
                hidden: true,
            });
        } else if (end) {
            this.gotoEnding(time, end.pauseTime);
            return; // prevents seekTo below
        } else {
            this.setState({
                pauseAt: nextPauseTime,
                choices: this.state.decisions.find(i => (
                    i.pauseTime === nextPauseTime
                )).choices,
                hidden: true,
            });
        }
        this.state.YTplayer.seekTo(time, true).playVideo();
    }

    tick() {
        this.setState({ currentTime: this.state.currentTime + 1 });
        if (parseInt(this.state.currentTime, 10) === parseInt(this.state.endTime, 10)) {
            this.cleanUp();
        } else if (parseInt(this.state.currentTime, 10) === parseInt(this.state.pauseAt, 10)) {
            this.pauseVideo();
        }
    }

    gotoEnding(time, endTime) {
        this.state.YTplayer.seekTo(time).playVideo();
        this.setState({
            endTime: endTime,
            choices: this.state.endings.find(i => (
                i.pauseTime === endTime
            )).choices,
            hidden: true,
        });
    }

    resetVideo() {
        this.state.YTplayer.seekTo(0).pauseVideo();
        this.setState({
            pauseAt: parseInt(this.state.start.pauseTime, 10),
            choices: this.state.start.choices,
            endTime: '',
            hidden: true,
        });
    }

    cleanUp() {
        this.state.YTplayer.pauseVideo();
        this.setState({
            pauseAt: parseInt(this.state.start.pauseTime, 10),
            hidden: false,
        });
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
        const classes = classnames('multiple-choices', {
            hidden: this.state.hidden,
        });
        return (
            <section>
                <Header text={this.state.name} />
                <YouTube
                    videoId={this.state.youtubeId}
                    className="YTplayer"
                    opts={opts}
                    onPlay={this.playVideo}
                    onPause={this.handleUserPause}
                    onEnd={this.cleanUp} />

                <UserInfo
                    id={this.props.params.id}
                    name={this.state.name}
                    creator={this.state.creator}
                    createdAt={moment(this.state.createdAt).format('MMMM Do, YYYY')}
                    resetVideo={this.resetVideo.bind(this)} />

                <section className={classes}>
                    { this.state.choices ?
                        this.state.choices.map(i => (
                            <input key={i.id}
                                type="button"
                                className="choices"
                                onClick={() => this.gotoVideo(parseInt(i.goto, 10), parseInt(i.nextPauseTime, 10))}
                                value={i.description} />
                    )) : "" }
                </section>
            </section>
        );
    }
}
