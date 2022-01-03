import {
	collection,
	onSnapshot,
	getDocs,
	query,
	where,
	setDoc,
	doc
} from 'firebase/firestore';
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import tw from 'tailwind-rn';
import { db } from '../firebase';
import CardButtons from './CardButtons';

const Cards = (props) => {
	const [words, setWords] = useState([]);

	const swipeRef = useRef(null);

	const { user } = props;

	useEffect(() => {
		let unsub;

		// fetch words from the db
		const fetchWords = async () => {
			// get the swiped known words' id from user's collection
			const knowns = await getDocs(
				collection(db, 'users', user.uid, 'knowns')
			).then((snapshot) => snapshot.docs.map((doc) => doc.id));
			const knownsIds = knowns.length > 0 ? knowns : ['test'];
			console.log(knownsIds);
			unsub = onSnapshot(
				query(
					collection(db, 'words'),
					where('id', 'not-in', [...knownsIds])
				),
				(snapshot) => {
					setWords(
						snapshot.docs.map((doc) => ({
							...doc.data()
						}))
					);
				}
			);
		};
		fetchWords();
		return unsub;
	}, [db]);

	const swipeLeft = (cardIndex) => {
		// No interaction if card does not exist
		if (!words[cardIndex]) return;
		// update db
		const wordSwiped = words[cardIndex];
		console.log(`You don't know ${wordSwiped.word}`);
		setDoc(
			doc(db, 'users', user.uid, 'unknowns', wordSwiped.id),
			wordSwiped
		);
	};

	const swipeRight = (cardIndex) => {
		// No interaction if card does not exist
		if (!words[cardIndex]) return;
		// update db
		const wordSwiped = words[cardIndex];
		console.log(`You know ${wordSwiped.word}`);
		setDoc(doc(db, 'users', user.uid, 'knowns', wordSwiped.id), wordSwiped);
	};

	return (
		<>
			<View style={tw('flex-1 -mt-9')}>
				<Swiper
					ref={swipeRef}
					cards={words}
					containerStyle={{ backgroundColor: 'transparent' }}
					stackSize={3}
					cardIndex={0}
					animateCardOpacity
					verticalSwipe={false}
					onSwipedLeft={(cardIndex) => {
						swipeLeft(cardIndex);
					}}
					onSwipedRight={(cardIndex) => {
						swipeRight(cardIndex);
					}}
					overlayLabels={{
						left: {
							title: '唔識～',
							style: {
								label: {
									textAlign: 'right',
									color: 'red'
								}
							}
						},
						right: {
							title: '識！',
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
									{card.word} ({card.pos})
								</Text>
								<Text
									style={tw('text-gray-600 text-xl text-xl')}
								>
									{card.meaning}
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
