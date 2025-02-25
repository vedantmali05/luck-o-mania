import PropTypes from "prop-types";
import IconButton from "./components/IconButton";

const PickerListCard = ({ cardData = {} }) => {

    if (!cardData.emoji) throw new Error("PickerListCard expects an emoji.")
    if (!cardData.title) throw new Error("PickerListCard expects a title.")

    // Create preview list
    let count = cardData.items.length;
    let previewList = null;

    if (!cardData.items || count == 0) {
        previewList = <span className="empty-list">Nothing to see here...</span>
    }
    else {
        previewList = cardData.items.map((item, i) => (
            <li key={i}>{item.title}</li>
        ))

    }

    // Format Item count string
    let countStr = `${count} item`
    if (count > 1) countStr += "s";
    else if (count <= 0) countStr = "Empty list."

    return (

        <div
            className="picker-list-card"
            onClick={() => console.log("Hello")}>

            {/* Preview */}
            <ul className="preview" aria-hidden="true">
                <span className="emoji-gradient">{cardData.emoji}</span>
                <div className="list">
                    {previewList}
                </div>
            </ul>

            <div className="details">
                {/* Emoji */}
                <span className="emoji">{cardData.emoji}</span>

                {/* Title and Count */}
                <div>
                    <div className="title" title={cardData.title} >{cardData.title}</div>
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