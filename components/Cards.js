import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import tw from 'tailwind-rn';
import CardButtons from './CardButtons';

const Cards = () => {
	let MOCK_DATA = [
		// {
		// 	word: 'essential',
		// 	pos: 'adjective',
		// 	id: '123'
		// },
		// {
		// 	word: 'assume',
		// 	pos: 'verb',
		// 	id: '234'
		// },
		// {
		// 	word: 'engineer',
		// 	pos: 'noun',
		// 	id: '335'
		// }
	];

	const swipeRef = useRef(null);
	return (
		<>
			<View style={tw('flex-1 -mt-9')}>
				<Swiper
					ref={swipeRef}
					cards={MOCK_DATA}
					containerStyle={{ backgroundColor: 'transparent' }}
					stackSize={3}
					cardIndex={0}
					animateCardOpacity
					verticalSwipe={false}
					onSwipedLeft={() => {
						console.log('Swipe KNOWN');
					}}
					onSwipedRight={() => {
						console.log('Swipe DO NOT KNOW');
					}}
					overlayLabels={{
						left: {
							title: 'NOPE',
							style: {
								label: {
									textAlign: 'right',
									color: 'red'
								}
							}
						},
						right: {
							title: 'I know it',
							style: {
								label: {
									color: '#4DED30'
								}
							}
						}
					}}
					renderCard={(card) =>
						card ? (
							<View
								key={card.id}
								style={[
									tw(
										'bg-white h-3/4 rounded-xl flex-col items-center justify-center'
									),
									styles.cardShadow
								]}
							>
								<Text
									style={tw(
										'text-gray-800 text-xl text-xl items-center'
									)}
								>
									{card.word}
								</Text>
								<Text
									style={tw('text-gray-600 text-xl text-xl')}
								>
									{card.pos}
								</Text>
							</View>
						) : (
							<View
								style={[
									tw(
										'bg-white h-3/4 rounded-xl flex-col items-center justify-center'
									),
									styles.cardShadow
								]}
							>
								<Text
									style={tw(
										'text-gray-800 text-xl items-center pb-5'
									)}
								>
									Sad (adj.)
								</Text>
								<Text
									style={tw(
										'text-gray-800 text-xl items-center'
									)}
								>
									傷心--因為沒有新詞彙
								</Text>
								<Image
									style={tw('h-20 w-full')}
									height={100}
									width={100}
									source={{
										uri: 'https://links.papareact.com/6gb'
									}}
								/>
							</View>
						)
					}
				/>
			</View>
			<CardButtons swipeRef={swipeRef} />
		</>
	);
};

export default Cards;

const styles = StyleSheet.create({
	cardShadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 2
	}
});
