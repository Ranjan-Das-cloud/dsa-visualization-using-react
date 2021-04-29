import React, { forwardRef, HTMLAttributes } from "react";
import { Text } from "@react-md/typography";

export default forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function Page3(props, ref) {
    return (
      <div {...props} ref={ref}>
        <Text type="headline-4" style={{marginTop: '177px'}}>Source code in Python</Text>
        <Text>
          <code>
            <h5 className="mt-5 mb-4"><span><h4 className="text-success"><b>Implementation of Linear Search</b></h4></span>
              <div className="container text-left">
                <div className="offset-4 mt-4 mb-5">
                  <div className="line number1 index0 alt2"><code className="comments"># Python3 code to linearly search x in arr[]. </code></div>
                  <div className="line number2 index1 alt1"><code className="comments"># If x is present then return its location, </code></div>
                  <div className="line number3 index2 alt2"><code className="comments"># otherwise return -1 </code></div>
                  <div className="line number4 index3 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number5 index4 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number6 index5 alt1"><code className="keyword">def</code> <code className="plain">search(arr, n, x): </code></div>
                  <div className="line number7 index6 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number8 index7 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">for</code> <code className="plain">i </code><code className="keyword">in</code> <code className="functions">range</code><code className="plain">(</code><code className="value">0</code><code className="plain">, n): </code></div>
                  <div className="line number9 index8 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="plain">(arr[i] </code><code className="keyword">=</code><code className="keyword">=</code> <code className="plain">x): </code></div>
                  <div className="line number10 index9 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">return</code> <code className="plain">i </code></div>
                  <div className="line number11 index10 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">return</code> <code className="keyword">-</code><code className="value">1</code></div>
                  <div className="line number12 index11 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number13 index12 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number14 index13 alt1"><code className="comments"># Driver Code </code></div>
                  <div className="line number15 index14 alt2"><code className="plain">arr </code><code className="keyword">=</code> <code className="plain">[</code><code className="value">2</code><code className="plain">, </code><code className="value">3</code><code className="plain">, </code><code className="value">4</code><code className="plain">, </code><code className="value">10</code><code className="plain">, </code><code className="value">40</code><code className="plain">] </code></div>
                  <div className="line number16 index15 alt1"><code className="plain">x </code><code className="keyword">=</code> <code className="value">10</code></div>
                  <div className="line number17 index16 alt2"><code className="plain">n </code><code className="keyword">=</code> <code className="functions">len</code><code className="plain">(arr) </code></div>
                  <div className="line number18 index17 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number19 index18 alt2"><code className="comments"># Function call </code></div>
                  <div className="line number20 index19 alt1"><code className="plain">result </code><code className="keyword">=</code> <code className="plain">search(arr, n, x) </code></div>
                  <div className="line number21 index20 alt2"><code className="keyword">if</code><code className="plain">(result </code><code className="keyword">=</code><code className="keyword">=</code> <code className="keyword">-</code><code className="value">1</code><code className="plain">): </code></div>
                  <div className="line number22 index21 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="functions">print</code><code className="plain">(</code><code className="string">"Element is not present in array"</code><code className="plain">) </code></div>
                  <div className="line number23 index22 alt2"><code className="keyword">else</code><code className="plain">: </code></div>
                  <div className="line number24 index23 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="functions">print</code><code className="plain">(</code><code className="string">"Element is present at index"</code><code className="plain">, result) </code></div>
                </div>
              </div>
            </h5>
            
            <h5>
              <div className="container text-left">
                <div className="offset-3 mt-4 mb-5">

                </div>
              </div>
            </h5>
          </code>
        </Text>
      </div>
    );
  }
);