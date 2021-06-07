const API_HOST = process.env.VUE_APP_API_URL;

const fetchCommon: RequestInit = {
  credentials: 'include',
};

export function get(url: string) {
  return fetch(`${API_HOST}${url}`, {
    method: 'GET',
    ...fetchCommon,
  })
    .then((r) => {
      if (r.ok) {
        return r;
      }

      throw r;
    })
    .then((r) => r.json());
}

export function post(url: string, payload?: Iterable<readonly unknown[]>) {
  const body = payload ? JSON.stringify(Object.fromEntries(payload)) : null;

  return fetch(`${API_HOST}${url}`, {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body,
    ...fetchCommon,
  }).then((r) => r.json());
}
