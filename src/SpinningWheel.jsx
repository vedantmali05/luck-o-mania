import { useState, useEffect, useRef } from "react";

const SpinningWheel = ({ activeList, x = 1000, y = 3000 }) => {
    const [wheels, setWheels] = useState([]);
    const wheelRef = useRef();

    useEffect(() => {
        if (!activeList) return;

        let count = 0;

        const addWheel = () => {
            const id = count++;
            setWheels(prev => [...prev, id]);

            setTimeout(() => {
                setWheels(prev => prev.filter(wheelId => wheelId !== id));
            }, (x * activeList.items.length));
        };

        const interval = setInterval(addWheel, (x * activeList.items.length) / 2);

        return () => clearInterval(interval);
    }, [activeList, x, y]);

    useEffect(() => {
        if (wheelRef.current) {
            const height = wheelRef.current.offsetHeight;
            wheelRef.current.style.setProperty("--wheel-height", `${height}px`);
        }
    }, [wheels]); // Update on new wheel addition


    return (
        <section className={`spinning-wheel-sec ${activeList ? "active" : ""}`}>
            <h2 className="fs-500">Spinning Wheel Picker</h2>

            <div className="wheel-ctr">
                {wheels.map(id => (
                    <div key={id + 1} className="wheel" ref={wheelRef}>
                        {
                            activeList.items.map((item, index) => (
                                <div key={index} className="wheel-item">{item.title}</div>
                            ))
                        }
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SpinningWheel;
