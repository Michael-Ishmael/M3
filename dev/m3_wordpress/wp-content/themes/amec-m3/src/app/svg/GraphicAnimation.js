import {Power2, TweenLite} from "gsap/TweenLite";
import {TimelineLite} from "gsap";
import {Bounce} from "gsap/EasePack"


export const playScores = (scores) => {

    const scoreObj = scoreArrayToObject(scores);
    let dur = .8;
    const masterTl = new TimelineLite();
    masterTl
        .add(getScoreTl("r_score", scoreObj["r_score"], dur))
        .add(getScoreTl("p_score", scoreObj["p_score"], dur))
        .add(getScoreTl("i_score", scoreObj["i_score"], dur))
        .add(getScoreTl("t_score", scoreObj["t_score"], dur))
        .delay(2).play();

    playBenchmarks(scores, 8);


};

export const playBenchmarks = (scores, delay) => {

    delay = delay || 1;
    const scoreObj = scoreArrayToObject(scores);

    let dur = .5;
    const benchMasterTl = new TimelineLite();
    benchMasterTl
        .add(getScoreTl("r_bench", scoreObj["r_bench"], dur, true), 0)
        .add(getScoreTl("p_bench", scoreObj["p_bench"], dur, true), 0)
        .add(getScoreTl("i_bench", scoreObj["i_bench"], dur, true), 0)
        .add(getScoreTl("t_bench", scoreObj["t_bench"], dur, true), 0)
        .delay(delay).play();


};

const scoreArrayToObject = (scores) =>
    scores.reduce((obj, item) => {
        const prefix = descToPrefix(item.description);
        obj[prefix + "score"] = Math.round(item.score);
        obj[prefix + "bench"] = Math.round(item.benchmarkScore);
        return obj
    }, {});

const descToPrefix = (desc) => {

    switch (desc.toLowerCase()) {
        case "reporting":
            return "r_";
        case "planning":
            return "p_";
        case "impact":
            return "i_";
        case "total":
            return "t_";
        default:
            return "n_"
    }

};

const getScoreTl = (prefix, pcVal, dur, revText) => {

    dur = dur || 1;
    const percentage = Math.round(pcVal) / 100;
    let path = document.getElementById(`${prefix}_guide`);
    let pcTSpan = document.getElementById(`${prefix}_text_pc`);
    if (pcTSpan) pcTSpan.textContent = pcVal + "%";
    let y = getTargetY(percentage);
    let x = getXForY(path, y);

    let textX = revText ? x - 60 : x + 20;
    let pinX = x - 12;
    let pinY = y - 34;

    const textMaskLeft = revText ? x - 100 : x;
    const textGroupLeft = revText ? x + 20 : x - 100;
    const textMaskTop = revText ? y - 20 : y - 42;
    const textGroupTop = revText ? y - 10 : y - 32;

    TweenLite.set(`#${prefix}_text_mask`, {attr: {x: textMaskLeft, y: textMaskTop}});
    TweenLite.set(`#${prefix}_pin`, {x: pinX, y: -50});
    TweenLite.set(`#${prefix}_text_grp`, {x: textGroupLeft, y: textGroupTop});
    TweenLite.set(`#${prefix}_circ`, {attr: {cx: x, cy: -20}});

    const tl = new TimelineLite();
    tl.set(`#${prefix}_rect`, {
        scaleY: 0,
        rotation: 0.01,
        transformOrigin: "50% 100%",
        visibility: "visible"
    });
    tl.to(`#${prefix}_rect`, dur, {
        scaleY: percentage,
        rotation: 0.01,
        transformOrigin: "50% 100%",
        ease: Power2.easeOut,
        onUpdate: function () {
            let p = calculateEndPoint(path, this.target[0]);
            TweenLite.set(`#${prefix}_circ`, {attr: {cx: p.x, cy: p.y}})
        },
        /*        onComplete: function () {
                    let p = calculateEndPoint(path, this.target[0]);

                }*/
    })
        .to(`#${prefix}_pin`, dur, {
            x: function () {
                return pinX;
            }, y: function () {
                return pinY;
            },
            ease: Bounce.easeOut
        }, "-=0.5")
        .to(`#${prefix}_text_grp`, dur, {
            x: function () {
                return textX;
            }
        }, "-=0.5");

    return tl;
};


function getTargetY(pc) {

    const topX = 164, height = 370;
    return (topX + height) - (height * pc);

}


function calculateEndPoint(path, t) {
    let yOrigin = Number(t.attributes.y.value);
    let height = Number(t.attributes.height.value);
    let y = (yOrigin + height) - (height * t._gsTransform.scaleY);
    let x = getXForY(path, y);
    return {x, y}
}

function getXForY(pathNode, yVal) {
    let pathLength = pathNode.getTotalLength(),
        bestLength = 0,
        precision = 8,
        best,
        scanLength = 0,
        bestDistance = Infinity;

    while (scanLength < pathLength) {
        let p = pathNode.getPointAtLength(scanLength);
        let scanDistance = yDistance(p);
        if (scanDistance < bestDistance) {
            bestDistance = scanDistance;
            bestLength = scanLength;
            best = p;
        }
        scanLength += precision;
    }

    precision /= 2;
    while (precision > 0.5) {

        let beforeLength = bestLength - precision;
        let before = pathNode.getPointAtLength(beforeLength);
        let beforeDistance = yDistance(before);

        let afterLength = bestLength + precision;
        let after = pathNode.getPointAtLength(afterLength);
        let afterDistance = yDistance(after);

        if (beforeLength >= 0 && beforeDistance < bestDistance) {
            best = before;
            bestLength = beforeLength;
            bestDistance = beforeDistance;
        } else if (afterLength <= pathLength && afterDistance < bestDistance) {
            best = after;
            bestLength = afterLength;
            bestDistance = afterDistance;
        } else {
            precision /= 2;
        }

    }

    function yDistance(p) {
        let dy = p.y - yVal;
        return dy * dy;
    }

    return best.x;

}