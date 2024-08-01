import {SET_TEMPLATE,UPDATE_TEMPLATE} from './Template_Constraints';

export function SetTemplate(template){
    console.log('action',template);
    return{
        type : SET_TEMPLATE,
        payload : template
    }
}
export function UpdateTemplate(template){
    return{
        type : UPDATE_TEMPLATE,
        payload : template
    }
}