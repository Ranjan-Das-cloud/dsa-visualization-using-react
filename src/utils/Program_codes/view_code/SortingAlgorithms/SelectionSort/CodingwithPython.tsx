import React, { forwardRef, HTMLAttributes } from "react";
import { Text } from "@react-md/typography";

export default forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function PageR3(props, ref) {
    return (
      <div {...props} ref={ref} className="mt-3 mb-1">
        <Text type="headline-4">Source code in Python</Text>
        <Text>
          <code>
            <h5 className="mt-5 mb-4"><span><h4 style={{color:'#f0ffff'}}>Implementation of Selection Sort</h4></span>
              <div className="container text-left">
                <div className="offset-3 mt-4 mb-5">
                  <div className="line number1 index0 alt2"><code className="comments"># Python program for implementation of Selection </code></div>
                  <div className="line number2 index1 alt1"><code className="comments"># Sort </code></div>
                  <div className="line number3 index2 alt2"><code className="keyword">import</code> <code className="plain">sys </code></div>
                  <div className="line number4 index3 alt1"><code className="plain">A </code><code className="keyword">=</code> <code className="plain">[</code><code className="value">64</code><code className="plain">, </code><code className="value">25</code><code className="plain">, </code><code className="value">12</code><code className="plain">, </code><code className="value">22</code><code className="plain">, </code><code className="value">11</code><code className="plain">] </code></div>
                  <div className="line number5 index4 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number6 index5 alt1 highlighted"><code className="comments"># Traverse through all array elements </code></div>
                  <div className="line number7 index6 alt2 highlighted"><code className="keyword">for</code> <code className="plain">i </code><code className="keyword">in</code> <code className="functions">range</code><code className="plain">(</code><code className="functions">len</code><code className="plain">(A)): </code></div>
                  <div className="line number8 index7 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number9 index8 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># Find the minimum element in remaining&nbsp; </code></div>
                  <div className="line number10 index9 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># unsorted array </code></div>
                  <div className="line number11 index10 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">min_idx </code><code className="keyword">=</code> <code className="plain">i </code></div>
                  <div className="line number12 index11 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">for</code> <code className="plain">j </code><code className="keyword">in</code> <code className="functions">range</code><code className="plain">(i</code><code className="keyword">+</code><code className="value">1</code><code className="plain">, </code><code className="functions">len</code><code className="plain">(A)): </code></div>
                  <div className="line number13 index12 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="plain">A[min_idx] &gt; A[j]: </code></div>
                  <div className="line number14 index13 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">min_idx </code><code className="keyword">=</code> <code className="plain">j </code></div>
                  <div className="line number15 index14 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number16 index15 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># Swap the found minimum element with&nbsp; </code></div>
                  <div className="line number17 index16 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># the first element&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </code></div>
                  <div className="line number18 index17 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">A[i], A[min_idx] </code><code className="keyword">=</code> <code className="plain">A[min_idx], A[i] </code></div>
                  <div className="line number19 index18 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number20 index19 alt1"><code className="comments"># Driver code to test above </code></div>
                  <div className="line number21 index20 alt2"><code className="keyword">print</code> <code className="plain">(</code><code className="string">"Sorted array"</code><code className="plain">) </code></div>
                  <div className="line number22 index21 alt1"><code className="keyword">for</code> <code className="plain">i </code><code className="keyword">in</code> <code className="functions">range</code><code className="plain">(</code><code className="functions">len</code><code className="plain">(A)): </code></div>
                  <div className="line number23 index22 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="functions">print</code><code className="plain">(</code><code className="string">"%d"</code> <code className="keyword">%</code><code className="plain">A[i]),&nbsp; </code></div>
                </div>
              </div>
            </h5>
          </code>
        </Text>
      </div>
    );
  }
);