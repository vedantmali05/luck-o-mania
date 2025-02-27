import { useRef } from "react";

const SpinningWheel = ({ activeList }) => {
    const wheelRef = useRef();
    let items = activeList.items;

    // Constants (Now Dynamic)
    const numSegments = items.length;
    const baseSize = 400; // Base SVG size
    const scaleFactor = 5; // Adjust this to control scaling sensitivity

    // **Dynamic SVG Size & Center**
    const svgSize = baseSize + numSegments * scaleFactor;
    const center = svgSize / 2;

    // **Dynamic Donut Radius**
    const radius = 200 + numSegments * 1.5; // Outer radius grows
    const innerRadius = 130 + numSegments * 1.5; // Inner radius grows

    const gapAngle = 2; // Small gap between segments

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


    return (
        <section className={`spinning-wheel-sec ${activeList ? "active" : ""}`}>
            <h2 className="fs-500">Spinning Wheel Picker</h2>
            <div className="wheel-ctr">
                <svg width={svgSize} height={svgSize} viewBox={`0 0 ${svgSize} ${svgSize}`}>

                    {items.map((item, index) => (
                        <g key={index} className="wheel-item">
                            <path
                                d={createSegmentPath(index)}
                                fill={index % 2 === 0 ? "red" : "royalblue"}
                                stroke="white"
                                strokeWidth="2"
                            />
                            <path id={`textPath-${index}`} d={createTextPath(index, item.title)} fill="none" />
                            <text fill="white">
                                <textPath href={`#textPath-${index}`}>
                                    {item.title}
                                </textPath>
                            </text>
                        </g>
                    ))}
                </svg>
            </div>
        </section>
    );
};

export default SpinningWheel;
