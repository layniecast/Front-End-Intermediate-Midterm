const fetchUrl = "https://api.nytimes.com/svc/topstories/v2/";
// const nytapi = "RuG9N6lD1Xss81PdRbmhuiJHjuiPEt6R";
const nytapi = "aGiWj72aGL0dhx41Py5aoPgqMx4kj27H";

export async function fetchStoriesFromLocalStorage(section, setStories) {
  await setStories(JSON.parse(localStorage.getItem(section)));
  // stopLoading();
}

export async function fetchStoriesFromNYTimes(
  section,
  setStories,
  stopLoading,
  loading
) {
  try {
    let response = await fetch(`${fetchUrl}${section}.json?api-key=${nytapi}`);
    let data = await response.json();
    localStorage.setItem(section, JSON.stringify(data.results));
    setStories(JSON.parse(localStorage.getItem(section)));
  } catch (error) {
    console.error(error);
  }
}
