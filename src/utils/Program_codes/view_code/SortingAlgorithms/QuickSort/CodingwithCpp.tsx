import React, { forwardRef, HTMLAttributes } from "react";
import { Text } from "@react-md/typography";

export default forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function PageQ2(props, ref) {
    return (
      <div {...props} ref={ref} className="mt-3 mb-1">
        <Text type="headline-4">Source code in C++</Text>
        <Text>
          <code>
            <h5 className="mt-5 mb-4"><span><h4 style={{color:'#f0ffff'}}>Implementation of Quick Sort</h4></span>
              <div className="container text-left">
                <div className="offset-3 mt-4 mb-5">
                  <div className="line number1 index0 alt2"><code className="comments">/* C++ implementation of QuickSort */</code></div>
                  <div className="line number2 index1 alt1"><code className="preprocessor">#include &lt;bits/stdc++.h&gt; </code></div>
                  <div className="line number3 index2 alt2"><code className="keyword bold">using</code> <code className="keyword bold">namespace</code> <code className="plain">std;&nbsp; </code></div>
                  <div className="line number4 index3 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number5 index4 alt2"><code className="comments">&#47;&#47; A utility function to swap two elements&nbsp; </code></div>
                  <div className="line number6 index5 alt1"><code className="keyword bold">void</code> <code className="plain">swap(</code><code className="color1 bold">int</code><code className="plain">* a, </code><code className="color1 bold">int</code><code className="plain">* b)&nbsp; </code></div>
                  <div className="line number7 index6 alt2"><code className="plain">&#123;&nbsp; </code></div>
                  <div className="line number8 index7 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">t = *a;&nbsp; </code></div>
                  <div className="line number9 index8 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">*a = *b;&nbsp; </code></div>
                  <div className="line number10 index9 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">*b = t;&nbsp; </code></div>
                  <div className="line number11 index10 alt2"><code className="plain">&#125;&nbsp; </code></div>
                  <div className="line number12 index11 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number13 index12 alt2"><code className="comments">/* This function takes last element as pivot, places&nbsp; </code></div>
                  <div className="line number14 index13 alt1"><code className="comments">the pivot element at its correct position in sorted&nbsp; </code></div>
                  <div className="line number15 index14 alt2"><code className="comments">array, and places all smaller (smaller than pivot)&nbsp; </code></div>
                  <div className="line number16 index15 alt1"><code className="comments">to left of pivot and all greater elements to right&nbsp; </code></div>
                  <div className="line number17 index16 alt2"><code className="comments">of pivot */</code></div>
                  <div className="line number18 index17 alt1"><code className="color1 bold">int</code> <code className="plain">partition (</code><code className="color1 bold">int</code> <code className="plain">arr[], </code><code className="color1 bold">int</code> <code className="plain">low, </code><code className="color1 bold">int</code> <code className="plain">high)&nbsp; </code></div>
                  <div className="line number19 index18 alt2"><code className="plain">&#123;&nbsp; </code></div>
                  <div className="line number20 index19 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">pivot = arr[high]; </code><code className="comments">&#47;&#47; pivot&nbsp; </code></div>
                  <div className="line number21 index20 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">i = (low - 1); </code><code className="comments">&#47;&#47; Index of smaller element&nbsp; </code></div>
                  <div className="line number22 index21 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number23 index22 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">for</code> <code className="plain">(</code><code className="color1 bold">int</code> <code className="plain">j = low; j &lt;= high - 1; j++)&nbsp; </code></div>
                  <div className="line number24 index23 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#123;&nbsp; </code></div>
                  <div className="line number25 index24 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; If current element is smaller than the pivot&nbsp; </code></div>
                  <div className="line number26 index25 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">if</code> <code className="plain">(arr[j] &lt; pivot)&nbsp; </code></div>
                  <div className="line number27 index26 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#123;&nbsp; </code></div>
                  <div className="line number28 index27 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">i++; </code><code className="comments">&#47;&#47; increment index of smaller element&nbsp; </code></div>
                  <div className="line number29 index28 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">swap(&amp;arr[i], &amp;arr[j]);&nbsp; </code></div>
                  <div className="line number30 index29 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125;&nbsp; </code></div>
                  <div className="line number31 index30 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125;&nbsp; </code></div>
                  <div className="line number32 index31 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">swap(&amp;arr[i + 1], &amp;arr[high]);&nbsp; </code></div>
                  <div className="line number33 index32 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">return</code> <code className="plain">(i + 1);&nbsp; </code></div>
                  <div className="line number34 index33 alt1"><code className="plain">&#125;&nbsp; </code></div>
                  <div className="line number35 index34 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number36 index35 alt1"><code className="comments">/* The main function that implements QuickSort&nbsp; </code></div>
                  <div className="line number37 index36 alt2"><code className="comments">arr[] --&gt; Array to be sorted,&nbsp; </code></div>
                  <div className="line number38 index37 alt1"><code className="comments">low --&gt; Starting index,&nbsp; </code></div>
                  <div className="line number39 index38 alt2"><code className="comments">high --&gt; Ending index */</code></div>
                  <div className="line number40 index39 alt1"><code className="keyword bold">void</code> <code className="plain">quickSort(</code><code className="color1 bold">int</code> <code className="plain">arr[], </code><code className="color1 bold">int</code> <code className="plain">low, </code><code className="color1 bold">int</code> <code className="plain">high)&nbsp; </code></div>
                  <div className="line number41 index40 alt2"><code className="plain">&#123;&nbsp; </code></div>
                  <div className="line number42 index41 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">if</code> <code className="plain">(low &lt; high)&nbsp; </code></div>
                  <div className="line number43 index42 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#123;&nbsp; </code></div>
                  <div className="line number44 index43 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">/* pi is partitioning index, arr[p] is now&nbsp; </code></div>
                  <div className="line number45 index44 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">at right place */</code></div>
                  <div className="line number46 index45 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">pi = partition(arr, low, high);&nbsp; </code></div>
                  <div className="line number47 index46 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number48 index47 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Separately sort elements before&nbsp; </code></div>
                  <div className="line number49 index48 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; partition and after partition&nbsp; </code></div>
                  <div className="line number50 index49 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">quickSort(arr, low, pi - 1);&nbsp; </code></div>
                  <div className="line number51 index50 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">quickSort(arr, pi + 1, high);&nbsp; </code></div>
                  <div className="line number52 index51 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125;&nbsp; </code></div>
                  <div className="line number53 index52 alt2"><code className="plain">&#125;&nbsp; </code></div>
                  <div className="line number54 index53 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number55 index54 alt2"><code className="comments">/* Function to print an array */</code></div>
                  <div className="line number56 index55 alt1"><code className="keyword bold">void</code> <code className="plain">printArray(</code><code className="color1 bold">int</code> <code className="plain">arr[], </code><code className="color1 bold">int</code> <code className="plain">size)&nbsp; </code></div>
                  <div className="line number57 index56 alt2"><code className="plain">&#123;&nbsp; </code></div>
                  <div className="line number58 index57 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">i;&nbsp; </code></div>
                  <div className="line number59 index58 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">for</code> <code className="plain">(i = 0; i &lt; size; i++)&nbsp; </code></div>
                  <div className="line number60 index59 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">cout &lt;&lt; arr[i] &lt;&lt; </code><code className="string">" "</code><code className="plain">;&nbsp; </code></div>
                  <div className="line number61 index60 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">cout &lt;&lt; endl;&nbsp; </code></div>
                  <div className="line number62 index61 alt1"><code className="plain">&#125;&nbsp; </code></div>
                  <div className="line number63 index62 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number64 index63 alt1"><code className="comments">&#47;&#47; Driver Code </code></div>
                  <div className="line number65 index64 alt2"><code className="color1 bold">int</code> <code className="plain">main()&nbsp; </code></div>
                  <div className="line number66 index65 alt1"><code className="plain">&#123;&nbsp; </code></div>
                  <div className="line number67 index66 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">arr[] = &#123;10, 7, 8, 9, 1, 5&#125;;&nbsp; </code></div>
                  <div className="line number68 index67 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">n = </code><code className="keyword bold">sizeof</code><code className="plain">(arr) / </code><code className="keyword bold">sizeof</code><code className="plain">(arr[0]);&nbsp; </code></div>
                  <div className="line number69 index68 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">quickSort(arr, 0, n - 1);&nbsp; </code></div>
                  <div className="line number70 index69 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">cout &lt;&lt; </code><code className="string">"Sorted array: \n"</code><code className="plain">;&nbsp; </code></div>
                  <div className="line number71 index70 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">printArray(arr, n);&nbsp; </code></div>
                  <div className="line number72 index71 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">return</code> <code className="plain">0;&nbsp; </code></div>
                  <div className="line number73 index72 alt2"><code className="plain">&#125;&nbsp; </code></div>
                  <div className="line number74 index73 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                </div>
              </div>
            </h5>
          </code>
        </Text>
      </div>
    );
  }
);