import { View, Text, FlatList, Image, Dimensions, TouchableOpacity, Animated } from 'react-native'
import React, { useRef, useState } from 'react'

const { width, height } = Dimensions.get('screen');
const ScrollScreen = () => {
    const data = [
        {id:0,
            image:
                'https://i.pinimg.com/736x/44/b5/f5/44b5f558cc2b5b4db28bc570fde67544.jpg',
        },
        {id:1,
            image:
                'https://i.pinimg.com/736x/ba/54/b8/ba54b807a0c135c481c83a4906cd2759.jpg',
        },
        {id:2,
            image:
                'https://i.pinimg.com/736x/44/5f/02/445f023ad701e36c0678a161b048f6e1.jpg',
        },
        {id:3,
            image:
                'https://i.pinimg.com/736x/34/4d/6c/344d6c876654bc8f38a17a92f3d20f72.jpg',
        },
        {id:4,
            image:
                'https://i.pinimg.com/736x/44/b5/f5/44b5f558cc2b5b4db28bc570fde67544.jpg',
        },
        {id:5,
            image:
                'https://i.pinimg.com/736x/bc/1e/32/bc1e32150d9c580c8ecb0388a097ae80.jpg',
        },
    ]
    const [current, setCurrent] = useState(data);
    const topRef = useRef();
    const bottomRef = useRef();
    const [activeIndex, setActiveIndex] = useState(0);
   
    const scrollToAciveIndex = (index) => {
        setActiveIndex(index);
    
    }
    return (
        <>
            <FlatList data={current}
                ref={topRef}
                horizontal
                keyExtractor={item=>item.id}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={ev => {
                    scrollToAciveIndex(Math.floor(ev.nativeEvent.contentOffset.x / width))
                }}
                renderItem={({ item: { image } }) => (
                    <View>
                        <Image source={{ uri: image }} style={{ width: width, height: height }} />
                    </View>
                )}></FlatList>

            <FlatList
                ref={bottomRef}
                data={current}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ position: "absolute", bottom: 80 }}
                contentContainerStyle={{ paddingHorizontal: 10 }}
                renderItem={({ item: { image }, index }) =>{return <TouchableOpacity
                onPress={scrollToAciveIndex(index)}
                >
                    <Image source={{ uri: image }} style={{ width: 80, height: 80, borderRadius: 12, marginRight: 10, borderWidth: 2, borderColor: activeIndex === index ? "#fff" : "transparent" }} />
                    </TouchableOpacity>}
                }></FlatList>
        </>
    )
}

export default ScrollScreen   