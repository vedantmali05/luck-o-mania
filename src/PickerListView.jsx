import { useState, useRef } from "react";
import PropTypes from "prop-types";
import IconButton from "./components/IconButton";

const PickerListView = ({ title = "", listItems = [], allowInsertion = true }) => {

    const listTitleRef = useRef(null);
    const insertItemRef = useRef(null);

    const [pickerList, setPickerList] = useState(listItems);

    // Functions to reorder list using Mouse Events
    let isDragging = false;
    let startY = 0;
    let offsetY = 0;

    // Function to start dragging
    function dragStart(index, liElem, e) {
        isDragging = true;
        startY = e.clientY;
        offsetY = 0;
        liElem.classList.add("dragging");
    }

    // Function to end dragging
    function dragEnd(index, liElem, e) {
        isDragging = false;
        liElem.classList.remove("dragging");
        liElem.style.setProperty("--y", 0);

        let updatedList = [...pickerList];
        // Get the list container and all list items
        let parent = liElem.parentElement;
        let listItems = [...parent.children];

        // Find the closest element below the cursor
        let closest = listItems.reduce((closest, child) => {
            let box = child.getBoundingClientRect();
            let offset = Math.abs(e.clientY - box.top - box.height / 2);
            return offset < closest.offset ? { element: child, offset } : closest;
        }, { element: null, offset: Number.MAX_VALUE }).element;

        if (!closest) return;

        let newIndex = listItems.indexOf(closest);

        if (newIndex !== index) {
            let [movedItem] = updatedList.splice(index, 1);
            updatedList.splice(newIndex, 0, movedItem);
            setPickerList(updatedList);
        }
    }

    // Function to reorder after dropping
    function dragDrop(index, liElem, e) {
        if (!isDragging) return

        offsetY = e.clientY - startY;
        liElem.style.setProperty("--y", offsetY + "px");

    }

    // Function to add new item
    function insertItem() {
        if (!insertItemRef.current || !insertItemRef.current.value) return;

        let updatedList = [...pickerList];
        updatedList.push({
            title: insertItemRef.current.value.trim(),
            isActive: true
        })
        insertItemRef.current.value = "";
        setPickerList(updatedList);
    }

    // Function to update an item
    function updateItem(index, newTitle) {
        let updatedList = [...pickerList];
        updatedList.forEach((item, i) => {
            if (index == i) item.title = newTitle
        })
        setPickerList(p => updatedList);
    }

    // Function to delete an item
    function deleteItem(index) {
        const updatedList = pickerList.filter((item, i) => i !== index)
        setPickerList(updatedList);
    }

    return (
        <section className="picker-list-view" onScroll={(e) => {
            if (listTitleRef.current) {
                listTitleRef.current.classList.toggle("scrolled", e.target.scrollTop > listTitleRef.current.clientHeight)
            }
        }}>
            <h2 ref={listTitleRef}>{title}</h2>

            <ul className="picker-list">
                {
                    pickerList.map((item, index) => (
                        <li key={index}>
                            <IconButton
                                icon="bi-grip-vertical"
                                className="drag-btn"
                                onMouseDown={(e) => dragStart(index, e.target.closest("li"), e)}
                                onMouseUp={(e) => dragEnd(index, e.target.closest("li"), e)}
                                onMouseMove={(e) => dragDrop(index, e.target.closest("li"), e)}
                                disabled={pickerList.length <= 1}
                            />
                            <div
                                title={item.title} // This isn't being updated on updateItem
                                contentEditable
                                suppressContentEditableWarning={true}
                                onBlur={(e) => { updateItem(index, e.target.innerText) }}
                            >
                                {item.title}
                            </div>
                            <IconButton
                                icon="bi-x"
                                onClick={() => { deleteItem(index) }}
                                disabled={pickerList.length <= 1}
                            />
                        </li>
                    ))
                }
            </ul>

            {
                allowInsertion &&
                <div className="item-insertion-box">
                    <textarea
                        name="item_insertion"
                        id="item_insertion"
                        autoFocus={true}
                        placeholder="Add new item..."
                        onKeyDown={(e) => {
                            if (e.key == "Enter") {
                                e.preventDefault();
                                insertItem()
                            }
                        }}
                        ref={insertItemRef}
                    ></textarea>
                    <IconButton
                        icon="bi-arrow-up"
                        className="insert-btn"
                        onClick={insertItem} />
                </div>
            }
        </section>
    )
}


PickerListView.propTypes = {
    title: PropTypes.string.isRequired,
    listItems: PropTypes.array,
    allowInsertion: PropTypes.bool
}


export default PickerListView