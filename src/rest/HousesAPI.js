const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HousesAPI {
    get = async() => {
        try {
            const res = await fetch(HOUSES_ENDPOINT);
            const data = await res.json();
            return data;
        } catch(e) {
            console.log('Fetch had an issue: ', e);
        }

    }

    put = async(house ) => {
        try {
            const res = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await res.json();
        } catch(e) {
            console.log('PUT had an issue: ', e);
        }
    }
}

export const housesApi = new HousesAPI();