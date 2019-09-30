import React, { Component } from 'react'
import './style.css'
import ReactDOM from 'react-dom';
import logo1 from './../Img/dt1.jpg';
import logo2 from './../Img/dt2.jpg';
import logo3 from './../Img/dt3.jpg';
export default class HomeIndex extends Component {
    state = {
        slideIndex: 0,
        input: [
            { src: logo1, caption: "Caption one" },
            { src: logo2, caption: "Caption two" },
            { src: logo3, caption: "Caption three" },
            { src: logo3, caption: "Caption four" },
            { src: logo3, caption: "Caption five" },
            { src: logo3, caption: "Caption six" },
        ],
        ratio: "3:2"

    }

    constructor(props) {
        super(props);
        const ratio = this.state.ratio.split(":")
        this.ratioWH = ratio[0] / ratio[1]
    }

    getNewSlideIndex(step) {
        const { slideIndex } = this.state
        const inputLength = this.state.input.length
        const indexStep = slideIndex + step
        console.log(inputLength)
        console.log(indexStep)
        if (indexStep >= inputLength) {
            return 0
        }

        if (indexStep < 0) {
            return inputLength - 1

        }

        return indexStep;
    }


    backward = () => {
        this.setState({
            slideIndex: this.getNewSlideIndex(-1)
        })
    }
    forward = () => {
        this.setState({
            slideIndex: this.getNewSlideIndex(1)
        })
    }
    setSlideIndex = (index) => {
        this.setState({ slideIndex: index })
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
        if (this.automaticInterval) clearInterval(this.automaticInterval);
    }

    componentDidMount() {
        this.rootElm = ReactDOM.findDOMNode(this);
        this.containerElm = this.rootElm.querySelector(".container");
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
        const timeout = this.props.timeout || 5000;
        this.automaticInterval = setInterval(
            () => this.runAutomatic(),
            Number.parseInt(timeout)
        );

    }

    runAutomatic() {
        this.setState({
            slideIndex: this.getNewSlideIndex(1)
        });
    }

    updateDimensions() {
        if (this.containerElm)
            this.containerElm.style.height
                = `${this.containerElm.offsetWidth / this.ratioWH}px`;
    }


    render() {

        return (
            <div className="App">
                <div className="lp-slideshow">

                    <div className="container">
                        {

                            this.state.input.map((image, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={
                                            `slide ${this.state.slideIndex === index ? "active" : ""}`
                                        }
                                    >
                                        <div className="number-text">
                                            {`${index + 1} / ${this.state.input.length}`}
                                        </div>
                                        <img className="image" src={image.src} alt={image.caption} />
                                        <div className="caption-text">{image.caption}</div>
                                    </div>
                                )
                            })
                        }

                        <span className="prev" onClick={this.backward}>❮</span>
                        <span className="next" onClick={this.forward}>❯</span>
                    </div>

                    <div className="dot-container">
                        {
                            this.state.input.map((_, index) => {
                                return (
                                    <span
                                        key={index}
                                        className={
                                            `dot ${this.state.slideIndex === index ? "active" : ""}`
                                        }
                                        onClick={() => this.setSlideIndex(index)}
                                    >
                                    </span>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }


}
