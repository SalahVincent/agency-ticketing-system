export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api';

export async function fetchApi<T>(
  path: string,
  getToken: () => Promise<string | null>,
): Promise<T> {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const token = await getToken();

  if (!token) {
    throw new Error('Authentication required');
  }

  const response = await fetch(`${API_BASE_URL}${normalizedPath}`, {
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return (await response.json()) as T;
}
