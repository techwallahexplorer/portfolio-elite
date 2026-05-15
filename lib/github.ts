import axios from "axios";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const USERNAME = process.env.GITHUB_USERNAME;

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
});

export const getGithubProfile = async () => {
  const { data } = await githubApi.get(`/users/${USERNAME}`);
  return data;
};

export const getGithubRepos = async () => {
  const { data } = await githubApi.get(`/users/${USERNAME}/repos?sort=updated&per_page=10`);
  return data;
};

export const getGithubContributions = async () => {
  const query = `
    query($username:String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  const { data } = await axios.post(
    "https://api.github.com/graphql",
    { query, variables: { username: USERNAME } },
    { headers: { Authorization: `Bearer ${GITHUB_TOKEN}` } }
  );

  if (!data?.data?.user) {
    return { totalContributions: 0, weeks: [] };
  }

  return data.data.user.contributionsCollection.contributionCalendar;
};
