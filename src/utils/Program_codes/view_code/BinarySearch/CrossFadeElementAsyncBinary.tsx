import React, { FC, Suspense, useState } from "react";
import { AppBar } from "@react-md/app-bar";
import { CircularProgress } from "@react-md/progress";
import { Tabs, TabsManager } from "@react-md/tabs";
import { CrossFade } from "@react-md/transition";
import { Text } from "@react-md/typography";

import useFakeLazyImport from "../useFakeLazyImport";


import Container from "../Container";
import PageB1 from "./CodingwithC";
import PageB2 from "./CodingwithCpp";
import PageB3 from "./CodingwithPython";
import PageB4 from "./CodingwithJava";
import PageB5 from "./CodingwithC#";

interface CurrentPageProps {
  page: number;
}

const CurrentPage: FC<CurrentPageProps> = ({ page }) => {
  let content = <PageB1 />;
  if (page === 1) {
    content = <PageB2 />;
  } else if (page === 2) {
    content = <PageB3 />;
  } else if (page === 3) {
    content = <PageB4 />;
  } else if (page === 4) {
    content = <PageB5 />;
  }

  return <CrossFade>{content}</CrossFade>;
};

const CrossFadeExamplesAsyncBinary: FC = () => {
  // just make it so it doesn't start loading until a new tab is shown
  const [page, setPage] = useState<number>(-1);
  const Content = useFakeLazyImport<CurrentPageProps>(CurrentPage, page, 5000);

  return (
    <>
      <TabsManager
        activeIndex={page === -1 ? 0 : page}
        onActiveIndexChange={(index) => setPage(index)}
        tabs={["C", "C++", "Python3","Java","C#"]}
        tabsId="static-transition"
      >
        <AppBar theme="default">
          <Tabs />
        </AppBar>
      </TabsManager>
      <Container>
        {page === -1 && (
          <Text type="headline-6">
            {'Click on other tabs to start coding!'}
          </Text>
        )}
        {page !== -1 && (
          <Suspense fallback={<CircularProgress className="mt-4" id="async-loading-progress" />}>
            <Content page={page} />
          </Suspense>
        )}
      </Container>
    </>
  );
};

export default CrossFadeExamplesAsyncBinary;