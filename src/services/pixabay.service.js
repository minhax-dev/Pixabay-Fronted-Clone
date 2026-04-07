import { ENV } from "../config/env";

export class PixabayService {

  static async fetchImages(searchQuery, perPage = ENV.PER_PAGE_INITIAL, pageNum = 1) {

    // https://pixabay.com/api/?key=55101707-c38792077fc215f19620ed562&q=yellow+flowers&image_type=photo&pretty=true
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