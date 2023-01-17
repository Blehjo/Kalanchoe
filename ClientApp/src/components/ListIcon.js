import { List } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

import { setIsListOpen } from "../store/list/list.action";
import { selectIsListOpen } from "../store/list/list.selector";

const ListIcon = () => {
    const dispatch = useDispatch();
    const isListOpen = useSelector(selectIsListOpen)

    const toggleIsListOpen = () => dispatch(setIsListOpen(!isListOpen));

    return (
        <div className='' onClick={toggleIsListOpen}>
            <List style={{ cursor: "pointer" }} className='me-2' size={25} color="black" />
        </div>
    )
}

export default ListIcon;