import { useRef, useState } from "react";
import CTAButton from "./components/CTAButton.jsx";

const PickerWheel = ({ activeList }) => {
    const wheelRef = useRef();
    const currentItemRef = useRef();

    let frequency = {};
    let selectedItem = null;
    let clickCount = 0;

    let items = activeList.items;

    // Wheel Rotation
    const [randomRotateVal, setRandomRotateVal] = useState(0);

    function getRandomRotateVal() {
        let angles = Array.from({ length: 360 }, (_, i) => i); // Create an array [0, 1, 2, ..., 359]

        for (let i = angles.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // Pick a random index
            [angles[i], angles[j]] = [angles[j], angles[i]]; // Swap
        }

        return angles[0]; // Pick the first value after shuffle
    }


    // Function to get the top element
    function logTopElement() {
        const segmentAngle = 360 / items.length; // Angle per segment
        let normalizedAngle = randomRotateVal % 360; // Get angle within 0-360

        // Find the segment at the top
        const topIndex = Math.round(normalizedAngle / segmentAngle) % items.length;

        console.log("Top Element:", items[topIndex]?.title);
    }

    // Constants (Now Dynamic)
    const numSegments = items.length;
    const baseSize = 400; // Base SVG size
    const scaleFactor = 5; // Adjust this to control scaling sensitivity

    // **Dynamic SVG Size & Center**
    const svgSize = baseSize + numSegments * scaleFactor;
    const center = svgSize / 2;

    // **Dynamic Donut Radius**
    const radius = 200 + numSegments * 1.5; // Outer radius grows
    const innerRadius = 80 + numSegments; // Inner radius grows

    const gapAngle = .5; // Small gap between segments

    // Function to create path for each segment
    const createSegmentPath = (index) => {
        const totalAngle = 360 / numSegments;
        const angle = totalAngle - gapAngle;
        const startAngle = index * totalAngle;
        const endAngle = startAngle + angle;

        const radians = (deg) => (Math.PI / 180) * deg;

        // Start and End points for outer arc
        const x1 = center + radius * Math.cos(radians(startAngle));
        const y1 = center + radius * Math.sin(radians(startAngle));
        const x2 = center + radius * Math.cos(radians(endAngle));
        const y2 = center + radius * Math.sin(radians(endAngle));

        // Start and End points for inner arc
        const x3 = center + innerRadius * Math.cos(radians(endAngle));
        const y3 = center + innerRadius * Math.sin(radians(endAngle));
        const x4 = center + innerRadius * Math.cos(radians(startAngle));
        const y4 = center + innerRadius * Math.sin(radians(startAngle));

        // Large arc flag (always 0 for equal segments < 180°)
        const largeArc = angle > 180 ? 1 : 0;

        return `
            M ${x1} ${y1} 
            A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}
            L ${x3} ${y3} 
            A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4}
            Z
        `;
    };

    const createTextPath = (index, text) => {
        text = truncateText(text, index)
        const segmentAngle = 360 / numSegments;
        const angle = (index * segmentAngle) + (segmentAngle / 2); // Middle of segment
        const radians = (deg) => (Math.PI / 180) * deg;
        const textRadius = (radius + innerRadius) / 2; // Midway on donut

        // Approximate text width based on font size
        const estimatedTextWidth = text.length * 7; // ~7px per character
        const arcSpread = Math.min((estimatedTextWidth / textRadius) * (180 / Math.PI), segmentAngle - 5);

        // Ensure a minimum arc spread for visibility
        const minArcSpread = 10; // Prevents text from disappearing
        const adjustedArcSpread = Math.max(arcSpread, minArcSpread);

        // Calculate the start and end points of the arc
        const x1 = center + textRadius * Math.cos(radians(angle - adjustedArcSpread / 2));
        const y1 = center + textRadius * Math.sin(radians(angle - adjustedArcSpread / 2));
        const x2 = center + textRadius * Math.cos(radians(angle + adjustedArcSpread / 2));
        const y2 = center + textRadius * Math.sin(radians(angle + adjustedArcSpread / 2));

        return `M ${x1} ${y1} A ${textRadius} ${textRadius} 0 0 1 ${x2} ${y2}`;
    };


    const truncateText = (text, index) => {
        const segmentAngle = 360 / numSegments; // Angle per segment
        const textRadius = (radius + innerRadius) / 2; // Midway on donut
        const arcLength = (Math.PI * textRadius * segmentAngle) / 180; // Arc length in pixels

        const charWidth = 7; // Approximate character width in pixels (adjust if needed)
        const maxChars = Math.floor(arcLength / charWidth); // Max characters that fit

        return text.length > maxChars ? text.slice(0, maxChars - 4) + "..." : text;
    };

    return (
        <section className={`picker-wheel-sec ${activeList ? "active" : ""}`}>
            <section className="flex">

                <div className="col-left">
                    <h2 className="fs-500">Spinning Wheel Picker</h2>

                    <p className="current-item" ref={currentItemRef}>
                        <span>
                            Lorem ipsum dolor sit amet.
                        </span>
                    </p>

                    <div className="wheel-ctr">
                        <div className="wheel" ref={wheelRef}>
                            <svg
                                width={"100%"}
                                height={"100%"}
                                viewBox={`0 0 ${svgSize} ${svgSize}`}
                                className="wheel-svg">

                                <g transform={`rotate(${-90 - (360 / numSegments)})`} transform-origin={`${center} ${center}`}>
                                    {items.map((item, index) => (
                                        <g key={index}>
                                            <path
                                                d={createSegmentPath(index)}
                                                className="wheel-item"
                                                stroke="white"
                                                strokeWidth="2"
                                                fill="hsl(var(--clr-neutral-400))"
                                                title={item.title}
                                            // onMouseEnter={(e) => {
                                            //     console.log("Hello ")
                                            //     console.log(e.target.getAttribute("title"))
                                            // }}
                                            />

                                            <path id={`textPath-${index}`} d={createTextPath(index, item.title)} fill="none" />
                                            <text
                                                className="wheel-item-text"
                                                fontSize={activeList.items.length > 10 ? 12 : 14}
                                                textAnchor="middle" dominantBaseline="middle"
                                            >
                                                <textPath href={`#textPath-${index}`} startOffset="50%">
                                                    {truncateText(item.title, index)}
                                                </textPath>
                                            </text>
                                        </g>
                                    ))}
                                </g>
                            </svg>
                        </div>
                        <CTAButton
                            label={"Spin"}
                            className="primary spin-picker-wheel-btn"
                            onClick={() => {
                                wheelRef.current.style.rotate = `${0}deg`;
                                clickCount++;
                                let arcAngle = 360 / activeList.items.length;
                                let initialSpeed = 100; // Start speed (degrees per frame)
                                let decelerationFactor = .98; // How fast it slows down

                                let finalAngle = getRandomRotateVal(); // Choose a random stop position
                                let currentRotation = 0;
                                let speed = initialSpeed;

                                function animateSpin() {

                                    if (speed <= 2 && (finalAngle == Math.floor(currentRotation) || (finalAngle >= Math.floor(currentRotation) - 5 && finalAngle <= Math.floor(currentRotation) + 5))) {
                                        // Stop when speed is very low and we're near the final position
                                        wheelRef.current.style.rotate = `${finalAngle}deg`;
                                        if (!frequency[selectedItem]) frequency[selectedItem] = 1;
                                        else frequency[selectedItem] += 1;
                                        console.log(clickCount);
                                        console.log(frequency);
                                        return;
                                    }

                                    currentRotation = (currentRotation + speed) % 360;
                                    wheelRef.current.style.rotate = `${currentRotation}deg`;

                                    selectedItem =
                                        activeList.items[
                                            (activeList.items.length - Math.floor(currentRotation / arcAngle)) % activeList.items.length
                                        ].title;
                                    currentItemRef.current.innerHTML = `<span>${selectedItem}</span>`;

                                    // Reduce speed gradually but ensure it moves towards finalAngle
                                    speed *= decelerationFactor;
                                    if (speed < 2) speed = 2; // Prevents it from stopping too early

                                    requestAnimationFrame(animateSpin);
                                }

                                requestAnimationFrame(animateSpin);

                            }}
                        />


                    </div>
                </div>
                <div className="col-right">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eaque error fuga consectetur quaerat ex mollitia iste beatae est sequi iusto, amet dolorem eum debitis magnam repudiandae enim odio. Reprehenderit, adipisci sint rerum nulla quam nisi! Quod debitis consequatur voluptates, error cupiditate facilis at et rem unde rerum suscipit, deleniti aperiam dolores nulla non eaque ea, quibusdam sit voluptatem magni eum? Consequuntur, iure debitis voluptates distinctio natus exercitationem neque. Itaque, accusantium? Maxime nisi dolor cumque, eos dolores magnam possimus quasi repudiandae nobis, ipsum dolore reprehenderit quis! Quidem ducimus aperiam sint quam, rerum velit omnis nulla aliquid rem fugiat aliquam, architecto, fugit expedita. A ab quas porro placeat labore quo magnam assumenda libero at. Iste ab in corporis officiis eveniet nobis pariatur provident quasi ad ea sapiente quis nesciunt vitae quo iusto adipisci odit voluptates facilis repudiandae, consequuntur error aliquid? Ipsa ut perspiciatis eaque amet eveniet tempora veniam vel soluta, eos exercitationem sed sint quaerat? Facilis fugiat ipsum minus. Sit aliquid quis iusto? Ducimus nihil temporibus assumenda quidem aut. Iste voluptate ad doloremque repellendus, quasi aspernatur quod hic exercitationem. Quis corporis voluptates nemo a repellat ratione minus praesentium totam corrupti, vel quia commodi cupiditate! Veritatis deleniti eligendi vitae repellendus quas dolorum?
                </div>
            </section>
        </section>
    );
};

export default PickerWheel;
