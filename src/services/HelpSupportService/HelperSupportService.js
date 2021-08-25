import Axios from '../../helpers/appConfig';

function HelperSupportService(data){
    const body=JSON.stringify(data)
    return Axios.post('supports',body)
}

export default HelperSupportService;