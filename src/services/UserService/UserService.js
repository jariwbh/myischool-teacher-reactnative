import Axios from '../../helpers/appConfig';

const getByIdUserService = (id) => {
    return Axios.get('users/' + id);
}
export default getByIdUserService;