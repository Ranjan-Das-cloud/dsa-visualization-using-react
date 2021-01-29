import React, { forwardRef, HTMLAttributes } from "react";
import { Text } from "@react-md/typography";

export default forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function PageH3(props, ref) {
    return (
      <div {...props} ref={ref} className="mt-3 mb-1">
        <Text type="headline-4">Source code in Python</Text>
        <Text>
          <code>
          <h5 className="mt-5 mb-4"><span><h4 style={{color:'#f0ffff'}}>Implementation of Heap Sort</h4></span>
              <div className="container text-left">
                <div className="offset-3 mt-4 mb-5">
                  <div className="line number1 index0 alt2"><code className="comments"># Python program for implementation of heap Sort</code></div>
                  <div className="line number2 index1 alt1">&nbsp;</div>
                  <div className="line number3 index2 alt2"><code className="comments"># To heapify subtree rooted at index i.</code></div>
                  <div className="line number4 index3 alt1"><code className="comments"># n is size of heap</code></div>
                  <div className="line number5 index4 alt2">&nbsp;</div>
                  <div className="line number6 index5 alt1">&nbsp;</div>
                  <div className="line number7 index6 alt2"><code className="keyword">def</code> <code className="plain">heapify(arr, n, i):</code></div>
                  <div className="line number8 index7 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">largest </code><code className="keyword">=</code> <code className="plain">i&nbsp; </code><code className="comments"># Initialize largest as root</code></div>
                  <div className="line number9 index8 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">l </code><code className="keyword">=</code> <code className="value">2</code> <code className="keyword">*</code> <code className="plain">i </code><code className="keyword">+</code> <code className="value">1</code>&nbsp;&nbsp;&nbsp;&nbsp; <code className="comments"># left = 2*i + 1</code></div>
                  <div className="line number10 index9 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">r </code><code className="keyword">=</code> <code className="value">2</code> <code className="keyword">*</code> <code className="plain">i </code><code className="keyword">+</code> <code className="value">2</code>&nbsp;&nbsp;&nbsp;&nbsp; <code className="comments"># right = 2*i + 2</code></div>
                  <div className="line number11 index10 alt2">&nbsp;</div>
                  <div className="line number12 index11 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># See if left child of root exists and is</code></div>
                  <div className="line number13 index12 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># greater than root</code></div>
                  <div className="line number14 index13 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="plain">l &lt; n </code><code className="keyword">and</code> <code className="plain">arr[largest] &lt; arr[l]:</code></div>
                  <div className="line number15 index14 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">largest </code><code className="keyword">=</code> <code className="plain">l</code></div>
                  <div className="line number16 index15 alt1">&nbsp;</div>
                  <div className="line number17 index16 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># See if right child of root exists and is</code></div>
                  <div className="line number18 index17 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># greater than root</code></div>
                  <div className="line number19 index18 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="plain">r &lt; n </code><code className="keyword">and</code> <code className="plain">arr[largest] &lt; arr[r]:</code></div>
                  <div className="line number20 index19 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">largest </code><code className="keyword">=</code> <code className="plain">r</code></div>
                  <div className="line number21 index20 alt2">&nbsp;</div>
                  <div className="line number22 index21 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># Change root, if needed</code></div>
                  <div className="line number23 index22 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="plain">largest !</code><code className="keyword">=</code> <code className="plain">i:</code></div>
                  <div className="line number24 index23 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">arr[i], arr[largest] </code><code className="keyword">=</code> <code className="plain">arr[largest], arr[i]&nbsp; </code><code className="comments"># swap</code></div>
                  <div className="line number25 index24 alt2">&nbsp;</div>
                  <div className="line number26 index25 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># Heapify the root.</code></div>
                  <div className="line number27 index26 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">heapify(arr, n, largest)</code></div>
                  <div className="line number28 index27 alt1">&nbsp;</div>
                  <div className="line number29 index28 alt2"><code className="comments"># The main function to sort an array of given size</code></div>
                  <div className="line number30 index29 alt1">&nbsp;</div>
                  <div className="line number31 index30 alt2">&nbsp;</div>
                  <div className="line number32 index31 alt1"><code className="keyword">def</code> <code className="plain">heapSort(arr):</code></div>
                  <div className="line number33 index32 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">n </code><code className="keyword">=</code> <code className="functions">len</code><code className="plain">(arr)</code></div>
                  <div className="line number34 index33 alt1">&nbsp;</div>
                  <div className="line number35 index34 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># Build a maxheap.</code></div>
                  <div className="line number36 index35 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">for</code> <code className="plain">i </code><code className="keyword">in</code> <code className="functions">range</code><code className="plain">(n</code><code className="keyword">/</code><code className="keyword">/</code><code className="value">2</code> <code className="keyword">-</code> <code className="value">1</code><code className="plain">, </code><code className="keyword">-</code><code className="value">1</code><code className="plain">, </code><code className="keyword">-</code><code className="value">1</code><code className="plain">):</code></div>
                  <div className="line number37 index36 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">heapify(arr, n, i)</code></div>
                  <div className="line number38 index37 alt1">&nbsp;</div>
                  <div className="line number39 index38 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># One by one extract elements</code></div>
                  <div className="line number40 index39 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">for</code> <code className="plain">i </code><code className="keyword">in</code> <code className="functions">range</code><code className="plain">(n</code><code className="keyword">-</code><code className="value">1</code><code className="plain">, </code><code className="value">0</code><code className="plain">, </code><code className="keyword">-</code><code className="value">1</code><code className="plain">):</code></div>
                  <div className="line number41 index40 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">arr[i], arr[</code><code className="value">0</code><code className="plain">] </code><code className="keyword">=</code> <code className="plain">arr[</code><code className="value">0</code><code className="plain">], arr[i]&nbsp; </code><code className="comments"># swap</code></div>
                  <div className="line number42 index41 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">heapify(arr, i, </code><code className="value">0</code><code className="plain">)</code></div>
                  <div className="line number43 index42 alt2">&nbsp;</div>
                  <div className="line number44 index43 alt1">&nbsp;</div>
                  <div className="line number45 index44 alt2"><code className="comments"># Driver code</code></div>
                  <div className="line number46 index45 alt1"><code className="plain">arr </code><code className="keyword">=</code> <code className="plain">[</code><code className="value">12</code><code className="plain">, </code><code className="value">11</code><code className="plain">, </code><code className="value">13</code><code className="plain">, </code><code className="value">5</code><code className="plain">, </code><code className="value">6</code><code className="plain">, </code><code className="value">7</code><code className="plain">]</code></div>
                  <div className="line number47 index46 alt2"><code className="plain">heapSort(arr)</code></div>
                  <div className="line number48 index47 alt1"><code className="plain">n </code><code className="keyword">=</code> <code className="functions">len</code><code className="plain">(arr)</code></div>
                  <div className="line number49 index48 alt2"><code className="keyword">print</code><code className="plain">(</code><code className="string">"Sorted array is"</code><code className="plain">)</code></div>
                  <div className="line number50 index49 alt1"><code className="keyword">for</code> <code className="plain">i </code><code className="keyword">in</code> <code className="functions">range</code><code className="plain">(n):</code></div>
                  <div className="line number51 index50 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="functions">print</code><code className="plain">(</code><code className="string">"%d"</code> <code className="keyword">%</code> <code className="plain">arr[i]),</code></div>
                </div>
              </div>
            </h5>
          </code>
        </Text>
      </div>
    );
  }
);