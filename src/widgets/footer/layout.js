import footer from './index.tpl';
import service from '../service/layout.js';
export default () => {
	return service() + footer;
}