import PropTypes from "prop-types";
import IconButton from "./components/IconButton";

const PickerListCard = ({ data = {} }) => {

    if (!data.emoji) throw new Error("PickerListCard expects an emoji.")
    if (!data.title) throw new Error("PickerListCard expects a title.")
    if (!data.count && data.count != 0) throw new Error("PickerListCard expects a count.")

    // Format Item count string
    let countStr = `${data.count} item`
    if (data.count > 1) countStr += "s";
    else if (data.count <= 0) countStr = "Empty list."


    return (

        <div
            className="picker-list-card"
            onClick={() => console.log("Hello")}>

            {/* Preview */}
            <div className="preview">
                <span className="emoji-gradient">{data.emoji}</span>
            </div>

            <div className="details">
                {/* Emoji */}
                <span className="emoji">{data.emoji}</span>

                {/* Title and Count */}
                <div>
                    <div className="title" title={data.title} >{data.title}</div>
                    <div className="count">{countStr}</div>
                </div>

                {/* Action button > */}
                <IconButton icon="bi-chevron-right" />
            </div>
        </div>
    );

}

PickerListCard.propTypes = {
    // data: PropTypes.object.isRequired
}


export default PickerListCard;