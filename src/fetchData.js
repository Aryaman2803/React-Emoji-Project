const url =
  "https://emoji-api.com/emojis?access_key=0b123a2521de694967e202c8f1611a5419b3837d";

const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};
export default fetchData;
