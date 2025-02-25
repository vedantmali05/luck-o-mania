import { useState, useRef } from "react";
import PropTypes from "prop-types";
import IconButton from "./components/IconButton";

const PickerListView = ({ listData = {} }) => {

    if (!listData.emoji) throw new Error("PickerListView expects an emoji.")
    if (!listData.title) throw new Error("PickerListView expects a title.")
    if (!listData.items) listData.items = [];

    const listTitleRef = useRef(null);
    const insertItemRef = useRef(null);
    const pickerListViewRef = useRef(null);

    const [pickerListTitle, setPickerListTitle] = useState(listData.title);
    const [pickerList, setPickerList] = useState(listData.items);

    // /////////////////////
    // Functions to reorder list using Mouse Events
    // ////////////////////

    let isDragging = false;
    let startY = 0;
    let offsetY = 0;

    // Function to start dragging
    function dragStart(index, liElem, e) {
        if (listData.readonly) return;

        isDragging = true;
        startY = e.clientY;
        offsetY = 0;
        liElem.classList.add("dragging");
    }

    // Function to end dragging
    function dragEnd(index, liElem, e) {
        if (listData.readonly) return;

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
        if (listData.readonly || !isDragging) return

        offsetY = e.clientY - startY;
        liElem.style.setProperty("--y", offsetY + "px");

    }

    // Function to add new item
    function insertItem() {
        if (listData.readonly || !insertItemRef.current || !insertItemRef.current.value) return;

        let updatedList = [...pickerList];
        updatedList.push({
            title: insertItemRef.current.value.trim(),
            isActive: true
        })
        insertItemRef.current.value = "";
        setPickerList(updatedList);
        pickerListViewRef.current.scrollTop = pickerListViewRef.current.clientHeight + 64;
    }

    // Function to update an item
    function updateItem(index, newTitle) {
        if (listData.readonly) return;
        let updatedList = [...pickerList];
        updatedList.forEach((item, i) => {
            if (index == i) item.title = newTitle
        })
        setPickerList(p => updatedList);
    }

    // Function to delete an item
    function deleteItem(index) {
        if (listData.readonly) return;
        const updatedList = pickerList.filter((item, i) => i !== index)
        setPickerList(updatedList);
    }

    return (
        <section className="picker-list-view"
            ref={pickerListViewRef}
            // Handle Heading size on scrolls
            onScroll={(e) => {
                let heading = listTitleRef.current
                if (heading) {
                    heading.classList.toggle("scrolled", e.target.scrollTop > heading.clientHeight)
                }
            }}>

            {/* Heading (Title of the list) */}
            <h2
                ref={listTitleRef}
                contentEditable={!listData.readonly}
                suppressContentEditableWarning={true}
                onBlur={(e) => { setPickerListTitle(e.target.innerText.trim()) }}
                onKeyDown={(e) => { if (e.key == "Enter") e.preventDefault(); }}
            >{pickerListTitle}</h2>

            {/* PICKER LIST */}
            <ul className="picker-list">
                {
                    pickerList.map((item, index) => (
                        // Each item in the list
                        <li key={index}>

                            {/* Drag to reorder button */}
                            <IconButton
                                icon="bi-grip-vertical"
                                className="drag-btn"
                                // Disable drag button if list has only one item.
                                disabled={pickerList.length <= 1 || listData.readonly}


                                // Drag and drop
                                onMouseDown={(e) => dragStart(index, e.target.closest("li"), e)}
                                onMouseUp={(e) => dragEnd(index, e.target.closest("li"), e)}
                                onMouseMove={(e) => dragDrop(index, e.target.closest("li"), e)}
                            />

                            {/* Item contents */}
                            <div
                                // Editable Element
                                contentEditable={!listData.readonly}
                                suppressContentEditableWarning={true}
                                // Update on blur
                                onBlur={(e) => { updateItem(index, e.target.innerText) }}
                                title={item.title}
                            >
                                {item.title}
                            </div>

                            {/* Delete item button */}
                            <IconButton
                                icon="bi-x"
                                disabled={listData.readonly}
                                onClick={() => { deleteItem(index) }}
                            />
                        </li>
                    ))
                }
            </ul>

            {/* Add new item in the list */}
            {
                // If insertion is allowed, or this is listData.readonly
                !listData.readonly &&

                <div className="item-insertion-box">
                    {/* Insert new item textarea */}
                    <textarea
                        ref={insertItemRef}
                        autoFocus={true}
                        placeholder="Add new item..."
                        // Insert item on enter press
                        onKeyDown={(e) => {
                            if (e.key == "Enter") {
                                e.preventDefault();
                                insertItem()
                            }
                        }}
                    ></textarea>
                    {/* Insert item on button click */}
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
    listData: PropTypes.object
}


export default PickerListView