class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://unit-2-project-api-25c1595833b2.herokuapp.com/';
    }

    async postComment(comment) {
        try {
            const response = await axios.post(`${this.baseUrl}comments?api_key=${this.apiKey}`, comment);
            return response.data;
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    }

    async getComments() {
        try {
            const response = await axios.get(`${this.baseUrl}comments?api_key=${this.apiKey}`);
            return response.data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    }

    async getShows() {
        try {
            const response = await axios.get(`${this.baseUrl}shows?api_key=${this.apiKey}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching shows:', error);
        }
    }

    async likeComment(commentId) {
        try {
            const response = await axios.put(`${this.baseUrl}comments/${commentId}/like?api_key=${this.apiKey}`,);
            return response.data;
        } catch (error) {
            console.error('Error liking comment:', error);
        }
    }

    async deleteComment(commentId) {
        try {
            const response = await axios.delete(`${this.baseUrl}comments/${commentId}?api_key=${this.apiKey}`,);
            return response.data;
        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    }
}

export default BandSiteApi;
