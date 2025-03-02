import PropTypes from "prop-types"
import PickerListEditor from "./PickerListEditor.jsx";
import IconButton from "../common/IconButton.jsx";

const PickerListDialog = ({ activeList, setActiveList }) => {

    return (
        <section
            className={`picker-list-dialog ${activeList ? "active" : ""}`}
        >
            <header>
                <div>
                    <h2 className="fs-500">Your Picker List</h2>
                    <IconButton
                        icon={"bi-x-lg"}
                        onClick={() => { setActiveList(null) }}
                    />
                </div>
            </header>

            {
                activeList &&
                <PickerListEditor listData={activeList} />
            }

        </section>
    )

}

PickerListDialog.propTypes =
{
    activeList: PropTypes.object,
    setActiveList: PropTypes.func.isRequired,
}



export default PickerListDialog;