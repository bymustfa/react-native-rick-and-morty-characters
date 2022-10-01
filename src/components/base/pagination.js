import React, { useEffect, useState, useRef } from "react";
import { Button, Layout } from "@ui-kitten/components";
import { ScrollView } from "react-native";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  ChevronsLeft,
} from "../icons";

const Pagination = ({ page, setPage, pageCount }) => {
  const scrollRef = useRef(null);
  const [scrollViewWidth, setScrollViewWidth] = useState(0);
  const iconSize = 12;

  const pageLength = 3;
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(pageLength);

  useEffect(() => {
    if (page > pageLength) {
      setStart(page - pageLength + 1);
      setEnd(page);
    } else {
      setStart(1);
      setEnd(pageLength);
    }
  }, [page]);

  const changePage = (page) => {
    if (page === 1) {
      scrollRef.current.scrollTo({
        x: 0,
      });
    } else if (page === pageCount) {
      scrollRef.current.scrollToEnd();
    } else {
      const width = scrollViewWidth / pageCount;
      console.log("width", width);

      scrollRef.current.scrollTo({
        x: page,
      });
    }

    setPage(page);
  };

  return (
    <Layout
      style={{
        padding: 6,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Button
        appearance="outline"
        status="basic"
        size="small"
        onPress={() => {
          changePage(1);
        }}
        style={{ marginHorizontal: 2 }}
      >
        <ChevronsLeft width={iconSize} height={iconSize} stroke="white" />
      </Button>
      <Button
        appearance="outline"
        status="basic"
        size="small"
        disabled={page === 1}
        onPress={() => {
          if (page > 1) changePage(page - 1);
        }}
        style={{ marginHorizontal: 2 }}
      >
        <ChevronLeft width={iconSize} height={iconSize} stroke="white" />
      </Button>

      <ScrollView
        ref={scrollRef}
        horizontal={true}
        onScroll={({ nativeEvent }) => {
          console.log("nativeEvent.contentOffset", nativeEvent.contentOffset);
        }}
        onContentSizeChange={(width) => setScrollViewWidth(width)}
      >
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((item) => (
          <Button
            key={item}
            appearance={item === page ? "filled" : "outline"}
            status="basic"
            size="small"
            onPress={(e) => {
              changePage(item);
            }}
            style={{ marginHorizontal: 2 }}
          >
            {item}
          </Button>
        ))}
      </ScrollView>

      <Button
        appearance="outline"
        status="basic"
        size="small"
        disabled={page === pageCount}
        onPress={() => {
          if (page < pageCount) changePage(page + 1);
        }}
        style={{ marginHorizontal: 2 }}
      >
        <ChevronRight width={iconSize} height={iconSize} stroke="white" />
      </Button>

      <Button
        appearance="outline"
        status="basic"
        size="small"
        onPress={() => {
          changePage(pageCount);
        }}
        style={{ marginHorizontal: 2 }}
      >
        <ChevronsRight width={iconSize} height={iconSize} stroke="white" />
      </Button>
    </Layout>
  );
};

export default Pagination;
