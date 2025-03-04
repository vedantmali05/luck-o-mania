import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import CTAButton from "../components/common/CTAButton"
import IconButton from "../components/common/IconButton"
import PickerListCard from "../components/picker/PickerListCard";
import Tabs from "../components/common/Tabs";

const Home = ({ userPickerLists = [], presetPickerLists = [] }) => {

    let { activeList, setActiveList } = useContext(GlobalContext);

    let userPinnedPickerLists = userPickerLists.filter(list => list.pinned == true)
    userPickerLists = userPickerLists.filter(list => list.pinned != true);

    function createPickerListCards(list) {
        let wrapperContent = <></>;

        if (!list || list.length == 0)
            wrapperContent = <div className="empty-sec">Nothing to see here</div>;
        else
            wrapperContent = list.map((item, index) => (
                <PickerListCard
                    key={index}
                    cardData={item}
                    setActiveList={setActiveList} />
            ))

        return (
            <div className="list-cards-wrapper">
                {wrapperContent}
            </div>
        )
    }

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

            <Tabs tabs={
                [
                    {
                        button: <CTAButton label={""} icon={"bi-pin-angle-fill"} className="tab-btn" />,
                        content: createPickerListCards(userPinnedPickerLists),
                    },
                    {
                        button: <CTAButton label={"Your Lists"} className="tab-btn" />,
                        content: createPickerListCards(userPickerLists),
                    },
                    {
                        button: <CTAButton label={"Preset Lists"} className="tab-btn" />,
                        content: createPickerListCards(presetPickerLists),
                        isActive: true,
                    },
                ]
            } />


        </section>
    </>)
}

export default Home