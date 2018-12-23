/**
 *
 * name: editReducer
 * date: 2018/12/21
 * author: cengfucheng
 * about: 编辑器总reducer
 *
 */

const EDIT_ADD_DATA =  'edit_add_data';
const EDIT_UP_DATA = 'edit_up_data';
const EDIT_DELECT_DATA = 'edit_delect_data';

let initState = {
    name: 'lz',
    title: 'this is Edit',
    login: false,
    users: {}
}

export default function (state = initState, action) {
    let { type, payload } = action;
    switch (type) {
        case EDIT_ADD_DATA: {
            console.log(payload,'1111')
            return {
                ...state,
                name:payload.value
            }
        }
        case EDIT_UP_DATA: {

        }
        case EDIT_DELECT_DATA: {

        }
        default: return state;
    }

}
