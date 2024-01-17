import axios, { AxiosError } from 'axios';

const axiosFetcher = async (url: string, method: string): Promise<unknown> => {
  try {
    const response = await axios({
      method: method,
      url: url,
      headers: {
        "Accept-Encoding": "gzip,deflate,compress"
      }
    })

    return response.data;
  } catch (error) {
    const err = error as AxiosError
    throw Error(err.message)
    }
};

export default axiosFetcher;
