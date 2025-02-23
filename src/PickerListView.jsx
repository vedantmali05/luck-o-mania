import { useState } from "react";
import PropTypes from "prop-types";
import IconButton from "./components/IconButton";

const PickerListView = ({ title = "", listItems = [] }) => {

    const [pickerList, setPickerList] = useState(listItems);

    // Functions to reorder list using Mouse Events
    let isDragging = false;
    let startY = 0;
    let offsetY = 0;
    let draggedItemId = null;

    // Function to start dragging
    function dragStart(index, liElem, e) {
        isDragging = true;
        draggedItemId = index;
        startY = e.clientY;
        offsetY = 0;
        liElem.classList.add("dragging");
    }

    // Function to end dragging
    function dragEnd(index, liElem) {
        isDragging = false;
        draggedItemId = null;
        liElem.classList.remove("dragging");
        liElem.style.setProperty("--y", 0);
    }

    // Function to reorder after dropping
    function dragDrop(index, liElem, e) {
        if (!isDragging) return

        offsetY = e.clientY - startY;
        liElem.style.setProperty("--y", offsetY + "px");
    }

    // Function to update an item
    function updateItem(index, newTitle) {
        pickerList.forEach((item) => {
            if (index == item.id) item.title = newTitle
        })
        setPickerList(pickerList);
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
                                onMouseDown={(e) => dragStart(item.id, e.target.closest("li"), e)}
                                onMouseUp={(e) => dragEnd(item.id, e.target.closest("li"), e)}
                                onMouseLeave={(e) => dragEnd(item.id, e.target.closest("li"), e)}
                                onMouseMove={(e) => dragDrop(item.id, e.target.closest("li"), e)}
                            />
                            <div
                                title={item.title}
                                contentEditable
                                suppressContentEditableWarning={true}
                                onInput={(e) => { updateItem(item.id, e.target.innerText) }}>
                                {item.title}
                            </div>
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