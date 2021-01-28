import React, { forwardRef, HTMLAttributes } from "react";
import { Text } from "@react-md/typography";

export default forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function PageB6(props, ref) {
    return (
      <div {...props} ref={ref} className="mt-3 mb-1">
        <Text type="headline-4">Source code in C</Text>
        <Text>
          <code>
          <h5 className="mt-5 mb-4"><span><h4 className="text-success"><b>Implementation of Linear Search</b></h4></span>
              <div className="container text-left offset-4">
                <div className="offset-3 mt-4 mb-5">
                  <div className="line number1 index0 alt2"><code className="comments">&#47;&#47; C code to linearly search x in arr[]. If x </code></div>
                  <div className="line number2 index1 alt1"><code className="comments">&#47;&#47; is present then return its location, otherwise </code></div>
                  <div className="line number3 index2 alt2"><code className="comments">&#47;&#47; return -1 </code></div>
                  <div className="line number4 index3 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number5 index4 alt2"><code className="preprocessor">#include &lt;stdio.h&gt; </code></div>
                  <div className="line number6 index5 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number7 index6 alt2"><code className="color1 bold">int</code> <code className="plain">search(</code><code className="color1 bold">int</code> <code className="plain">arr[], </code><code className="color1 bold">int</code> <code className="plain">n, </code><code className="color1 bold">int</code> <code className="plain">x) </code></div>
                  <div className="line number8 index7 alt1"><code className="plain">&#123; </code></div>
                  <div className="line number9 index8 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">i; </code></div>
                  <div className="line number10 index9 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">for</code> <code className="plain">(i = 0; i &lt; n; i++) </code></div>
                  <div className="line number11 index10 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">if</code> <code className="plain">(arr[i] == x) </code></div>
                  <div className="line number12 index11 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">return</code> <code className="plain">i; </code></div>
                  <div className="line number13 index12 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">return</code> <code className="plain">-1; </code></div>
                  <div className="line number14 index13 alt1"><code className="plain">&#125; </code></div>
                  <div className="line number15 index14 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number16 index15 alt1"><code className="comments">&#47;&#47; Driver code </code></div>
                  <div className="line number17 index16 alt2"><code className="color1 bold">int</code> <code className="plain">main(</code><code className="keyword bold">void</code><code className="plain">) </code></div>
                  <div className="line number18 index17 alt1"><code className="plain">&#123; </code></div>
                  <div className="line number19 index18 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">arr[] = &#123; 2, 3, 4, 10, 40 &#125;; </code></div>
                  <div className="line number20 index19 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">x = 10; </code></div>
                  <div className="line number21 index20 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">n = </code><code className="keyword bold">sizeof</code><code className="plain">(arr) / </code><code className="keyword bold">sizeof</code><code className="plain">(arr[0]); </code></div>
                  <div className="line number22 index21 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number23 index22 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Function call </code></div>
                  <div className="line number24 index23 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">result = search(arr, n, x); </code></div>
                  <div className="line number25 index24 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">(result == -1) </code></div>
                  <div className="line number26 index25 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">? </code><code className="functions bold">printf</code><code className="plain">(</code><code className="string">"Element is not present in array"</code><code className="plain">) </code></div>
                  <div className="line number27 index26 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">: </code><code className="functions bold">printf</code><code className="plain">(</code><code className="string">"Element is present at index %d"</code><code className="plain">, result); </code></div>
                  <div className="line number28 index27 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">return</code> <code className="plain">0; </code></div>
                  <div className="line number29 index28 alt2"><code className="plain">&#125;</code></div>
                </div>
              </div>
            </h5>
          </code>
        </Text>
      </div>
    );
  }
);