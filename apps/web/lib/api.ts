const DEFAULT_API_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://camewego-api.onrender.com/api'
  : 'http://localhost:3001/api';

export const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_URL?.trim() || DEFAULT_API_BASE_URL
).replace(/\/+$/, '');

export async function fetchApi<T>(
  path: string,
  getToken: () => Promise<string | null>,
  options: RequestInit = {},
): Promise<T> {
  try {
    return await requestApi<T>(path, getToken, options);
  } catch (error) {
    if (!(error instanceof Error) || error.message !== 'No agency linked to this account') {
      throw error;
    }

    await postApi('/agencies/register', getToken, {});
    return requestApi<T>(path, getToken, options);
  }
}

export async function postApi<T>(
  path: string,
  getToken: () => Promise<string | null>,
  body: unknown,
): Promise<T> {
  return requestApi<T>(path, getToken, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

async function requestApi<T>(
  path: string,
  getToken: () => Promise<string | null>,
  options: RequestInit = {},
): Promise<T> {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const token = await getToken();

  if (!token) {
    throw new Error('Authentication required');
  }

  const response = await fetch(`${API_BASE_URL}${normalizedPath}`, {
    ...options,
    cache: 'no-store',
    headers: {
      ...Object.fromEntries(new Headers(options.headers).entries()),
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorPayload = await response.json().catch(() => null) as {
      message?: string | string[];
    } | null;
    const message = Array.isArray(errorPayload?.message)
      ? errorPayload.message.join(', ')
      : errorPayload?.message;

    throw new Error(message || `API request failed: ${response.status}`);
  }

  return (await response.json()) as T;
}
