/**
 * Элемент из списка в ленте ссылок в топе страницы
 */

export function NewCategoriesItem({...props}) {

    return (
        <>
            <li>
                {props.name}
            </li>
        </>
    )
}
