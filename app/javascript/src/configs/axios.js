// :nodoc
//-----------------------------------------------------------------------------
import axios from 'axios';

// CSRF Token
//-----------------------------------------------------------------------------
axios.defaults.headers.common['X-CSRF-Token'] =
    document.querySelector('meta[name=csrf-token]').content;

// :nodoc
//-----------------------------------------------------------------------------
export { axios };
