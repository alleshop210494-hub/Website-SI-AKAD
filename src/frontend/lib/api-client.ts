export interface FetchOptions extends RequestInit {
    params?: Record<string, string | undefined>;
  }
  
  export class ApiClient {
    private static baseUrl = '/api/v1';
  
    private static getHeaders(): HeadersInit {
      const token = typeof window !== 'undefined' ? localStorage.getItem('siakad_token') : null;
      return {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      };
    }
  
    static async request<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
      const { params, headers, ...customConfig } = options;
  
      let url = `${this.baseUrl}${endpoint}`;
      if (params) {
        const searchParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            searchParams.append(key, value);
          }
        });
        const queryString = searchParams.toString();
        if (queryString) url += `?${queryString}`;
      }
  
      const response = await fetch(url, {
        headers: {
          ...this.getHeaders(),
          ...headers,
        },
        ...customConfig,
      });
  
      const data = await response.json();
  
      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Terjadi kesalahan pada server');
      }
  
      return data.data as T;
    }
  
    static get<T>(endpoint: string, params?: Record<string, string | undefined>) {
      return this.request<T>(endpoint, { method: 'GET', params });
    }
  
    static post<T>(endpoint: string, body: unknown) {
      return this.request<T>(endpoint, {
        method: 'POST',
        body: JSON.stringify(body),
      });
    }
  
    static put<T>(endpoint: string, body: unknown) {
      return this.request<T>(endpoint, {
        method: 'PUT',
        body: JSON.stringify(body),
      });
    }
  
    static delete<T>(endpoint: string) {
      return this.request<T>(endpoint, { method: 'DELETE' });
    }
  }