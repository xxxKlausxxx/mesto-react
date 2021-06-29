class Api {

    constructor(config) {
        this.baseUrl = config.baseUrl;
        this.headers = config.headers;
        this.body = config.body;

    }

    getProfile() {
        return fetch(`${this.baseUrl}/users/me`,
        {
           headers: this.headers
        })
        /*
            Можно лучше: проверка ответа сервера и преобразование из json
            дублируется во всех методах класса Api, лучше вынести в отдельный метод:
                _getResponseData(res) {
                    if (!res.ok) {
                        return Promise.reject(`Ошибка: ${res.status}`); 
                    }
                    return res.json();
                }
            Подчеркивание в начале имени метода говорит о том, что метод является приватным, т.е.
            не используется вне класса Api   
         */
        .then((res) => {
            if(res.ok){
                return res.json();
                
            }
            else {
                Promise.reject(`Ошибка: ${res.status}`);
            }
        })

    }

    getCards() {
        return fetch(`${this.baseUrl}/cards`,
           
             {
           headers: this.headers
        })
        .then((res) => {
            if(res.ok){
                return res.json();
                
            }
            else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
    }

    patchApi(name, about) {
        return fetch(`${this.baseUrl}/users/me`, { 
            method: 'PATCH',
            headers: this.headers,
        body: JSON.stringify({
            name: name,
            about: about
        })})
        .then((res) => {
            if(res.ok){
                return res.json();
                
            }
            else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })

    }
    

}

// Instance of class
const API_URL = process.env.NODE_ENV === "production" ? "https://nomoreparties.co" : "http://nomoreparties.co";
const api = new Api(
    {baseUrl: `${API_URL}/cohort12`, 
     headers: {
       authorization:'f45a5cb1-aef6-4bd4-96ef-172cd588336a',
       'Content-type': 'application/json'
     }
  })

export default api;