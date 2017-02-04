import React, { Component } from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames';
import { Link } from 'react-router';

export default class View extends Component {
    constructor() {
        super();

        // sample adventure
        this.state = {
            // adventure states, doesn't change while
            // the youtube video plays.
            YTplayer: '',
            name: 'Adventure 1',
            createdAt: new Date(),
            creator: 'Michael',
            youtubeId: '9NgVdbIdD8w',
            start: [
                {
                    name: 'start',
                    desc: 'Choose one',
                    interval: [7, 22],
                    pauseTime: 5,
                    choices: [
                        {
                            // level 0, choice 1
                            name: '0-1',
                            desc: 'Choice 1',
                            goto: 7,
                            nextPauseTime: 10,
                        },
                        {
                            name: '0-2',
                            desc: 'Choice 2',
                            goto: 12,
                            nextPauseTime: 15,
                        },
                        {
                            name: '0-3',
                            desc: 'Choice 3',
                            goto: 17,
                            nextPauseTime: 22,
                        }
                    ]
                }
            ],
            decisionTree: [
                {
                    // level 1, branch 1
                    name: '1-1',
                    desc: 'Choose one',
                    interval: [23, 45],
                    pauseTime: 10,
                    choices: [
                        {
                            // level 1, branch 1, choice 1
                            name: '1-1-1',
                            desc: 'Choice 1',
                            goto: 23,
                            nextPauseTime: 26,
                        },
                        {
                            name: '1-1-2',
                            desc: 'Choice 2',
                            goto: 28,
                            nextPauseTime: 33,
                        },
                        {
                            name: '1-1-3',
                            desc: 'Choice 3',
                            goto: 40,
                            nextPauseTime: 45,
                        },
                    ]
                },
                {
                    name: '1-2',
                    desc: 'Choose one',
                    interval: [46, 60],
                    pauseTime: 15,
                    choices: [
                        {
                            name: '1-2-1',
                            desc: 'Choice 1',
                            goto: 46,
                            nextPauseTime: 50,
                        },
                        {
                            name: '1-2-2',
                            desc: 'Choice 2',
                            goto: 51,
                            nextPauseTime: 60,
                        }
                    ]
                },
                {
                    name: '1-3',
                    desc: 'Choose one',
                    pauseTime: 22,
                    interval: [61, 80],
                    choices: [
                        {
                            name: '1-3-1',
                            desc: 'Choice 1',
                            goto: 61,
                            nextPauseTime: 67,
                        },
                        {
                            name: '1-3-2',
                            desc: 'Choice 2',
                            goto: 69,
                            nextPauseTime: 80,
                        }
                    ]
                },
                {
                    name: '2-1',
                    desc: 'Choose one',
                    pauseTime: 26,
                    interval: [81, 100],
                    choices: [
                        {
                            name: '2-1-1',
                            desc: 'Choice 1',
                            goto: 81,
                            nextPauseTime: 87
                        },
                        {
                            name: '2-1-2',
                            desc: 'Choice 2',
                            goto: 90,
                            nextPauseTime: 100,
                        }
                    ]
                },
                {
                    name: '2-2',
                    desc: 'Choose one',
                    pauseTime: 33,
                    interval: [101, 120],
                    choices: [
                        {
                            name: '2-2-1',
                            desc: 'Choice 1',
                            goto: 101,
                            nextPauseTime: 107,
                        },
                        {
                            name: '2-2-1',
                            desc: 'Choice 2',
                            goto: 110,
                            nextPauseTime: 120,
                        }
                    ]
                },
                {
                    name: '2-3',
                    desc: 'Choose one',
                    pauseTime: 45,
                    interval: [121, 130],
                    choices: [
                        {
                            name: '2-3-1',
                            desc: 'Choice 1',
                            goto: 121,
                            nextPauseTime: 125,
                        },
                        {
                            name: '2-3-2',
                            desc: 'Choice 2',
                            goto: 126,
                            nextPauseTime: 130,
                        }
                    ]
                },
                {
                    name: '2-4',
                    desc: 'Choose one',
                    pauseTime: 50,
                    interval: [131, 150],
                    choices: [
                        {
                            name: '2-4-1',
                            desc: 'Choice 1',
                            goto: 131,
                            nextPauseTime: 136,
                        },
                        {
                            name: '2-4-2',
                            desc: 'Choice 2',
                            goto: 137,
                            nextPauseTime: 150,
                        }
                    ]
                },
                {
                    name: '2-5',
                    desc: 'Choose one',
                    pauseTime: 60,
                    interval: [151, 170],
                    choices: [
                        {
                            name: '2-5-1',
                            desc: 'Choice 1',
                            goto: 151,
                            nextPauseTime: 160,
                        },
                        {
                            name: '2-5-2',
                            desc: 'Choice 2',
                            goto: 161,
                            nextPauseTime: 170,
                        }
                    ]
                },
                {
                    name: '2-6',
                    desc: 'Choose one',
                    pauseTime: 67,
                    interval: [171, 190],
                    choices: [
                        {
                            name: '2-6-1',
                            desc: 'Choice 1',
                            goto: 171,
                            nextPauseTime: 180,
                        },
                        {
                            name: '2-6-2',
                            desc: 'Choice 2',
                            goto: 275,
                            nextPauseTime: 275,
                        }
                    ]
                },
                {
                    name: '2-7',
                    desc: 'Choose one',
                    pauseTime: 80,
                    interval: [191, 210],
                    choices: [
                        {
                            name: '2-7-1',
                            desc: 'Choice 1',
                            goto: 191,
                            nextPauseTime: 200,
                        },
                        {
                            name: '2-7-2',
                            desc: 'Choice 2',
                            goto: 201,
                            nextPauseTime: 210,
                        }
                    ]
                },
                {
                    name: '3-1',
                    desc: 'Choose one',
                    pauseTime: 87,
                    interval: [211, 230],
                    choices: [
                        {
                            name: '3-1-1',
                            desc: 'Choice 1',
                            goto: 280,
                            nextPauseTime: 280,
                        },
                        {
                            name: '3-1-2',
                            desc: 'Choice 2',
                            goto: 211,
                            nextPauseTime: 230,
                        },
                    ]
                },
                {
                    name: '3-2',
                    desc: 'Choose one',
                    pauseTime: 100,
                    interval: [231, 240],
                    choices: [
                        {
                            name: '3-2-1',
                            desc: 'Choice 1',
                            goto: 231,
                            nextPauseTime: 240,
                        },
                        {
                            name: '3-2-2',
                            desc: 'Choice 2',
                            goto: 290,
                            nextPauseTime: 290,
                        }
                    ]
                },
                {
                    name: '3-3',
                    desc: 'Choose one',
                    pauseTime: 107,
                    choices: [
                        {
                            name: '3-3-1',
                            desc: 'Choice 1',
                            goto: 295,
                            nextPauseTime: 295,
                        },
                        {
                            name: '3-3-2',
                            desc: 'Choice 2',
                            goto: 305,
                            nextPauseTime: 305,
                        }
                    ]
                },
                {
                    name: '3-4',
                    desc: 'Choose one',
                    pauseTime: 120,
                    choices: [
                        {
                            name: '3-4-1',
                            desc: 'Choice 1',
                            goto: 285,
                            nextPauseTime: 285,
                        },
                        {
                            name: '3-4-2',
                            desc: 'Choice 2',
                            goto: 300,
                            nextPauseTime: 300,
                        }
                    ]
                },
                {
                    name: '3-5',
                    desc: 'Choose one',
                    pauseTime: 125,
                    choices: [
                        {
                            name: '3-5-1',
                            desc: 'Choice 1',
                            goto: 285,
                            nextPauseTime: 285,
                        },
                        {
                            name: '3-5-2',
                            desc: 'Choice 2',
                            goto: 295,
                            nextPauseTime: 295,
                        }
                    ]
                },
                {
                    name: '3-6',
                    desc: 'Choose one',
                    pauseTime: 130,
                    choices: [
                        {
                            name: '3-6-1',
                            desc: 'Choice 1',
                            goto: 275,
                            nextPauseTime: 275,
                        },
                        {
                            name: '3-6-2',
                            desc: 'Choice 2',
                            goto: 285,
                            nextPauseTime: 285,
                        }
                    ]
                },
                {
                    name: '3-7',
                    desc: 'Choose one',
                    pauseTime: 136,
                    interval: [241, 260],
                    choices: [
                        {
                            name: '3-7-1',
                            desc: 'Choice 1',
                            goto: 241,
                            nextPauseTime: 248,
                        },
                        {
                            name: '3-7-2',
                            desc: 'Choice 2',
                            goto: 249,
                            nextPauseTime: 260,
                        }
                    ]
                },
                {
                    name: '3-8',
                    desc: 'Choose one',
                    pauseTime: 150,
                    choices: [
                        {
                            name: '3-8-1',
                            desc: 'Choice 1',
                            goto: 300,
                            nextPauseTime: 300,
                        },
                        {
                            name: '3-8-2',
                            desc: 'Choice 2',
                            goto: 305,
                            nextPauseTime: 305,
                        }
                    ]
                },
                {
                    name: '3-9',
                    desc: 'Choose one',
                    pauseTime: 160,
                    choices: [
                        {
                            name: '3-9-1',
                            desc: 'Choice 1',
                            goto: 310,
                            nextPauseTime: 310,
                        },
                        {
                            name: '3-9-2',
                            desc: 'Choice 2',
                            goto: 315,
                            nextPauseTime: 315,
                        }
                    ]
                },
                {
                    name: '3-10',
                    desc: 'Choose one',
                    pauseTime: 170,
                    choices: [
                        {
                            name: '3-10-1',
                            desc: 'Choice 1',
                            goto: 300,
                            nextPauseTime: 300,
                        },
                        {
                            name: '3-10-2',
                            desc: 'Choice 2',
                            goto: 315,
                            nextPauseTime: 315,
                        }
                    ]
                },
                {
                    name: '3-11',
                    desc: 'Choose one',
                    pauseTime: 180,
                    choices: [
                        {
                            name: '3-11-1',
                            desc: 'Choice 1',
                            goto: 305,
                            nextPauseTime: 305,
                        }
                    ]
                },
                {
                    name: '3-12',
                    desc: 'Choose one',
                    pauseTime: 200,
                    choices: [
                        {
                            name: '3-12-1',
                            desc: 'Choice 1',
                            goto: 295,
                            nextPauseTime: 295,
                        }
                    ]
                },
                {
                    name: '3-13',
                    desc: 'Choose one',
                    pauseTime: 210,
                    choices: [
                        {
                            name: '3-13-1',
                            desc: 'Choice 1',
                            goto: 285,
                            nextPauseTime: 285,
                        }
                    ]
                },
                {
                    name: '4-1',
                    desc: 'Choose one',
                    pauseTime: 240,
                    choices: [
                        {
                            name: '4-1-1',
                            desc: 'Choice 1',
                            goto: 270,
                            nextPauseTime: 270,
                        }
                    ]
                },
                {
                    name: '4-2',
                    desc: 'Choose one',
                    pauseTime: 248,
                    choices: [
                        {
                            name: '4-2-1',
                            desc: 'Choice 1',
                            goto: 285,
                            nextPauseTime: 285,
                        },
                        {
                            name: '4-2-2',
                            desc: 'Choice 2',
                            goto: 315,
                            nextPauseTime: 315,
                        }
                    ]
                },
                {
                    name: '4-3',
                    desc: 'Choose one',
                    pauseTime: 260,
                    choices: [
                        {
                            name: '4-3-1',
                            desc: 'Choice 1',
                            goto: 275,
                            nextPauseTime: 275,
                        },
                        {
                            name: '4-3-2',
                            desc: 'Choice 2',
                            goto: 295,
                            nextPauseTime: 295,
                        }
                    ]
                },
            ],
            endings: [
                {
                    name: 'ending-1',
                    desc: 'Ending 1',
                    pauseTime: 270,
                },
                {
                    name: 'ending-2',
                    desc: 'Ending 2',
                    pauseTime: 275,
                },
                {
                    name: 'ending-3',
                    desc: 'Ending 3',
                    pauseTime: 280,
                },
                {
                    name: 'ending-4',
                    desc: 'Ending 4',
                    pauseTime: 285,
                },
                {
                    name: 'ending-5',
                    desc: 'Ending 5',
                    pauseTime: 290,
                },
                {
                    name: 'ending-6',
                    desc: 'Ending 6',
                    pauseTime: 295,
                },
                {
                    name: 'ending-7',
                    desc: 'Ending 7',
                    pauseTime: 300,
                },
                {
                    name: 'ending-8',
                    desc: 'Ending 8',
                    pauseTime: 305,
                },
                {
                    name: 'ending-9',
                    desc: 'Ending 9',
                    pauseTime: 310,
                },
                {
                    name: 'ending 10',
                    desc: 'Ending 10',
                    pauseTime: 315,
                }
            ],

            // YTplayer states, will change as video plays
            choices: '',
            currentTime: 0,
            pauseAt: '',
            goto: '',
            hidden: true
        };

        this.playVideo = this.playVideo.bind(this);
        this.pauseVideo = this.pauseVideo.bind(this);
        this.gotoVideo = this.gotoVideo.bind(this);
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

    gotoVideo(time) {
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
                pauseAt: this.state.pauseAt,
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
                        this.state.goto.map(i => (
                            <input key={i}
                                type="button"
                                className="choices"
                                onClick={() => this.gotoVideo(i)}
                                value={`go to ${i}`} />
                    )) : "" }
                </section>
            </section>
        );
    }
}
