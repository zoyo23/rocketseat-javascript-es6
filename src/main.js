import axios from 'axios';

class Api {
    static async getUserInfor(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch (error) {
            console.warn('Erro na requisição ' + error);
        }

    }
}

Api.getUserInfor("zoyo231231231231231");
Api.getUserInfor("zoyo23");