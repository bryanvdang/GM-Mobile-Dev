import { SafeAreaView, Text, FlatList } from "react-native";
import axios from "axios";

const data = [
  {
    id: "123",
    location: "Home",
    destination: "Code Street, Phoenix, AZ",
  },
  {
    id: "456",
    location: "Work",
    destination: "Deployment Road, Silicon Valley, CA",
  },
];

const fetchGithubData = () => {
  return axios
    .get("https://api.github.com/repos/bryanvdang/uber-clone/commits")
    .then(({ data }) => {
      console.log(data);
      return JSON.stringify(data, null, 2);
    })
    .catch((err) => {
      console.log(err);
    });
};

const ListCommits = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { location, destination } }) => (
        <SafeAreaView>
          <button
            onClick={() => {
              fetchGithubData();
            }}
          >
            Fetch Commit Data
          </button>
          <Text>{location}</Text>
          <Text>{destination}</Text>
        </SafeAreaView>
      )}
    />
  );
};

export default ListCommits;
