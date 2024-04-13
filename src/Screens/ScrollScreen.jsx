import { View, Text, FlatList, Image, Dimensions, TouchableOpacity, Animated, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'

const { width, height } = Dimensions.get('screen');
const ScrollScreen = () => {
     const topRef = useRef();
    const bottomRef = useRef();
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
        {id:5,
            image:
                'https://i.pinimg.com/736x/bc/1e/32/bc1e32150d9c580c8ecb0388a097ae80.jpg',
        },
    ]
    const [current, setCurrent] = useState(data);
   
    
    const [activeIndex, setActiveIndex] = React.useState(0);
   
    const scrollToActiveIndex = (index) => { 
        // console.log("hello,", activeIndex,"  ",index)
        setActiveIndex(index);
        // console.log("hello,", setActiveIndex(index), activeIndex,"  ",index)
        topRef?.current?.scrollToOffset({
            offset:(index)*width,
            animated:true
        })
        if(index*(90)-80/2>width/2){
            bottomRef?.current?.scrollToOffset({
                offset:index*90-width/2+80/2,
                animated:true
            })
        }else{
            bottomRef?.current?.scrollToOffset({
                offset:0,
                animated:true
            })
        }
    
    }
    return (
        <View>
            <FlatList data={current}
                ref={topRef}
                horizontal
                keyExtractor={item=>item.id}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={ev => {
                    scrollToActiveIndex(Math.floor(ev.nativeEvent.contentOffset.x / width))
                }}
                renderItem={({ item: { image },index }) => (
                    <View >
                        <Image source={{ uri: image }} style={{ width: width, height: height }} />
                    </View>
                )}></FlatList>

            <FlatList
                ref={bottomRef}
                data={current}
                horizontal
                keyExtractor={item=>item.id}
                showsHorizontalScrollIndicator={false}
                style={{ position: "absolute", bottom: 80 }}
                contentContainerStyle={{ paddingHorizontal: 10 }}
                renderItem={({ item, index }) =>{
                    return <TouchableOpacity
                onPress={()=>scrollToActiveIndex(index)}
                >
                    {/* {console.log("hello",activeIndex,"  ",index)} */}
                    <Image source={{ uri: item.image }} style={{ width: 80, height: 80, borderRadius: 12, marginRight: 10, borderWidth: 2, borderColor: activeIndex === index ? "red" : "transparent" }} />
                    </TouchableOpacity>}
                }></FlatList>
        </View>
    )
}

export default ScrollScreen   