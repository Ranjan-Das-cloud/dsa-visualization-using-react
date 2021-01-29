import React, { forwardRef, HTMLAttributes } from "react";
import { Text } from "@react-md/typography";

export default forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function PageQ3(props, ref) {
    return (
      <div {...props} ref={ref} className="mt-3 mb-1">
        <Text type="headline-4">Source code in Python</Text>
        <Text>
          <code>
            <h5 className="mt-5 mb-4"><span><h4 style={{color:'#f0ffff'}}>Implementation of Quick Sort</h4></span>
              <div className="container text-left">
                <div className="offset-3 mt-4 mb-5">
                  <div className="line number1 index0 alt2"><code className="comments"># Python program for implementation of Quicksort Sort </code></div>
                  <div className="line number2 index1 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number3 index2 alt2 highlighted"><code className="comments"># This function takes last element as pivot, places </code></div>
                  <div className="line number4 index3 alt1 highlighted"><code className="comments"># the pivot element at its correct position in sorted </code></div>
                  <div className="line number5 index4 alt2 highlighted"><code className="comments"># array, and places all smaller (smaller than pivot) </code></div>
                  <div className="line number6 index5 alt1 highlighted"><code className="comments"># to left of pivot and all greater elements to right </code></div>
                  <div className="line number7 index6 alt2 highlighted"><code className="comments"># of pivot </code></div>
                  <div className="line number8 index7 alt1 highlighted"><code className="keyword">def</code> <code className="plain">partition(arr,low,high): </code></div>
                  <div className="line number9 index8 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">i </code><code className="keyword">=</code> <code className="plain">( low</code><code className="keyword">-</code><code className="value">1</code> <code className="plain">)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </code><code className="comments"># index of smaller element </code></div>
                  <div className="line number10 index9 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">pivot </code><code className="keyword">=</code> <code className="plain">arr[high]&nbsp;&nbsp;&nbsp;&nbsp; </code><code className="comments"># pivot </code></div>
                  <div className="line number11 index10 alt2 highlighted"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number12 index11 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">for</code> <code className="plain">j </code><code className="keyword">in</code> <code className="functions">range</code><code className="plain">(low , high): </code></div>
                  <div className="line number13 index12 alt2 highlighted"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number14 index13 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># If current element is smaller than the pivot </code></div>
                  <div className="line number15 index14 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code>&nbsp;&nbsp; <code className="plain">arr[j] &lt; pivot: </code></div>
                  <div className="line number16 index15 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number17 index16 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># increment index of smaller element </code></div>
                  <div className="line number18 index17 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">i </code><code className="keyword">=</code> <code className="plain">i</code><code className="keyword">+</code><code className="value">1</code>&nbsp;</div>
                  <div className="line number19 index18 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">arr[i],arr[j] </code><code className="keyword">=</code> <code className="plain">arr[j],arr[i] </code></div>
                  <div className="line number20 index19 alt1 highlighted"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number21 index20 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">arr[i</code><code className="keyword">+</code><code className="value">1</code><code className="plain">],arr[high] </code><code className="keyword">=</code> <code className="plain">arr[high],arr[i</code><code className="keyword">+</code><code className="value">1</code><code className="plain">] </code></div>
                  <div className="line number22 index21 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">return</code> <code className="plain">( i</code><code className="keyword">+</code><code className="value">1</code> <code className="plain">) </code></div>
                  <div className="line number23 index22 alt2 highlighted"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number24 index23 alt1 highlighted"><code className="comments"># The main function that implements QuickSort </code></div>
                  <div className="line number25 index24 alt2 highlighted"><code className="comments"># arr[] --&gt; Array to be sorted, </code></div>
                  <div className="line number26 index25 alt1 highlighted"><code className="comments"># low&nbsp; --&gt; Starting index, </code></div>
                  <div className="line number27 index26 alt2 highlighted"><code className="comments"># high&nbsp; --&gt; Ending index </code></div>
                  <div className="line number28 index27 alt1 highlighted"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number29 index28 alt2 highlighted"><code className="comments"># Function to do Quick sort </code></div>
                  <div className="line number30 index29 alt1 highlighted"><code className="keyword">def</code> <code className="plain">quickSort(arr,low,high): </code></div>
                  <div className="line number31 index30 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="plain">low &lt; high: </code></div>
                  <div className="line number32 index31 alt1 highlighted"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number33 index32 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># pi is partitioning index, arr[p] is now </code></div>
                  <div className="line number34 index33 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># at right place </code></div>
                  <div className="line number35 index34 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">pi </code><code className="keyword">=</code> <code className="plain">partition(arr,low,high) </code></div>
                  <div className="line number36 index35 alt1 highlighted"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number37 index36 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># Separately sort elements before </code></div>
                  <div className="line number38 index37 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># partition and after partition </code></div>
                  <div className="line number39 index38 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">quickSort(arr, low, pi</code><code className="keyword">-</code><code className="value">1</code><code className="plain">) </code></div>
                  <div className="line number40 index39 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">quickSort(arr, pi</code><code className="keyword">+</code><code className="value">1</code><code className="plain">, high) </code></div>
                  <div className="line number41 index40 alt2 highlighted"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number42 index41 alt1"><code className="comments"># Driver code to test above </code></div>
                  <div className="line number43 index42 alt2"><code className="plain">arr </code><code className="keyword">=</code> <code className="plain">[</code><code className="value">10</code><code className="plain">, </code><code className="value">7</code><code className="plain">, </code><code className="value">8</code><code className="plain">, </code><code className="value">9</code><code className="plain">, </code><code className="value">1</code><code className="plain">, </code><code className="value">5</code><code className="plain">] </code></div>
                  <div className="line number44 index43 alt1"><code className="plain">n </code><code className="keyword">=</code> <code className="functions">len</code><code className="plain">(arr) </code></div>
                  <div className="line number45 index44 alt2"><code className="plain">quickSort(arr,</code><code className="value">0</code><code className="plain">,n</code><code className="keyword">-</code><code className="value">1</code><code className="plain">) </code></div>
                  <div className="line number46 index45 alt1"><code className="keyword">print</code> <code className="plain">(</code><code className="string">"Sorted array is:"</code><code className="plain">) </code></div>
                  <div className="line number47 index46 alt2"><code className="keyword">for</code> <code className="plain">i </code><code className="keyword">in</code> <code className="functions">range</code><code className="plain">(n): </code></div>
                  <div className="line number48 index47 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">print</code> <code className="plain">(</code><code className="string">"%d"</code> <code className="keyword">%</code><code className="plain">arr[i]), </code></div>
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