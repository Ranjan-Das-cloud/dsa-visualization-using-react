import React, { forwardRef, HTMLAttributes } from "react";
import { Text } from "@react-md/typography";

export default forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function PageI5(props, ref) {
    return (
      <div {...props} ref={ref} className="mt-3 mb-1">
        <Text type="headline-4">Source code in C#</Text>
        <Text>
          <code>
            <h5 className="mt-5 mb-4"><span><h4 style={{color:'#f0ffff'}}>Implementation of Insertion Sort</h4></span>
              <div className="container text-left">
                <div className="offset-3 mt-4 mb-5">
                  <div className="line number1 index0 alt2"><code className="comments">&#47;&#47; C# program for implementation of Insertion Sort </code></div>
                  <div className="line number2 index1 alt1"><code className="keyword">using</code> <code className="plain">System; </code></div>
                  <div className="line number3 index2 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number4 index3 alt1"><code className="keyword">class</code> <code className="plain">InsertionSort &#123; </code></div>
                  <div className="line number5 index4 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number6 index5 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Function to sort array </code></div>
                  <div className="line number7 index6 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; using insertion sort </code></div>
                  <div className="line number8 index7 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">void</code> <code className="plain">sort(</code><code className="keyword">int</code><code className="plain">[] arr) </code></div>
                  <div className="line number9 index8 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#123; </code></div>
                  <div className="line number10 index9 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">int</code> <code className="plain">n = arr.Length; </code></div>
                  <div className="line number11 index10 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">for</code> <code className="plain">(</code><code className="keyword">int</code> <code className="plain">i = 1; i &lt; n; ++i) &#123; </code></div>
                  <div className="line number12 index11 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">int</code> <code className="plain">key = arr[i]; </code></div>
                  <div className="line number13 index12 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">int</code> <code className="plain">j = i - 1; </code></div>
                  <div className="line number14 index13 alt1 highlighted"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number15 index14 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Move elements of arr[0..i-1], </code></div>
                  <div className="line number16 index15 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; that are greater than key, </code></div>
                  <div className="line number17 index16 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; to one position ahead of </code></div>
                  <div className="line number18 index17 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; their current position </code></div>
                  <div className="line number19 index18 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">while</code> <code className="plain">(j &gt;= 0 &amp;&amp; arr[j] &gt; key) &#123; </code></div>
                  <div className="line number20 index19 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">arr[j + 1] = arr[j]; </code></div>
                  <div className="line number21 index20 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">j = j - 1; </code></div>
                  <div className="line number22 index21 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125; </code></div>
                  <div className="line number23 index22 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">arr[j + 1] = key; </code></div>
                  <div className="line number24 index23 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125; </code></div>
                  <div className="line number25 index24 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125; </code></div>
                  <div className="line number26 index25 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number27 index26 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; A utility function to print </code></div>
                  <div className="line number28 index27 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; array of size n </code></div>
                  <div className="line number29 index28 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">static</code> <code className="keyword">void</code> <code className="plain">printArray(</code><code className="keyword">int</code><code className="plain">[] arr) </code></div>
                  <div className="line number30 index29 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#123; </code></div>
                  <div className="line number31 index30 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">int</code> <code className="plain">n = arr.Length; </code></div>
                  <div className="line number32 index31 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">for</code> <code className="plain">(</code><code className="keyword">int</code> <code className="plain">i = 0; i &lt; n; ++i) </code></div>
                  <div className="line number33 index32 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">Console.Write(arr[i] + </code><code className="string">" "</code><code className="plain">); </code></div>
                  <div className="line number34 index33 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number35 index34 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">Console.Write(</code><code className="string">"\n"</code><code className="plain">); </code></div>
                  <div className="line number36 index35 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125; </code></div>
                  <div className="line number37 index36 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number38 index37 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Driver Code </code></div>
                  <div className="line number39 index38 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">public</code> <code className="keyword">static</code> <code className="keyword">void</code> <code className="plain">Main() </code></div>
                  <div className="line number40 index39 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#123; </code></div>
                  <div className="line number41 index40 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">int</code><code className="plain">[] arr = &#123; 12, 11, 13, 5, 6 &#125;; </code></div>
                  <div className="line number42 index41 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">InsertionSort ob = </code><code className="keyword">new</code> <code className="plain">InsertionSort(); </code></div>
                  <div className="line number43 index42 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">ob.sort(arr); </code></div>
                  <div className="line number44 index43 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">printArray(arr); </code></div>
                  <div className="line number45 index44 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125; </code></div>
                  <div className="line number46 index45 alt1"><code className="plain">&#125; </code></div>
                  <div className="line number47 index46 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                </div>
              </div>
            </h5>
            <h5 className="mt-5 mb-4"><span><h4 style={{color:'#f0ffff'}}><b>Recursive </b>Implementation of Insertion Sort</h4></span>
              <div className="container text-left">
                <div className="offset-3 mt-4 mb-5">
                  <div className="line number1 index0 alt2"><code className="comments">&#47;&#47; Recursive C# program&nbsp; </code></div>
                  <div className="line number2 index1 alt1"><code className="comments">&#47;&#47; for insertion sort </code></div>
                  <div className="line number3 index2 alt2"><code className="keyword">using</code> <code className="plain">System; </code></div>
                  <div className="line number4 index3 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number5 index4 alt2"><code className="keyword">class</code> <code className="plain">GFG </code></div>
                  <div className="line number6 index5 alt1"><code className="plain">&#123; </code></div>
                  <div className="line number7 index6 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number8 index7 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Recursive function to sort&nbsp; </code></div>
                  <div className="line number9 index8 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; an array using insertion sort </code></div>
                  <div className="line number10 index9 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">static</code> <code className="keyword">void</code> <code className="plain">insertionSortRecursive(</code><code className="keyword">int</code> <code className="plain">[]arr,&nbsp; </code></div>
                  <div className="line number11 index10 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">int</code> <code className="plain">n) </code></div>
                  <div className="line number12 index11 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#123; </code></div>
                  <div className="line number13 index12 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Base case </code></div>
                  <div className="line number14 index13 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="plain">(n &lt;= 1) </code></div>
                  <div className="line number15 index14 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">return</code><code className="plain">; </code></div>
                  <div className="line number16 index15 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number17 index16 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Sort first n-1 elements </code></div>
                  <div className="line number18 index17 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">insertionSortRecursive(arr, n - 1); </code></div>
                  <div className="line number19 index18 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number20 index19 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Insert last element at&nbsp; </code></div>
                  <div className="line number21 index20 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; its correct position </code></div>
                  <div className="line number22 index21 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; in sorted array. </code></div>
                  <div className="line number23 index22 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">int</code> <code className="plain">last = arr[n - 1]; </code></div>
                  <div className="line number24 index23 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">int</code> <code className="plain">j = n - 2; </code></div>
                  <div className="line number25 index24 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number26 index25 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#8727; Move elements of arr[0..i-1],&nbsp; </code></div>
                  <div className="line number27 index26 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">that are greater than key, to&nbsp; </code></div>
                  <div className="line number28 index27 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">one position ahead of their </code></div>
                  <div className="line number29 index28 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">current position &#8727;&#47;</code></div>
                  <div className="line number30 index29 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">while</code> <code className="plain">(j &gt;= 0 &amp;&amp; arr[j] &gt; last) </code></div>
                  <div className="line number31 index30 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#123; </code></div>
                  <div className="line number32 index31 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">arr[j + 1] = arr[j]; </code></div>
                  <div className="line number33 index32 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">j--; </code></div>
                  <div className="line number34 index33 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125; </code></div>
                  <div className="line number35 index34 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">arr[j + 1] = last; </code></div>
                  <div className="line number36 index35 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125; </code></div>
                  <div className="line number37 index36 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number38 index37 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47;Driver Code </code></div>
                  <div className="line number39 index38 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">static</code> <code className="keyword">void</code> <code className="plain">Main() </code></div>
                  <div className="line number40 index39 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#123; </code></div>
                  <div className="line number41 index40 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">int</code> <code className="plain">[]arr = &#123;12, 11, 13, 5, 6&#125;; </code></div>
                  <div className="line number42 index41 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number43 index42 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">insertionSortRecursive(arr, arr.Length); </code></div>
                  <div className="line number44 index43 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number45 index44 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">for</code><code className="plain">(</code><code className="keyword">int</code> <code className="plain">i = 0; i &lt; arr.Length; i++) </code></div>
                  <div className="line number46 index45 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">Console.Write(arr[i] + </code><code className="string">" "</code><code className="plain">); </code></div>
                  <div className="line number47 index46 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125; </code></div>
                  <div className="line number48 index47 alt1"><code className="plain">&#125; </code></div>
                  <div className="line number49 index48 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                </div>
              </div>
            </h5>
          </code>
        </Text>
      </div>
    );
  }
);