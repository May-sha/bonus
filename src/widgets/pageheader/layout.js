import headerStr from './index.tpl';
import _ from 'lodash';

export default (option) => {
    // let mobileTransType = '';
    // if (option && typeof option.mobileTransType !== 'undefined' && !option.mobileTransType) {
    //     mobileTransType = '';
    // } else if (option && option.mobileTransType) {
    //     mobileTransType = 'mobile-trans';
    // }
    return _.template(headerStr)();
}