import React from 'react'
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import querystring from 'querystring';

const query = querystring.parse(window.location.search.slice(1));
console.log(query)
const numberOfSlides = parseInt(query.slidesNum, 10) || 20;
console.log('numberOfSlides--',numberOfSlides)
const paneNodes = Array.apply(null, Array(numberOfSlides)).map((_, i) => {
    return (
        <div key={i}>
            <div className="item">{i}</div>
        </div>
    );
});

console.log('paneNodes--',paneNodes)

// change Swipe.js options by query params
const startSlide = parseInt(query.startSlide, 10) || 0;
console.log(startSlide)
const swipeOptions = {
    startSlide: startSlide < paneNodes.length && startSlide >= 0 ? startSlide : 0,
    auto: parseInt(query.auto, 10) || 0,
    speed: parseInt(query.speed, 10) || 300,
    disableScroll: query.disableScroll === 'true',
    continuous: query.continuous === 'true',
    callback() {
        console.log('slide changed');
    },
    transitionEnd() {
        console.log('ended transition');
    }
};

console.log(swipeOptions)


class Carousel extends React.Component {
    render() {
        return (
            <ReactSwipe className="carousel" swipeOptions={{continuous: true}}>
                {{paneNodes}}
            </ReactSwipe>
        );
    }
}

module.exports = Carousel;