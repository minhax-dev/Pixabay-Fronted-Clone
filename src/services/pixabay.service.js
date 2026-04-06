import { ENV } from "../config/env";

export class PixabayService {

  static async fetchImages(searchQuery, perPage = ENV.PER_PAGE_INITIAL, pageNum = 1) {

    const url = `${ENV.BASE_URL}?key=${ENV.API_KEY
      }&q=${encodeURIComponent(
        searchQuery
      )}&image_type=photo&per_page=${perPage}&page=${pageNum}&safesearch=true&pretty=true`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch images");
    }

    return await response.json();

  }
}