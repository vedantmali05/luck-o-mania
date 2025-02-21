import { useState } from "react";
import PropTypes from "prop-types";
import IconButton from "./components/IconButton";

const PickerListView = ({ title = "", listItems = [] }) => {

    const [pickerList, setPickerList] = useState(listItems);

    // Functions to reorder list using Mouse Events
    let isDragging = false;

    // Function to start dragging
    function dragStart(index) {
        isDragging = true;
        console.log("Down", index)
    }

    // Function to end dragging
    function dragEnd(index) {
        isDragging = false;
        console.log("Up", index)
    }

    // Function to reorder after dropping
    function dragDrop(index) {
        if (isDragging) {
            console.log("Move", index)
        }
    }


    // Function to delete an item
    function deleteItem(index) {
        const updatedList = pickerList.filter((item) => item.id !== index)
        setPickerList(updatedList);
    }


    return (
        <section className="picker-list-view">
            <h2 className="fs-700">{title}</h2>

            <ul className="picker-list">
                {
                    pickerList.map((item, index) => (
                        <li key={item.id}>
                            <IconButton
                                icon="bi-grip-vertical"
                                className="drag-btn"
                                onMouseDown={() => dragStart(item.id)}
                                onMouseUp={() => dragEnd(item.id)}
                                onMouseMove={() => dragDrop(item.id)}
                            />
                            <div>{item.title}</div>
                            <IconButton icon="bi-x" onClick={() => { deleteItem(item.id) }} />
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}


PickerListView.propTypes = {
    title: PropTypes.string.isRequired,
    listItems: PropTypes.array
}


export default PickerListView