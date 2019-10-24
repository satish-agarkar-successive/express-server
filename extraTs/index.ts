
import diamond_print from './patterns/index';
import permission from './Utils/index';

permission('getUser', 'trainee', 'read');
diamond_print();
