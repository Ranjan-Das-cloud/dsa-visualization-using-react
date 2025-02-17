import React, { forwardRef, HTMLAttributes } from "react";
import { Text } from "@react-md/typography";

export default forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function PageBu2(props, ref) {
    return (
      <div {...props} ref={ref} className="mt-3 mb-1">
        <Text type="headline-4">Source code in C++</Text>
        <Text>
          <code>
            <h5 className="mt-5 mb-4"><span><h4 style={{color:'#f0ffff'}}>Implementation of Bubble Sort</h4></span>
              <div className="container text-left">
                <div className="offset-3 mt-4 mb-5">
                  <div className="line number1 index0 alt2"><code className="comments">&#47;&#47; C++ program for implementation of Bubble sort&nbsp; </code></div>
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
                  <div className="line number12 index11 alt1"><code className="comments">&#47;&#47; A function to implement bubble sort&nbsp; </code></div>
                  <div className="line number13 index12 alt2"><code className="keyword bold">void</code> <code className="plain">bubbleSort(</code><code className="color1 bold">int</code> <code className="plain">arr[], </code><code className="color1 bold">int</code> <code className="plain">n)&nbsp; </code></div>
                  <div className="line number14 index13 alt1"><code className="plain">&#123;&nbsp; </code></div>
                  <div className="line number15 index14 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">i, j;&nbsp; </code></div>
                  <div className="line number16 index15 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">for</code> <code className="plain">(i = 0; i &lt; n-1; i++)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </code></div>
                  <div className="line number17 index16 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number18 index17 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Last i elements are already in place&nbsp; </code></div>
                  <div className="line number19 index18 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">for</code> <code className="plain">(j = 0; j &lt; n-i-1; j++)&nbsp; </code></div>
                  <div className="line number20 index19 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">if</code> <code className="plain">(arr[j] &gt; arr[j+1])&nbsp; </code></div>
                  <div className="line number21 index20 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">swap(&amp;arr[j], &amp;arr[j+1]);&nbsp; </code></div>
                  <div className="line number22 index21 alt1"><code className="plain">&#125;&nbsp; </code></div>
                  <div className="line number23 index22 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number24 index23 alt1"><code className="comments">&#47;&#8727; Function to print an array &#8727;&#47;</code></div>
                  <div className="line number25 index24 alt2"><code className="keyword bold">void</code> <code className="plain">printArray(</code><code className="color1 bold">int</code> <code className="plain">arr[], </code><code className="color1 bold">int</code> <code className="plain">size)&nbsp; </code></div>
                  <div className="line number26 index25 alt1"><code className="plain">&#123;&nbsp; </code></div>
                  <div className="line number27 index26 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">i;&nbsp; </code></div>
                  <div className="line number28 index27 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">for</code> <code className="plain">(i = 0; i &lt; size; i++)&nbsp; </code></div>
                  <div className="line number29 index28 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">cout &lt;&lt; arr[i] &lt;&lt; </code><code className="string">" "</code><code className="plain">;&nbsp; </code></div>
                  <div className="line number30 index29 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">cout &lt;&lt; endl;&nbsp; </code></div>
                  <div className="line number31 index30 alt2"><code className="plain">&#125;&nbsp; </code></div>
                  <div className="line number32 index31 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number33 index32 alt2"><code className="comments">&#47;&#47; Driver code&nbsp; </code></div>
                  <div className="line number34 index33 alt1"><code className="color1 bold">int</code> <code className="plain">main()&nbsp; </code></div>
                  <div className="line number35 index34 alt2"><code className="plain">&#123;&nbsp; </code></div>
                  <div className="line number36 index35 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">arr[] = &#123;64, 34, 25, 12, 22, 11, 90&#125;;&nbsp; </code></div>
                  <div className="line number37 index36 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">n = </code><code className="keyword bold">sizeof</code><code className="plain">(arr)/</code><code className="keyword bold">sizeof</code><code className="plain">(arr[0]);&nbsp; </code></div>
                  <div className="line number38 index37 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">bubbleSort(arr, n);&nbsp; </code></div>
                  <div className="line number39 index38 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">cout&lt;&lt;</code><code className="string">"Sorted array: \n"</code><code className="plain">;&nbsp; </code></div>
                  <div className="line number40 index39 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">printArray(arr, n);&nbsp; </code></div>
                  <div className="line number41 index40 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">return</code> <code className="plain">0;&nbsp; </code></div>
                  <div className="line number42 index41 alt1"><code className="plain">&#125;&nbsp; </code></div>
                  <div className="line number43 index42 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                </div>
              </div>
            </h5>
            <h5 className="mt-5 mb-4"><span><h4 style={{color:'#f0ffff'}}><b>Recursive </b>Implementation of Bubble Sort</h4></span>
              <div className="container text-left">
                <div className="offset-3 mt-4 mb-5">
                  <div className="line number1 index0 alt2"><code className="comments">&#47;&#47; C/C++ program for recursive implementation</code></div>
                  <div className="line number2 index1 alt1"><code className="comments">&#47;&#47; of Bubble sort</code></div>
                  <div className="line number3 index2 alt2"><code className="preprocessor">#include &lt;bits/stdc++.h&gt;</code></div>
                  <div className="line number4 index3 alt1"><code className="keyword bold">using</code> <code className="keyword bold">namespace</code> <code className="plain">std;</code></div>
                  <div className="line number5 index4 alt2">&nbsp;</div>
                  <div className="line number6 index5 alt1"><code className="comments">&#47;&#47; A function to implement bubble sort</code></div>
                  <div className="line number7 index6 alt2"><code className="keyword bold">void</code> <code className="plain">bubbleSort(</code><code className="color1 bold">int</code> <code className="plain">arr[], </code><code className="color1 bold">int</code> <code className="plain">n)</code></div>
                  <div className="line number8 index7 alt1"><code className="plain">&#123;</code></div>
                  <div className="line number9 index8 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Base case</code></div>
                  <div className="line number10 index9 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">if</code> <code className="plain">(n == 1)</code></div>
                  <div className="line number11 index10 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">return</code><code className="plain">;</code></div>
                  <div className="line number12 index11 alt1">&nbsp;</div>
                  <div className="line number13 index12 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; One pass of bubble sort. After</code></div>
                  <div className="line number14 index13 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; this pass, the largest element</code></div>
                  <div className="line number15 index14 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; is moved (or bubbled) to end.</code></div>
                  <div className="line number16 index15 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">for</code> <code className="plain">(</code><code className="color1 bold">int</code> <code className="plain">i=0; i&lt;n-1; i++)</code></div>
                  <div className="line number17 index16 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">if</code> <code className="plain">(arr[i] &gt; arr[i+1])</code></div>
                  <div className="line number18 index17 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">swap(arr[i], arr[i+1]);</code></div>
                  <div className="line number19 index18 alt2">&nbsp;</div>
                  <div className="line number20 index19 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Largest element is fixed,</code></div>
                  <div className="line number21 index20 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; recur for remaining array</code></div>
                  <div className="line number22 index21 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">bubbleSort(arr, n-1);</code></div>
                  <div className="line number23 index22 alt2"><code className="plain">&#125;</code></div>
                  <div className="line number24 index23 alt1">&nbsp;</div>
                  <div className="line number25 index24 alt2"><code className="comments">&#47;&#8727; Function to print an array &#8727;&#47;</code></div>
                  <div className="line number26 index25 alt1"><code className="keyword bold">void</code> <code className="plain">printArray(</code><code className="color1 bold">int</code> <code className="plain">arr[], </code><code className="color1 bold">int</code> <code className="plain">n)</code></div>
                  <div className="line number27 index26 alt2"><code className="plain">&#123;</code></div>
                  <div className="line number28 index27 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">for</code> <code className="plain">(</code><code className="color1 bold">int</code> <code className="plain">i=0; i &lt; n; i++)</code></div>
                  <div className="line number29 index28 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="functions bold">printf</code><code className="plain">(</code><code className="string">"%d "</code><code className="plain">, arr[i]);</code></div>
                  <div className="line number30 index29 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="functions bold">printf</code><code className="plain">(</code><code className="string">"\n"</code><code className="plain">);</code></div>
                  <div className="line number31 index30 alt2"><code className="plain">&#125;</code></div>
                  <div className="line number32 index31 alt1">&nbsp;</div>
                  <div className="line number33 index32 alt2"><code className="comments">&#47;&#47; Driver program to test above functions</code></div>
                  <div className="line number34 index33 alt1"><code className="color1 bold">int</code> <code className="plain">main()</code></div>
                  <div className="line number35 index34 alt2"><code className="plain">&#123;</code></div>
                  <div className="line number36 index35 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">arr[] = &#123;64, 34, 25, 12, 22, 11, 90&#125;;</code></div>
                  <div className="line number37 index36 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">n = </code><code className="keyword bold">sizeof</code><code className="plain">(arr)/</code><code className="keyword bold">sizeof</code><code className="plain">(arr[0]);</code></div>
                  <div className="line number38 index37 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">bubbleSort(arr, n);</code></div>
                  <div className="line number39 index38 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="functions bold">printf</code><code className="plain">(</code><code className="string">"Sorted array : \n"</code><code className="plain">);</code></div>
                  <div className="line number40 index39 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">printArray(arr, n);</code></div>
                  <div className="line number41 index40 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">return</code> <code className="plain">0;</code></div>
                  <div className="line number42 index41 alt1"><code className="plain">&#125;</code></div>
                </div>
              </div>
            </h5>
          </code>
        </Text>
      </div>
    );
  }
);