import React, { forwardRef, HTMLAttributes } from "react";
import { Text } from "@react-md/typography";
import './style.css';

export default forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function PageR5(props, ref) {
    return (
      <div {...props} ref={ref} className="mt-3 mb-1">
        <Text type="headline-4">Source code in C++</Text>
        <Text>
          <code>
          <h5 className="mt-5 mb-4"><span><h4 style={{color:'#f0ffff'}}>Implementation of Selection Sort</h4></span>
              <div className="container text-left">
                <div className="offset-3 mt-4 mb-5">
                  <div className="line number1 index0 alt2"><code className="comments">&#47;&#47; C++ program for implementation of selection sort&nbsp; </code></div>
                  <div className="line number2 index1 alt1"><code className="preprocessor">#include &lt;bits/stdc++.h&gt; </code></div>
                  <div className="line number3 index2 alt2"><code className="keyword bold">using</code> <code className="keyword bold">namespace</code> <code className="plain">std; </code></div>
                  <div className="line number4 index3 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number5 index4 alt2"><code className="keyword bold">void</code> <code className="plain">swap(</code><code className="color1 bold">int</code> <code className="plain">*xp, </code><code className="color1 bold">int</code> <code className="plain">*yp)&nbsp; </code></div>
                  <div className="line number6 index5 alt1"><code className="plain">&#123;&nbsp; </code></div>
                  <div className="line number7 index6 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">temp = *xp;&nbsp; </code></div>
                  <div className="line number8 index7 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">*xp = *yp;&nbsp; </code></div>
                  <div className="line number9 index8 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">*yp = temp;&nbsp; </code></div>
                  <div className="line number10 index9 alt1"><code className="plain">&#125;&nbsp; </code></div>
                  <div className="line number11 index10 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number12 index11 alt1"><code className="keyword bold">void</code> <code className="plain">selectionSort(</code><code className="color1 bold">int</code> <code className="plain">arr[], </code><code className="color1 bold">int</code> <code className="plain">n)&nbsp; </code></div>
                  <div className="line number13 index12 alt2"><code className="plain">&#123;&nbsp; </code></div>
                  <div className="line number14 index13 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">i, j, min_idx;&nbsp; </code></div>
                  <div className="line number15 index14 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number16 index15 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; One by one move boundary of unsorted subarray&nbsp; </code></div>
                  <div className="line number17 index16 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">for</code> <code className="plain">(i = 0; i &lt; n-1; i++)&nbsp; </code></div>
                  <div className="line number18 index17 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#123;&nbsp; </code></div>
                  <div className="line number19 index18 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Find the minimum element in unsorted array&nbsp; </code></div>
                  <div className="line number20 index19 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">min_idx = i;&nbsp; </code></div>
                  <div className="line number21 index20 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">for</code> <code className="plain">(j = i+1; j &lt; n; j++)&nbsp; </code></div>
                  <div className="line number22 index21 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">if</code> <code className="plain">(arr[j] &lt; arr[min_idx])&nbsp; </code></div>
                  <div className="line number23 index22 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">min_idx = j;&nbsp; </code></div>
                  <div className="line number24 index23 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number25 index24 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Swap the found minimum element with the first element&nbsp; </code></div>
                  <div className="line number26 index25 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">swap(&amp;arr[min_idx], &amp;arr[i]);&nbsp; </code></div>
                  <div className="line number27 index26 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125;&nbsp; </code></div>
                  <div className="line number28 index27 alt1"><code className="plain">&#125;&nbsp; </code></div>
                  <div className="line number29 index28 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number30 index29 alt1"><code className="comments">/* Function to print an array */</code></div>
                  <div className="line number31 index30 alt2"><code className="keyword bold">void</code> <code className="plain">printArray(</code><code className="color1 bold">int</code> <code className="plain">arr[], </code><code className="color1 bold">int</code> <code className="plain">size)&nbsp; </code></div>
                  <div className="line number32 index31 alt1"><code className="plain">&#123;&nbsp; </code></div>
                  <div className="line number33 index32 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">i;&nbsp; </code></div>
                  <div className="line number34 index33 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">for</code> <code className="plain">(i=0; i &lt; size; i++)&nbsp; </code></div>
                  <div className="line number35 index34 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">cout &lt;&lt; arr[i] &lt;&lt; </code><code className="string">" "</code><code className="plain">;&nbsp; </code></div>
                  <div className="line number36 index35 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">cout &lt;&lt; endl;&nbsp; </code></div>
                  <div className="line number37 index36 alt2"><code className="plain">&#125;&nbsp; </code></div>
                  <div className="line number38 index37 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number39 index38 alt2"><code className="comments">&#47;&#47; Driver program to test above functions&nbsp; </code></div>
                  <div className="line number40 index39 alt1"><code className="color1 bold">int</code> <code className="plain">main()&nbsp; </code></div>
                  <div className="line number41 index40 alt2"><code className="plain">&#123;&nbsp; </code></div>
                  <div className="line number42 index41 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">arr[] = &#123;64, 25, 12, 22, 11&#125;;&nbsp; </code></div>
                  <div className="line number43 index42 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">n = </code><code className="keyword bold">sizeof</code><code className="plain">(arr)/</code><code className="keyword bold">sizeof</code><code className="plain">(arr[0]);&nbsp; </code></div>
                  <div className="line number44 index43 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">selectionSort(arr, n);&nbsp; </code></div>
                  <div className="line number45 index44 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">cout &lt;&lt; </code><code className="string">"Sorted array: \n"</code><code className="plain">;&nbsp; </code></div>
                  <div className="line number46 index45 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">printArray(arr, n);&nbsp; </code></div>
                  <div className="line number47 index46 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">return</code> <code className="plain">0;&nbsp; </code></div>
                  <div className="line number48 index47 alt1"><code className="plain">&#125;&nbsp; </code></div>
                  <div className="line number49 index48 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number50 index49 alt1"><code className="comments">&#47;&#47; This code is collected from GeekforGekks. </code></div>
                </div>
              </div>
            </h5>
          </code>
        </Text>
      </div>
    );
  }
);