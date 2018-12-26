import axios from 'axios';

const getData = () => (axios.get('https://cnodejs.org/api/v1/topics'));

export default getData;
