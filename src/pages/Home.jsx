import CTAButton from "../components/common/CTAButton"

const Home = () => {

    return (<>
        {/* Get Started Sec */}
        <section className="main-sec get-started-sec">
            <h2>Get Started</h2>

            <div className="sec-content">
                <CTAButton
                    icon={"☸️"}
                    iconType="emoji"
                    label={"Build & Spin"}
                    className="primary x-large build-btn" />

                <CTAButton
                    icon={"🎲"}
                    iconType="emoji"
                    label={"Other Tools"}
                    className="ghost x-large other-tools-btn" />

                <CTAButton
                    icon={"🎮"}
                    iconType="emoji"
                    label={"Mini Games"}
                    className="ghost x-large mini-games-btn" />
            </div>

        </section>

        <section className="main-sec all-lists-sec">
            <h2>All Lists</h2>

            
        </section>
    </>)
}

export default Home