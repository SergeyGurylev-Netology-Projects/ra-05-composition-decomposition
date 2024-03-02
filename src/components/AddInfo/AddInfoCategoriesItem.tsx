/**
 * Элемент из блока прочей информации под рекламой (один из Погода, Посещаемое, ...)
 */
import {AddInfoCategoriesItemListItem} from "./AddInfoCategoriesItemListItem.tsx";

export function AddInfoCategoriesItem({...props}) {

    const renderListItems = () => {
        return (
            <>
                <AddInfoCategoriesItemListItem
                    id = "1"
                />
                <AddInfoCategoriesItemListItem
                    id = "2"
                />
            </>
        )
    }

    return (
        <li>
            <div>
                {props.name}
                <ul>
                    {renderListItems()}
                </ul>
            </div>
        </li>
    )
}