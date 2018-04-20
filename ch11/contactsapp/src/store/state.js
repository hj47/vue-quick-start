import CONF from '../Config'
import Constant from "../Constant";

export default {
  currentView : null,
  node : 'add',
  contact : { no:0, name:'', tel:'', address:'', photo:'' },
  contactlist: {
    pageno:1, pagesize:CONF.PAGESIZE, totalcount:0, contacts: []
  }
}