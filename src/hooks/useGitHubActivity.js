import { useState, useEffect } from 'react';

const GITHUB_API = 'https://api.github.com';
const USERNAME = 'shanjaiy2006';

export function useGitHubActivity() {
  const [data, setData] = useState({
    user: null,
    repos: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    async function fetchGitHubData() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`${GITHUB_API}/users/${USERNAME}`),
          fetch(`${GITHUB_API}/users/${USERNAME}/repos?sort=updated&per_page=6&type=public`),
        ]);

        if (!userRes.ok || !reposRes.ok) {
          throw new Error('GitHub API request failed');
        }

        const [user, repos] = await Promise.all([userRes.json(), reposRes.json()]);

        if (!cancelled) {
          setData({ user, repos, loading: false, error: null });
        }
      } catch (err) {
        if (!cancelled) {
          setData((prev) => ({ ...prev, loading: false, error: err.message }));
        }
      }
    }

    fetchGitHubData();
    return () => { cancelled = true; };
  }, []);

  return data;
}

