import { apiRegistrationData, apiContactData } from '../utils/types';
import axios from './config';

export default class Services {
	/**
	 * @description get cartegory list
	 */
	static async getCategoryList() {
		return axios({
			url: 'hackathon/categories-list',
			method: 'get',
		});
	}

	/**
	 * @description user registration
	 */
	static async registerUser(data: apiRegistrationData) {
		return axios({
			url: 'hackathon/registration',
			method: 'post',
			data: data,
		});
	}

	/**
	 * @description user contact
	 */
	static async userContact(data: apiContactData) {
		return axios({
			url: 'hackathon/contact-form',
			method: 'post',
			data: data,
		});
	}
}
