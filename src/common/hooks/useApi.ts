import { useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
}

const initialState = {
  loading: false,
  data: null
}

function useApi<T>() {
  const [state, setState] = useState<ApiState<T>>(initialState);

  async function call(request: AxiosRequestConfig) {
    setState({ data: null, loading: true })

    try {
      const { data } = await axios.request<T>(request);
      setState({ data, loading: false })
    } catch (e) {
      setState({ data: null, loading: false })
      console.error(e)
    }
  }

  return {
    ...state,
    call
  }
}

export default useApi;