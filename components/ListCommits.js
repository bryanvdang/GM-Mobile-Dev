import { SafeAreaView, Text, FlatList } from 'react-native';

const data = [
	{
		id: '123',
		location: 'Home',
		destination: 'Code Street, Phoenix, AZ'
	},
	{
		id: '456',
		location: 'Work',
		destination: 'Deployment Road, Silicon Valley, CA'
	}
];

const ListCommits = () => {
	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id}
			renderItem={({ item: { location, destination } }) => (
				<SafeAreaView>
					<Text>{location}</Text>
					<Text>{destination}</Text>
				</SafeAreaView>
			)}
		/>
	);
};

export default ListCommits;
