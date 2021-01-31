import React, { forwardRef, HTMLAttributes } from "react";
import { Text } from "@react-md/typography";

export default forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function PageI3(props, ref) {
    return (
      <div {...props} ref={ref} className="mt-3 mb-1">
        <Text type="headline-4">Source code in Python</Text>
        <Text>
          <code>
            <h5 className="mt-5 mb-4"><span><h4 style={{color:'#f0ffff'}}>Implementation of Insertion Sort</h4></span>
              <div className="container text-left">
                <div className="offset-3 mt-4 mb-5">
                  <div className="line number1 index0 alt2"><code className="comments"># Python program for implementation of Insertion Sort </code></div>
                  <div className="line number2 index1 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number3 index2 alt2 highlighted"><code className="comments"># Function to do insertion sort </code></div>
                  <div className="line number4 index3 alt1 highlighted"><code className="keyword">def</code> <code className="plain">insertionSort(arr): </code></div>
                  <div className="line number5 index4 alt2 highlighted"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number6 index5 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># Traverse through 1 to len(arr) </code></div>
                  <div className="line number7 index6 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">for</code> <code className="plain">i </code><code className="keyword">in</code> <code className="functions">range</code><code className="plain">(</code><code className="value">1</code><code className="plain">, </code><code className="functions">len</code><code className="plain">(arr)): </code></div>
                  <div className="line number8 index7 alt1 highlighted"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number9 index8 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">key </code><code className="keyword">=</code> <code className="plain">arr[i] </code></div>
                  <div className="line number10 index9 alt1 highlighted"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number11 index10 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># Move elements of arr[0..i-1], that are </code></div>
                  <div className="line number12 index11 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># greater than key, to one position ahead </code></div>
                  <div className="line number13 index12 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># of their current position </code></div>
                  <div className="line number14 index13 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">j </code><code className="keyword">=</code> <code className="plain">i</code><code className="keyword">-</code><code className="value">1</code></div>
                  <div className="line number15 index14 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">while</code> <code className="plain">j &gt;</code><code className="keyword">=</code> <code className="value">0</code> <code className="keyword">and</code> <code className="plain">key &lt; arr[j] : </code></div>
                  <div className="line number16 index15 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">arr[j </code><code className="keyword">+</code> <code className="value">1</code><code className="plain">] </code><code className="keyword">=</code> <code className="plain">arr[j] </code></div>
                  <div className="line number17 index16 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">j </code><code className="keyword">-</code><code className="keyword">=</code> <code className="value">1</code></div>
                  <div className="line number18 index17 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">arr[j </code><code className="keyword">+</code> <code className="value">1</code><code className="plain">] </code><code className="keyword">=</code> <code className="plain">key </code></div>
                  <div className="line number19 index18 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number20 index19 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number21 index20 alt2"><code className="comments"># Driver code to test above </code></div>
                  <div className="line number22 index21 alt1"><code className="plain">arr </code><code className="keyword">=</code> <code className="plain">[</code><code className="value">12</code><code className="plain">, </code><code className="value">11</code><code className="plain">, </code><code className="value">13</code><code className="plain">, </code><code className="value">5</code><code className="plain">, </code><code className="value">6</code><code className="plain">] </code></div>
                  <div className="line number23 index22 alt2"><code className="plain">insertionSort(arr) </code></div>
                  <div className="line number24 index23 alt1"><code className="keyword">for</code> <code className="plain">i </code><code className="keyword">in</code> <code className="functions">range</code><code className="plain">(</code><code className="functions">len</code><code className="plain">(arr)): </code></div>
                  <div className="line number25 index24 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">print</code> <code className="plain">(</code><code className="string">"% d"</code> <code className="keyword">%</code> <code className="plain">arr[i]) </code></div>
                  <div className="line number26 index25 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                </div>
              </div>
            </h5>
            <h5 className="mt-5 mb-4"><span><h4 style={{color:'#f0ffff'}}><b>Recursive </b>Implementation of Insertion Sort</h4></span>
              <div className="container text-left">
                <div className="offset-3 mt-4 mb-5">
                  <div className="line number1 index0 alt2"><code className="comments"># Recursive Python program for insertion sort </code></div>
                  <div className="line number2 index1 alt1"><code className="comments"># Recursive function to sort an array using insertion sort </code></div>
                  <div className="line number3 index2 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number4 index3 alt1 highlighted"><code className="keyword">def</code> <code className="plain">insertionSortRecursive(arr,n): </code></div>
                  <div className="line number5 index4 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># base case </code></div>
                  <div className="line number6 index5 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="plain">n&lt;</code><code className="keyword">=</code><code className="value">1</code><code className="plain">: </code></div>
                  <div className="line number7 index6 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">return</code></div>
                  <div className="line number8 index7 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number9 index8 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># Sort first n-1 elements </code></div>
                  <div className="line number10 index9 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">insertionSortRecursive(arr,n</code><code className="keyword">-</code><code className="value">1</code><code className="plain">) </code></div>
                  <div className="line number11 index10 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">'''Insert last element at its correct position </code></div>
                  <div className="line number12 index11 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">in sorted array.'''</code></div>
                  <div className="line number13 index12 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">last </code><code className="keyword">=</code> <code className="plain">arr[n</code><code className="keyword">-</code><code className="value">1</code><code className="plain">] </code></div>
                  <div className="line number14 index13 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">j </code><code className="keyword">=</code> <code className="plain">n</code><code className="keyword">-</code><code className="value">2</code></div>
                  <div className="line number15 index14 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number16 index15 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># Move elements of arr[0..i-1], that are </code></div>
                  <div className="line number17 index16 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># greater than key, to one position ahead </code></div>
                  <div className="line number18 index17 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># of their current position&nbsp; </code></div>
                  <div className="line number19 index18 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">while</code> <code className="plain">(j&gt;</code><code className="keyword">=</code><code className="value">0</code> <code className="keyword">and</code> <code className="plain">arr[j]&gt;last): </code></div>
                  <div className="line number20 index19 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">arr[j</code><code className="keyword">+</code><code className="value">1</code><code className="plain">] </code><code className="keyword">=</code> <code className="plain">arr[j] </code></div>
                  <div className="line number21 index20 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">j </code><code className="keyword">=</code> <code className="plain">j</code><code className="keyword">-</code><code className="value">1</code></div>
                  <div className="line number22 index21 alt1 highlighted"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number23 index22 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">arr[j</code><code className="keyword">+</code><code className="value">1</code><code className="plain">]</code><code className="keyword">=</code><code className="plain">last </code></div>
                  <div className="line number24 index23 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number25 index24 alt2"><code className="comments"># A utility function to print an array of size n </code></div>
                  <div className="line number26 index25 alt1"><code className="keyword">def</code> <code className="plain">printArray(arr,n): </code></div>
                  <div className="line number27 index26 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">for</code> <code className="plain">i </code><code className="keyword">in</code> <code className="functions">range</code><code className="plain">(n): </code></div>
                  <div className="line number28 index27 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="functions">print</code> <code className="plain">arr[i], </code></div>
                  <div className="line number29 index28 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number30 index29 alt1"><code className="comments"># Driver program to test insertion sort&nbsp; </code></div>
                  <div className="line number31 index30 alt2"><code className="plain">arr </code><code className="keyword">=</code> <code className="plain">[</code><code className="value">12</code><code className="plain">,</code><code className="value">11</code><code className="plain">,</code><code className="value">13</code><code className="plain">,</code><code className="value">5</code><code className="plain">,</code><code className="value">6</code><code className="plain">] </code></div>
                  <div className="line number32 index31 alt1"><code className="plain">n </code><code className="keyword">=</code> <code className="functions">len</code><code className="plain">(arr) </code></div>
                  <div className="line number33 index32 alt2"><code className="plain">insertionSortRecursive(arr, n) </code></div>
                  <div className="line number34 index33 alt1"><code className="plain">printArray(arr, n) </code></div>
                  <div className="line number35 index34 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                </div>
              </div>
            </h5>
          </code>
        </Text>
      </div>
    );
  }
);