import React, { forwardRef, HTMLAttributes } from "react";
import { Text } from "@react-md/typography";

export default forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function PageB1(props, ref) {
    return (
      <div {...props} ref={ref} className="mt-3 mb-1">
        <Text type="headline-4">Source code in C</Text>
        <Text>
          <code>
            <div className="container text-left offset-4"><h5 className="mt-5 mb-4"><span><h4 className="bg-success"><b>Recursive</b> implementation of Binary Search</h4></span>
              <div className="line number1 index0 alt2"><code className="comments">&#47;&#47; C program to implement recursive Binary Search </code></div>
              <div className="line number2 index1 alt1"><code className="preprocessor">#include &lt;stdio.h&gt; </code></div>
              <div className="line number3 index2 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
              <div className="line number4 index3 alt1"><code className="comments">&#47;&#8727; A recursive binary search function. It returns </code></div>
              <div className="line number5 index4 alt2"><code className="comments"> location of x in given array arr[l..r] is present, </code></div>
              <div className="line number6 index5 alt1"><code className="comments"> otherwise -1 &#8727;&#47;</code></div>
              <div className="line number7 index6 alt2"><code className="color1 bold">int</code> <code className="plain">binarySearch(</code><code className="color1 bold">int</code> <code className="plain">arr[], </code><code className="color1 bold">int</code> <code className="plain">l, </code><code className="color1 bold">int</code> <code className="plain">r, </code><code className="color1 bold">int</code> <code className="plain">x) </code></div>
              <div className="line number8 index7 alt1"><code className="plain">&#123; </code></div>
              <div className="line number9 index8 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">if</code> <code className="plain">(r &gt;= l) &#123; </code></div>
              <div className="line number10 index9 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">mid = l + (r - l) / 2; </code></div>
              <div className="line number11 index10 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
              <div className="line number12 index11 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#8727; If the element is present at the middle </code></div>
              <div className="line number13 index12 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"> itself &#8727;&#47;</code></div>
              <div className="line number14 index13 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">if</code> <code className="plain">(arr[mid] == x) </code></div>
              <div className="line number15 index14 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">return</code> <code className="plain">mid; </code></div>
              <div className="line number16 index15 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
              <div className="line number17 index16 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#8727; If element is smaller than mid, then </code></div>
              <div className="line number18 index17 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"> it can only be present in left subarray &#8727;&#47;</code></div>
              <div className="line number19 index18 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">if</code> <code className="plain">(arr[mid] &gt; x) </code></div>
              <div className="line number20 index19 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">return</code> <code className="plain">binarySearch(arr, l, mid - 1, x); </code></div>
              <div className="line number21 index20 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
              <div className="line number22 index21 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#8727; Else the element can only be present </code></div>
              <div className="line number23 index22 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"> in right subarray &#8727;&#47;</code></div>
              <div className="line number24 index23 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">return</code> <code className="plain">binarySearch(arr, mid + 1, r, x); </code></div>
              <div className="line number25 index24 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125; </code></div>
              <div className="line number26 index25 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
              <div className="line number27 index26 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#8727; We reach here when element is not </code></div>
              <div className="line number28 index27 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"> present in array &#8727;&#47;</code></div>
              <div className="line number29 index28 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">return</code> <code className="plain">-1; </code></div>
              <div className="line number30 index29 alt1"><code className="plain">&#125; </code></div>
              <div className="line number31 index30 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
              <div className="line number32 index31 alt1"><code className="color1 bold">int</code> <code className="plain">main(</code><code className="keyword bold">void</code><code className="plain">) </code></div>
              <div className="line number33 index32 alt2"><code className="plain">&#123; </code></div>
              <div className="line number34 index33 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">arr[] = &#123; 2, 3, 4, 10, 40 &#125;; </code></div>
              <div className="line number35 index34 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">n = </code><code className="keyword bold">sizeof</code><code className="plain">(arr) / </code><code className="keyword bold">sizeof</code><code className="plain">(arr[0]); </code></div>
              <div className="line number36 index35 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">x = 10; </code></div>
              <div className="line number37 index36 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">result = binarySearch(arr, 0, n - 1, x); </code></div>
              <div className="line number38 index37 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">(result == -1) ? </code><code className="functions bold">printf</code><code className="plain">(</code><code className="string">"Element is not present in array"</code><code className="plain">) </code></div>
              <div className="line number39 index38 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">: </code><code className="functions bold">printf</code><code className="plain">(</code><code className="string">"Element is present at index %d"</code><code className="plain">, </code></div>
              <div className="line number40 index39 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">result); </code></div>
              <div className="line number41 index40 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">return</code> <code className="plain">0; </code></div>
              <div className="line number42 index41 alt1"><code className="plain">&#125; </code></div></h5>
              </div>

              <h5 className="mt-4 mb-4">
              <span><h4 className="bg-success"><b>Iterative</b> implementation of Binary Search</h4></span>
                  <div className="container text-left offset-4">
                      <div className="line number1 index0 alt2"><code className="comments">&#47;&#47; C program to implement iterative Binary Search </code></div>
                      <div className="line number2 index1 alt1"><code className="preprocessor">#include &lt;stdio.h&gt; </code></div>
                      <div className="line number3 index2 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                      <div className="line number4 index3 alt1"><code className="comments">&#47;&#8727; A iterative binary search function. It returns </code></div>
                      <div className="line number5 index4 alt2"><code className="comments"> location of x in given array arr[l..r] if present, </code></div>
                      <div className="line number6 index5 alt1"><code className="comments"> otherwise -1 &#8727;&#47;</code></div>
                      <div className="line number7 index6 alt2"><code className="color1 bold">int</code> <code className="plain">binarySearch(</code><code className="color1 bold">int</code> <code className="plain">arr[], </code><code className="color1 bold">int</code> <code className="plain">l, </code><code className="color1 bold">int</code> <code className="plain">r, </code><code className="color1 bold">int</code> <code className="plain">x) </code></div>
                      <div className="line number8 index7 alt1"><code className="plain">&#123; </code></div>
                      <div className="line number9 index8 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">while</code> <code className="plain">(l &lt;= r) &#123; </code></div>
                      <div className="line number10 index9 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">m = l + (r - l) / 2; </code></div>
                      <div className="line number11 index10 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                      <div className="line number12 index11 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Check if x is present at mid </code></div>
                      <div className="line number13 index12 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">if</code> <code className="plain">(arr[m] == x) </code></div>
                      <div className="line number14 index13 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">return</code> <code className="plain">m; </code></div>
                      <div className="line number15 index14 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                      <div className="line number16 index15 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; If x greater, ignore left half </code></div>
                      <div className="line number17 index16 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">if</code> <code className="plain">(arr[m] &lt; x) </code></div>
                      <div className="line number18 index17 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">l = m + 1; </code></div>
                      <div className="line number19 index18 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                      <div className="line number20 index19 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; If x is smaller, ignore right half </code></div>
                      <div className="line number21 index20 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">else</code></div>
                      <div className="line number22 index21 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">r = m - 1; </code></div>
                      <div className="line number23 index22 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125; </code></div>
                      <div className="line number24 index23 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                      <div className="line number25 index24 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#8727; if we reach here, then element was </code></div>
                      <div className="line number26 index25 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"> not present &#8727;&#47;</code></div>
                      <div className="line number27 index26 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">return</code> <code className="plain">-1; </code></div>
                      <div className="line number28 index27 alt1"><code className="plain">&#125; </code></div>
                      <div className="line number29 index28 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                      <div className="line number30 index29 alt1"><code className="color1 bold">int</code> <code className="plain">main(</code><code className="keyword bold">void</code><code className="plain">) </code></div>
                      <div className="line number31 index30 alt2"><code className="plain">&#123; </code></div>
                      <div className="line number32 index31 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">arr[] = &#123; 2, 3, 4, 10, 40 &#125;; </code></div>
                      <div className="line number33 index32 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">n = </code><code className="keyword bold">sizeof</code><code className="plain">(arr) / </code><code className="keyword bold">sizeof</code><code className="plain">(arr[0]); </code></div>
                      <div className="line number34 index33 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">x = 10; </code></div>
                      <div className="line number35 index34 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1 bold">int</code> <code className="plain">result = binarySearch(arr, 0, n - 1, x); </code></div>
                      <div className="line number36 index35 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">(result == -1) ? </code><code className="functions bold">printf</code><code className="plain">(</code><code className="string">"Element is not present"</code></div>
                      <div className="line number37 index36 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="string">" in array"</code><code className="plain">) </code></div>
                      <div className="line number38 index37 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">: </code><code className="functions bold">printf</code><code className="plain">(</code><code className="string">"Element is present at "</code></div>
                      <div className="line number39 index38 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="string">"index %d"</code><code className="plain">, </code></div>
                      <div className="line number40 index39 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">result); </code></div>
                      <div className="line number41 index40 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword bold">return</code> <code className="plain">0; </code></div>
                      <div className="line number42 index41 alt1"><code className="plain">&#125; </code></div>
                  </div>
              </h5>
              </code>
        </Text>
      </div>
    );
  }
);