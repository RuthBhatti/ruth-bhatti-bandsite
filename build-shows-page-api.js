class ShowsApi {

    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://unit-2-project-api-25c1595833b2.herokuapp.com';
    }

    async getShows() {
        try {
            const response = await axios.get(`${this.baseUrl}/showdates?api_key=${this.apiKey}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching shows:', error);
            return [];
        }
    }
}
export default ShowsApi;