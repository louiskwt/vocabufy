import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import tw from 'tailwind-rn';
import CardButtons from './CardButtons';

const Cards = () => {
	let MOCK_DATA = [
		{
			word: 'essential',
			pos: 'adjective',
			id: '123'
		},
		{
			word: 'assume',
			pos: 'verb',
			id: '234'
		},
		{
			word: 'engineer',
			pos: 'noun',
			id: '335'
		}
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
					renderCard={(card) => (
						<View
							key={card.id}
							style={tw(
								'bg-white h-3/4 rounded-xl flex-column items-center justify-center'
							)}
						>
							<Text
								style={tw(
									'text-gray-800 text-xl text-xl items-center'
								)}
							>
								{card.word}
							</Text>
							<Text style={tw('text-gray-600 text-xl text-xl')}>
								{card.pos}
							</Text>
						</View>
					)}
				/>
			</View>
			<CardButtons swipeRef={swipeRef} />
		</>
	);
};

export default Cards;
