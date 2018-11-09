import React, {Component} from 'react'
import {playBenchmarks, playScores} from "./GraphicAnimation";
import PropTypes from "prop-types";

class ScoreGraphic extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        playScores(this.props.scores)
    }

    componentDidUpdate() {
        playBenchmarks(this.props.scores)
    }

    render() {
        return (<svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 898 542"
            >
                <defs>
                    <clipPath id="clip-path">
                        <path className="cls-1"
                              d="M73.71,529.2a3.5,3.5,0,0,1-3.3-4.66l10.79-30.6L78,447.36,59,418.48a3.5,3.5,0,0,1,.08-4l36.37-50.9L75.2,329.19a3.5,3.5,0,0,1-.12-3.33l21.11-42.69-2-42.84a3.5,3.5,0,0,1,.23-1.42l18.22-47.36L116.8,169a3.5,3.5,0,0,1,6.88,1.26l-4.2,22.87a3.51,3.51,0,0,1-.18.63l-18.08,47,2,43a3.5,3.5,0,0,1-.36,1.71l-20.67,41.8L102.68,362a3.5,3.5,0,0,1-.17,3.81l-36.3,50.8,18.18,27.64A3.5,3.5,0,0,1,85,446l3.27,48.2a3.49,3.49,0,0,1-.19,1.4L77,526.86A3.5,3.5,0,0,1,73.71,529.2Z"/>
                    </clipPath>
                    <clipPath id="clip-path-2">
                        <path id="trackPath" className="cls-1"
                              d="M200.9,529.11h-.1a3.5,3.5,0,0,1-3.4-3.6l.91-31.82-20.09-36.21-27.06-21.42a3.5,3.5,0,0,1-1.21-3.63l19.2-73.06-29.9-26.16a3.5,3.5,0,0,1-1.16-3.16l7-46.58-15-39.62a3.5,3.5,0,0,1-.22-1.44l2.87-50.09-3-22.45a3.5,3.5,0,1,1,6.94-.91l3,22.78a3.51,3.51,0,0,1,0,.66L137,242.07l15,39.78a3.5,3.5,0,0,1,.19,1.76L145.3,329.2l30.08,26.32a3.5,3.5,0,0,1,1.08,3.52L157.3,432l25.81,20.43a3.5,3.5,0,0,1,.89,1l20.89,37.66a3.5,3.5,0,0,1,.44,1.8l-.94,32.78A3.5,3.5,0,0,1,200.9,529.11Z"/>
                    </clipPath>
                    <clipPath id="clip-path-3">
                        <path className="cls-1"
                              d="M259.23,527.92h-.11a3.5,3.5,0,0,1-3.39-3.6l1-34.28a3.51,3.51,0,0,1,.48-1.67l22.48-38.09-21.94-26.76a3.5,3.5,0,0,1-.27-4.07l23.75-38.24-20.77-50.74a3.5,3.5,0,0,1,.11-2.9l28.64-56.78-9-15.09a3.5,3.5,0,0,1-.34-2.82l18-58.65-6.5-21.86a3.5,3.5,0,0,1,6.71-2l6.8,22.87a3.5,3.5,0,0,1,0,2L287,253.43l9.21,15.41a3.5,3.5,0,0,1,.12,3.37l-28.79,57.08,20.85,50.92a3.5,3.5,0,0,1-.27,3.17L264.78,421l21.91,26.71a3.5,3.5,0,0,1,.31,4l-23.27,39.42-1,33.38A3.5,3.5,0,0,1,259.23,527.92Z"/>
                    </clipPath>
                    <clipPath id="clip-path-4">
                        <path className="cls-1"
                              d="M356.41,528.83a3.51,3.51,0,0,1-3.46-4l6.66-42-25.67-26.41a3.5,3.5,0,0,1-1-2.07l-4.61-42.85a3.5,3.5,0,0,1,.25-1.71l25-60.35-32.39-45a3.5,3.5,0,0,1-.58-2.76l9.75-46.43L320.71,247a3.5,3.5,0,0,1-1.24-2.94l2.82-37.47-16.58-33.93a3.5,3.5,0,0,1,6.29-3.07l17,34.78a3.5,3.5,0,0,1,.35,1.8l-2.76,36.63,9.91,8.32a3.5,3.5,0,0,1,1.17,3.4l-9.86,47,32.62,45.33a3.5,3.5,0,0,1,.39,3.38l-25.4,61.33,4.38,40.76,26.05,26.8a3.5,3.5,0,0,1,.95,3l-6.94,43.78A3.5,3.5,0,0,1,356.41,528.83Z"/>
                    </clipPath>
                    <clipPath id="clip-path-5">
                        <path className="cls-1"
                              d="M453.46,529.27a3.5,3.5,0,0,1-3.3-4.66L460.94,494l-3.22-44.47a3.5,3.5,0,0,1,.19-1.42l10-28.37-21.78-51.5a3.5,3.5,0,0,1,.11-3l18.38-36.06,11-41.43-25.91-32.37a3.5,3.5,0,0,1,0-4.32l42.74-55.58-15.25-20.75a3.5,3.5,0,1,1,5.64-4.14l16.8,22.87a3.5,3.5,0,0,1,0,4.21L456.9,253.2l25.3,31.6a3.5,3.5,0,0,1,.65,3.08l-11.51,43.5a3.48,3.48,0,0,1-.27.69L453.27,367l21.67,51.25a3.5,3.5,0,0,1,.08,2.53l-10.26,29L468,494.23a3.5,3.5,0,0,1-.19,1.42l-11,31.28A3.5,3.5,0,0,1,453.46,529.27Z"/>
                    </clipPath>
                    <clipPath id="clip-path-6">
                        <path className="cls-1"
                              d="M580.64,529.18h-.1a3.5,3.5,0,0,1-3.41-3.59l.91-34-20.22-45.15-26.93-21.32a3.5,3.5,0,0,1-1.16-3.82l19.1-59.16-25.08-26.08a3.5,3.5,0,0,1-.94-2.95l7-46.38-19.78-39.48a3.5,3.5,0,0,1-.37-1.77l2.87-50.09-3-22.45a3.5,3.5,0,1,1,6.94-.91l3,22.78a3.43,3.43,0,0,1,0,.66L516.74,245l19.86,39.64a3.5,3.5,0,0,1,.33,2.09L530,332.46l25.33,26.34a3.5,3.5,0,0,1,.81,3.5l-19,58.84,25.7,20.34a3.51,3.51,0,0,1,1,1.31l20.89,46.66a3.5,3.5,0,0,1,.3,1.52l-.94,34.78A3.5,3.5,0,0,1,580.64,529.18Z"/>
                    </clipPath>
                    <clipPath id="clip-path-7">
                        <path className="cls-1"
                              d="M689.64,528.58a3.48,3.48,0,0,1-1.82-.51l-36.93-22.58a3.5,3.5,0,0,1-1.51-4l17.29-54.33-20-29.22a3.5,3.5,0,0,1-.36-3.29l20.8-51.46-20.57-34.9a3.5,3.5,0,0,1,.12-3.74l28.5-42-16.38-44.05a3.5,3.5,0,0,1,.83-3.72l37.49-36.82,4-29.69a3.5,3.5,0,1,1,6.94.94L703.87,200a3.5,3.5,0,0,1-1,2L666.13,238.1l16.22,43.62a3.5,3.5,0,0,1-.38,3.18L653.7,326.58,674,361.06a3.5,3.5,0,0,1,.23,3.09l-20.75,51.32,19.9,29.08a3.5,3.5,0,0,1,.45,3l-17,53.35,34.59,21.15a3.5,3.5,0,0,1-1.83,6.49Z"/>
                    </clipPath>
                    <clipPath id="clip-path-8">
                        <path className="cls-1"
                              d="M785.25,529.13a3.49,3.49,0,0,1-2.46-1l-32.06-31.78a3.5,3.5,0,0,1-1-3.26l11.62-51.51-25.88-20.48a3.5,3.5,0,0,1-1-4.15l18.74-42.85-29.66-26.89a3.5,3.5,0,0,1-1.13-3l7.18-62.48a3.51,3.51,0,0,1,.15-.7l12.36-37.38-13.7-42.16-13.92-31.62A3.5,3.5,0,0,1,720.9,167l14,31.78c0,.11.09.22.13.33l14.11,43.42a3.51,3.51,0,0,1,0,2.18l-12.61,38.13-6.93,60.34,30.19,27.38a3.5,3.5,0,0,1,.86,4L742,417.27l25.49,20.18A3.5,3.5,0,0,1,768.7,441L757,492.73l30.69,30.42a3.5,3.5,0,0,1-2.46,6Z"/>
                    </clipPath>
                    <clipPath id="r_score_text_clip">
                        <rect id="r_score_text_mask" x="50" y="320" width="100" height="80"/>
                    </clipPath>

                    <clipPath id="p_score_text_clip">
                        <rect id="p_score_text_mask" x="50" y="320" width="100" height="80"/>
                    </clipPath>

                    <clipPath id="i_score_text_clip">
                        <rect id="i_score_text_mask" x="50" y="320" width="100" height="80"/>
                    </clipPath>

                    <clipPath id="t_score_text_clip">
                        <rect id="t_score_text_mask" x="50" y="320" width="100" height="80"/>
                    </clipPath>


                    <clipPath id="r_bench_text_clip">
                        <rect id="r_bench_text_mask" x="50" y="320" width="100" height="80"/>
                    </clipPath>

                    <clipPath id="p_bench_text_clip">
                        <rect id="p_bench_text_mask" x="50" y="320" width="100" height="80"/>
                    </clipPath>

                    <clipPath id="i_bench_text_clip">
                        <rect id="i_bench_text_mask" x="50" y="320" width="100" height="80"/>
                    </clipPath>

                    <clipPath id="t_bench_text_clip">
                        <rect id="t_bench_text_mask" x="50" y="320" width="100" height="80"/>
                    </clipPath>

                    <linearGradient id="Gold_02" x1="751" y1="534" x2="751" y2="164" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#ba7802"/>
                        <stop offset="0.18" stopColor="#d19b2d"/>
                        <stop offset="0.39" stopColor="#ebc15d"/>
                        <stop offset="0.5" stopColor="#f5d06f"/>
                        <stop offset="0.61" stopColor="#ebc15d"/>
                        <stop offset="0.82" stopColor="#d19b2d"/>
                        <stop offset="1" stopColor="#ba7802"/>
                    </linearGradient>
                    <g id="pin">
                        <path className="cls-123"
                              d="M9.93,27.08,9,26c-.92-1.1-9-10.93-9-16a9.93,9.93,0,1,1,19.85,0c0,5.1-8.08,14.93-9,16Zm0-24.66A7.51,7.51,0,0,0,2.42,9.93c0,3.18,4.79,9.9,7.51,13.34,2.72-3.44,7.51-10.16,7.51-13.34A7.51,7.51,0,0,0,9.93,2.42Z"/>
                        <path className="cls-123"
                              d="M9.93,13.6a4.15,4.15,0,1,1,4.15-4.15A4.16,4.16,0,0,1,9.93,13.6Zm0-5.88a1.73,1.73,0,1,0,1.73,1.73A1.73,1.73,0,0,0,9.93,7.72Z"/>
                    </g>
                </defs>
                <title>Asset 1</title>
                <g id="graphics">
                    <g id="bg_layer">
                        <image width="1796" height="1084" transform="scale(0.5)"
                               xlinkHref="/wp-content/themes/amec-m3/images/mountain_bg.png"/>
                    </g>
                    <g id="guides">
                        <polyline id="r_bench_guide" data-name="Reporting Path" className="cls-1"
                                  points="119.24 168.63 115.05 191.5 96.71 239.17 98.72 282.91 77.21 326.42 98.66 362.81 60.97 415.56 80.47 445.21 83.74 493.41 72.71 524.69"/>
                        <polyline id="r_score_guide" data-name="Reporting Path" className="cls-1"
                                  points="132.34 168.42 135.34 191.2 132.45 241.62 147.73 282.09 140.55 329.57 172.08 357.16 152.33 432.31 179.94 454.16 200.83 491.82 199.89 524.61"/>
                        <polyline id="p_bench_guide" data-name="Reporting Path" className="cls-1"
                                  points="293.76 170.36 300.56 193.23 282.22 252.89 292.24 269.64 262.73 328.14 284.18 380.53 259.49 420.29 282.98 448.94 259.25 489.13 258.23 523.42"/>
                        <polyline id="p_score_guide" data-name="Reporting Path" className="cls-1"
                                  points="307.86 170.15 324.85 204.92 321.96 243.34 333.24 252.81 323.07 301.3 356.59 347.88 330.85 410.04 335.45 452.89 362.35 480.55 355.41 524.33"/>
                        <polyline id="i_bench_guide" data-name="Reporting Path" className="cls-1"
                                  points="478.99 171.7 495.79 194.58 451.45 252.24 478.47 285.99 466.96 329.49 448.41 365.88 470.72 418.63 460.21 448.28 463.49 493.48 452.46 524.77"/>
                        <polyline id="i_score_guide" data-name="Reporting Path" className="cls-1"
                                  points="512.09 171.49 515.09 194.27 512.2 244.69 532.47 285.16 525.3 332.64 551.82 360.23 532.08 421.38 559.68 443.23 580.58 489.9 579.64 524.68"/>
                        <polyline id="t_bench_guide" data-name="Reporting Path" className="cls-1"
                                  points="703.6 167.66 699.4 198.53 661.06 236.2 678.07 281.94 648.56 325.44 670.01 361.84 648.56 414.9 669.52 445.53 651.72 501.49 688.65 524.08"/>
                        <polyline id="t_score_guide" data-name="Reporting Path" className="cls-1"
                                  points="716.7 167.45 730.69 199.23 744.8 242.65 732.08 281.12 724.9 343.6 756.43 372.19 736.68 417.34 764.29 439.19 752.18 492.85 784.25 524.63"/>
                    </g>
                    <g id="rect_layer">
                        <g className="cls-2">
                            <rect id="r_bench_rect" visibility="hidden" className="cls-3" x="48" y="164" width="78"
                                  height="370"/>
                        </g>
                        <g className="cls-4">
                            <rect id="r_score_rect" visibility="hidden" className="cls-5" x="129" y="164" width="78"
                                  height="370"/>
                        </g>
                        <g className="cls-6">
                            <rect id="p_bench_rect" visibility="hidden" className="cls-3" x="228" y="164" width="78"
                                  height="370"/>
                        </g>
                        <g className="cls-7">
                            <rect id="p_score_rect" visibility="hidden" className="cls-8" x="306" y="164" width="78"
                                  height="370"/>
                        </g>
                        <g className="cls-9">
                            <rect id="i_bench_rect" visibility="hidden" className="cls-3" x="430" y="164" width="78"
                                  height="370"/>
                        </g>
                        <g className="cls-10">
                            <rect id="i_score_rect" visibility="hidden" className="cls-11" x="508" y="164" width="78"
                                  height="370"/>
                        </g>
                        <g className="cls-12">
                            <rect id="t_bench_rect" visibility="hidden" className="cls-3" x="633" y="164" width="78"
                                  height="370"/>
                        </g>
                        <g className="cls-13">
                            <rect id="t_score_rect" visibility="hidden" className="cls-14" x="712" y="164" width="78"
                                  height="370"/>
                        </g>

                    </g>

                    <g id="floaters">

                        <circle id="r_score_circ" className="path-end-circle" visibility="visible" cx="130" cy="-20"
                                r="6"
                                stroke="#ec4d60"/>
                        <circle id="p_score_circ" className="path-end-circle" visibility="visible" cx="306" cy="-20"
                                r="6"
                                stroke="#39d348"/>
                        <circle id="i_score_circ" className="path-end-circle" visibility="visible" cx="508" cy="-20"
                                r="6"
                                stroke="#4e69ea"/>
                        <circle id="t_score_circ" className="path-end-circle" visibility="visible" cx="710" cy="-20"
                                r="6"
                                stroke="#ba7802"/>

                        <circle id="r_bench_circ" className="path-end-circle" visibility="visible" cx="50" cy="-20" r="6"
                                stroke="#91999d"/>
                        <circle id="p_bench_circ" className="path-end-circle" visibility="visible" cx="230" cy="-20"
                                r="6"
                                stroke="#91999d"/>
                        <circle id="i_bench_circ" className="path-end-circle" visibility="visible" cx="430" cy="-20"
                                r="6"
                                stroke="#91999d"/>
                        <circle id="t_bench_circ" className="path-end-circle" visibility="visible" cx="630" cy="-20"
                                r="6"
                                stroke="#91999d"/>

                        <use id="r_score_pin" href="#pin" x="0" y="0"/>
                        <use id="p_score_pin" href="#pin" x="0" y="0"/>
                        <use id="i_score_pin" href="#pin" x="0" y="0"/>
                        <use id="t_score_pin" href="#pin" x="0" y="0"/>

                        <g id="benchmark_labels">
                            <g id="r_bench_text_container" clipPath="url(#r_bench_text_clip)">
                                <g id="r_bench_text_grp" transform="translate(50 200)">
                                    <text x="0" y="0" fontSize="14" fill="#91999d" textAnchor="end">
                                        <tspan id="r_bench_text_pc" x="50" dy="1em">58%</tspan>
                                    </text>
                                </g>
                            </g>

                            <g id="p_bench_text_container" clipPath="url(#p_bench_text_clip)">
                                <g id="p_bench_text_grp" transform="translate(50 200)">
                                    <text x="0" y="0" fontSize="14" fill="#91999d" textAnchor="end">
                                        <tspan id="p_bench_text_pc" x="50" dy="1em">58%</tspan>
                                    </text>
                                </g>
                            </g>

                            <g id="i_bench_text_container" clipPath="url(#i_bench_text_clip)">
                                <g id="i_bench_text_grp" transform="translate(50 200)">
                                    <text x="0" y="0" fontSize="14" fill="#91999d" textAnchor="end">
                                        <tspan id="i_bench_text_pc" x="50" dy="1em">58%</tspan>
                                    </text>
                                </g>
                            </g>

                            <g id="t_bench_text_container" clipPath="url(#t_bench_text_clip)">
                                <g id="t_bench_text_grp" transform="translate(50 200)">
                                    <text x="0" y="0" fontSize="14" fill="#91999d" textAnchor="end">
                                        <tspan id="t_bench_text_pc" x="50" dy="1em">58%</tspan>
                                    </text>
                                </g>
                            </g>
                        </g>

                        <g id="score_labels">
                            <g id="r_score_text_container" clipPath="url(#r_score_text_clip)">
                                <g id="r_score_text_grp" transform="translate(50 200)">
                                    <text x="0" y="0" fontSize="20" fill="#fff">
                                        <tspan x="0" dy=".6em" fontSize=".6em">Reporting</tspan>
                                        <tspan id="r_score_text_pc" x="0" dy="1em">58%</tspan>
                                    </text>
                                </g>
                            </g>

                            <g id="p_score_text_container" clipPath="url(#p_score_text_clip)">
                                <g id="p_score_text_grp" transform="translate(50 200)">
                                    <text x="0" y="0" fontSize="20" fill="#fff">
                                        <tspan x="0" dy=".6em" fontSize=".6em">Planning</tspan>
                                        <tspan id="p_score_text_pc" x="0" dy="1em">58%</tspan>
                                    </text>
                                </g>
                            </g>

                            <g id="i_score_text_container" clipPath="url(#i_score_text_clip)">
                                <g id="i_score_text_grp" transform="translate(50 200)">
                                    <text x="0" y="0" fontSize="20" fill="#fff">
                                        <tspan x="0" dy=".6em" fontSize=".6em">Impact</tspan>
                                        <tspan id="i_score_text_pc" x="0" dy="1em">58%</tspan>
                                    </text>
                                </g>
                            </g>

                            <g id="t_score_text_container" clipPath="url(#t_score_text_clip)">
                                <g id="t_score_text_grp" transform="translate(50 200)">
                                    <text x="0" y="0" fontSize="20" fill="#fff">
                                        <tspan x="0" dy=".6em" fontSize=".6em">Total</tspan>
                                        <tspan id="t_score_text_pc" x="0" dy="1em">58%</tspan>
                                    </text>
                                </g>
                            </g>
                        </g>

                    </g>
                </g>

            </svg>
        )
    };
};

ScoreGraphic.propTypes = {
    scores: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        benchmarkScore: PropTypes.number.isRequired,
    })),
};

export default ScoreGraphic