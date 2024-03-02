/**
 * Элемент из блока категорий поиска (или Видео, или Картинки, или Новости, ...)
 */

export function SearchCategoriesItem({...props}) {

    return (
        <>
            <li>
                {props.id}
            </li>
        </>
    )
}
