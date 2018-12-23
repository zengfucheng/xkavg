/**
 *
 * name: editAction
 * date: 2018/12/21
 * author: cengfucheng
 * about: 编辑器action
 *
 */

export function editAddData(value) {
    return {
        type:'edit_add_data',
        payload: {value}
    }
}
