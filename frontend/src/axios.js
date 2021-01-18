import axios from 'axios'
const instance = axios.create
    ({ baseURL: 'http://localhost:4000' });
const startPage = async () => {
    const {
        data: { msg }
    } = await instance.post('/startPage');
    return msg;
}
const selectcityPage = async () => {
    const { data: { msg }
    } = await instance.get('/selectcityPage');
    return msg;
}
const selecttypePage = async () => {
    const { data: { msg }
    } = await instance.get('/selecttypePage');
    return msg;
}
const choosingPage = async () => {
    const { data: { msg }
    } = await instance.post('/choosingPage');
    return msg;
}
export { startPage, selectcityPage, selecttypePage,choosingPage };