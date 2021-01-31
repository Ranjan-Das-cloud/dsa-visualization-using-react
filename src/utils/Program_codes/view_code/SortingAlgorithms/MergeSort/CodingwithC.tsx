import React, { forwardRef, HTMLAttributes } from "react";
import { Text } from "@react-md/typography";

export default forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function PageB6(props, ref) {
    return (
      <div {...props} ref={ref} className="mt-3 mb-1">
        <Text type="headline-4">Source code in C</Text>
        <Text>
          <code>
            <h5 className="mt-5 mb-4"><span><h4 style={{color:'#f0ffff'}}>Implementation of Merge Sort</h4></span>
              <div className="container text-left">
                <div className="offset-3 mt-4 mb-5">
                  <div className="line number1 index0 alt2"><code className="comments">/* C program for Merge Sort */</code></div>
                  <div className="line number2 index1 alt1"><code className="preprocessor">#include &lt;stdio.h&gt;</code></div>
                  <div className="line number3 index2 alt2"><code className="preprocessor">#include &lt;stdlib.h&gt;</code></div>
                  <div className="line number4 index3 alt1">&nbsp;</div>
                  <div className="line number5 index4 alt2"><code className="comments">&#47;&#47; Merges two subarrays of arr[].</code></div>
                  <div className="line number6 index5 alt1"><code className="comments">&#47;&#47; First subarray is arr[l..m]</code></div>
                  <div className="line number7 index6 alt2"><code className="comments">&#47;&#47; Second subarray is arr[m+1..r]</code></div>
                  <div className="line number8 index7 alt1"><code className="keyword bold">void</code> <code className="plain">merge(</code><code className="color1 bold">int</code> <code className="plain">arr[], </code><code className="color1 bold">int</code> <code className="plain">l, </code><code className="color1 bold">int</code> <code className="plain">m, </code><code className="color1 bold">int</code> <code className="plain">r)</code></div>
                  <div className="line number9 index8 alt2"><code className="plain">&#123;</code></div>
                  <div className="line number10 index9 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">i, j, k;</code></div>
                  <div className="line number11 index10 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">n1 = m - l + 1;</code></div>
                  <div className="line number12 index11 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">n2 = r - m;</code></div>
                  <div className="line number13 index12 alt2">&nbsp;</div>
                  <div className="line number14 index13 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">/* create temp arrays */</code></div>
                  <div className="line number15 index14 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">L[n1], R[n2];</code></div>
                  <div className="line number16 index15 alt1">&nbsp;</div>
                  <div className="line number17 index16 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">/* Copy data to temp arrays L[] and R[] */</code></div>
                  <div className="line number18 index17 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">for</code> <code className="plain">(i = 0; i &lt; n1; i++)</code></div>
                  <div className="line number19 index18 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">L[i] = arr[l + i];</code></div>
                  <div className="line number20 index19 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">for</code> <code className="plain">(j = 0; j &lt; n2; j++)</code></div>
                  <div className="line number21 index20 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">R[j] = arr[m + 1 + j];</code></div>
                  <div className="line number22 index21 alt1">&nbsp;</div>
                  <div className="line number23 index22 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">/* Merge the temp arrays back into arr[l..r]*/</code></div>
                  <div className="line number24 index23 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">i = 0; </code><code className="comments">&#47;&#47; Initial index of first subarray</code></div>
                  <div className="line number25 index24 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">j = 0; </code><code className="comments">&#47;&#47; Initial index of second subarray</code></div>
                  <div className="line number26 index25 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">k = l; </code><code className="comments">&#47;&#47; Initial index of merged subarray</code></div>
                  <div className="line number27 index26 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">while</code> <code className="plain">(i &lt; n1 &amp;&amp; j &lt; n2) &#123;</code></div>
                  <div className="line number28 index27 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">if</code> <code className="plain">(L[i] &lt;= R[j]) &#123;</code></div>
                  <div className="line number29 index28 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">arr[k] = L[i];</code></div>
                  <div className="line number30 index29 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">i++;</code></div>
                  <div className="line number31 index30 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125;</code></div>
                  <div className="line number32 index31 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">else</code> <code className="plain">&#123;</code></div>
                  <div className="line number33 index32 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">arr[k] = R[j];</code></div>
                  <div className="line number34 index33 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">j++;</code></div>
                  <div className="line number35 index34 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125;</code></div>
                  <div className="line number36 index35 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">k++;</code></div>
                  <div className="line number37 index36 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125;</code></div>
                  <div className="line number38 index37 alt1">&nbsp;</div>
                  <div className="line number39 index38 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">/* Copy the remaining elements of L[], if there</code></div>
                  <div className="line number40 index39 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">are any */</code></div>
                  <div className="line number41 index40 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">while</code> <code className="plain">(i &lt; n1) &#123;</code></div>
                  <div className="line number42 index41 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">arr[k] = L[i];</code></div>
                  <div className="line number43 index42 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">i++;</code></div>
                  <div className="line number44 index43 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">k++;</code></div>
                  <div className="line number45 index44 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125;</code></div>
                  <div className="line number46 index45 alt1">&nbsp;</div>
                  <div className="line number47 index46 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">/* Copy the remaining elements of R[], if there</code></div>
                  <div className="line number48 index47 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">are any */</code></div>
                  <div className="line number49 index48 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">while</code> <code className="plain">(j &lt; n2) &#123;</code></div>
                  <div className="line number50 index49 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">arr[k] = R[j];</code></div>
                  <div className="line number51 index50 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">j++;</code></div>
                  <div className="line number52 index51 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">k++;</code></div>
                  <div className="line number53 index52 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125;</code></div>
                  <div className="line number54 index53 alt1"><code className="plain">&#125;</code></div>
                  <div className="line number55 index54 alt2">&nbsp;</div>
                  <div className="line number56 index55 alt1"><code className="comments">/* l is for left index and r is right index of the</code></div>
                  <div className="line number57 index56 alt2"><code className="comments">sub-array of arr to be sorted */</code></div>
                  <div className="line number58 index57 alt1"><code className="keyword bold">void</code> <code className="plain">mergeSort(</code><code className="color1 bold">int</code> <code className="plain">arr[], </code><code className="color1 bold">int</code> <code className="plain">l, </code><code className="color1 bold">int</code> <code className="plain">r)</code></div>
                  <div className="line number59 index58 alt2"><code className="plain">&#123;</code></div>
                  <div className="line number60 index59 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">if</code> <code className="plain">(l &lt; r) &#123;</code></div>
                  <div className="line number61 index60 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Same as (l+r)/2, but avoids overflow for</code></div>
                  <div className="line number62 index61 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; large l and h</code></div>
                  <div className="line number63 index62 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">m = l + (r - l) / 2;</code></div>
                  <div className="line number64 index63 alt1">&nbsp;</div>
                  <div className="line number65 index64 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Sort first and second halves</code></div>
                  <div className="line number66 index65 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">mergeSort(arr, l, m);</code></div>
                  <div className="line number67 index66 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">mergeSort(arr, m + 1, r);</code></div>
                  <div className="line number68 index67 alt1">&nbsp;</div>
                  <div className="line number69 index68 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">merge(arr, l, m, r);</code></div>
                  <div className="line number70 index69 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125;</code></div>
                  <div className="line number71 index70 alt2"><code className="plain">&#125;</code></div>
                  <div className="line number72 index71 alt1">&nbsp;</div>
                  <div className="line number73 index72 alt2"><code className="comments">/* UTILITY FUNCTIONS */</code></div>
                  <div className="line number74 index73 alt1"><code className="comments">/* Function to print an array */</code></div>
                  <div className="line number75 index74 alt2"><code className="keyword bold">void</code> <code className="plain">printArray(</code><code className="color1 bold">int</code> <code className="plain">A[], </code><code className="color1 bold">int</code> <code className="plain">size)</code></div>
                  <div className="line number76 index75 alt1"><code className="plain">&#123;</code></div>
                  <div className="line number77 index76 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">i;</code></div>
                  <div className="line number78 index77 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">for</code> <code className="plain">(i = 0; i &lt; size; i++)</code></div>
                  <div className="line number79 index78 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="functions bold">printf</code><code className="plain">(</code><code className="string">"%d "</code><code className="plain">, A[i]);</code></div>
                  <div className="line number80 index79 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="functions bold">printf</code><code className="plain">(</code><code className="string">"\n"</code><code className="plain">);</code></div>
                  <div className="line number81 index80 alt2"><code className="plain">&#125;</code></div>
                  <div className="line number82 index81 alt1">&nbsp;</div>
                  <div className="line number83 index82 alt2"><code className="comments">/* Driver code */</code></div>
                  <div className="line number84 index83 alt1"><code className="color1 bold">int</code> <code className="plain">main()</code></div>
                  <div className="line number85 index84 alt2"><code className="plain">&#123;</code></div>
                  <div className="line number86 index85 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">arr[] = &#123; 12, 11, 13, 5, 6, 7 &#125;;</code></div>
                  <div className="line number87 index86 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">arr_size = </code><code className="keyword bold">sizeof</code><code className="plain">(arr) / </code><code className="keyword bold">sizeof</code><code className="plain">(arr[0]);</code></div>
                  <div className="line number88 index87 alt1">&nbsp;</div>
                  <div className="line number89 index88 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="functions bold">printf</code><code className="plain">(</code><code className="string">"Given array is \n"</code><code className="plain">);</code></div>
                  <div className="line number90 index89 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">printArray(arr, arr_size);</code></div>
                  <div className="line number91 index90 alt2">&nbsp;</div>
                  <div className="line number92 index91 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">mergeSort(arr, 0, arr_size - 1);</code></div>
                  <div className="line number93 index92 alt2">&nbsp;</div>
                  <div className="line number94 index93 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="functions bold">printf</code><code className="plain">(</code><code className="string">"\nSorted array is \n"</code><code className="plain">);</code></div>
                  <div className="line number95 index94 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">printArray(arr, arr_size);</code></div>
                  <div className="line number96 index95 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">return</code> <code className="plain">0;</code></div>
                  <div className="line number97 index96 alt2"><code className="plain">&#125;</code></div>
                </div>
              </div>
            </h5>
          </code>
        </Text>
      </div>
    );
  }
);