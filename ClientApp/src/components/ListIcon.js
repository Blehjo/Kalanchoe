import { useContext } from "react";
import { List } from "react-bootstrap-icons";

import { ListContext } from "../contexts/list.context";

const ListIcon = () => {
    const { isNavOpen, setIsNavOpen } = useContext(ListContext);

    const toggleIsNavOpen = () => setIsNavOpen(!isNavOpen);

    return (
        <div className='' onClick={toggleIsNavOpen}>
            <List style={{ cursor: "pointer" }} className='me-2' size={25} color="black" />
        </div>
    )
}

export default ListIcon;