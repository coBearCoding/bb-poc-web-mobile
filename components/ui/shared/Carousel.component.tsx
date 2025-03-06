import React, { useEffect, useRef, useState, forwardRef } from "react";
import { FlatList, View, ViewProps, ListRenderItem } from "react-native";

interface BBCarouselProps extends ViewProps {
  data: any[];
  renderItem: ListRenderItem<any>; // Ensures the function is typed correctly
}

const BBCarousel = forwardRef<FlatList<any>, BBCarouselProps>(
  ({ data, renderItem, ...props }, ref) => {
    const [index, setIndex] = useState(0);
    const flatListRef = useRef<FlatList<any>>(null);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => {
          const nextIndex = prevIndex === data.length - 1 ? 0 : prevIndex + 1;
          flatListRef.current?.scrollToIndex({
            index: nextIndex,
            animated: true,
          });
          return nextIndex;
        });
      }, 5000); // Auto-scroll every 5 seconds

      return () => clearInterval(interval);
    }, [data.length]);

    return (
      <View {...props}>
        <FlatList
          ref={flatListRef}
          data={data}
          contentContainerStyle={props.style}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, idx) => idx.toString()}
          renderItem={renderItem} // Fixed: Now correctly typed and passed
        />
      </View>
    );
  }
);

export default BBCarousel;
